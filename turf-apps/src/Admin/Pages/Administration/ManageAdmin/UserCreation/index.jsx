import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Repository } from '../../../../Repositories/Repository';
import Loading from '../../../../Components/Loading';
import Table from '../../../../Components/Table';
import ExportActions from '../../../../Components/ExportActions';  // Import the ExportActions component

function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await Repository.indexUser();
      setUsers(response.user_creation_index || []);
      setError(null);
    } catch (err) {
      setUsers([]);
      setError('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await Repository.deleteUser({ user_id: id });
          setUsers(users.filter((user) => user.user_id !== id));
          Swal.fire('Deleted!', 'The user has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'Failed to delete the user.', 'error');
        }
      }
    });
  };

  const editUser = (id) => {
    navigate(`/admin/administration/user-creation/edit/${id}`);
  };

  const filteredUsers = users.filter(
    (user) =>
      (user.user_name && user.user_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.email_id && user.email_id.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.mobile_number && user.mobile_number.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const columns = [
    { label: 'User Name', accessor: 'user_name' },
    { label: 'Email Id', accessor: 'email_id' },
    { label: 'Mobile Number', accessor: 'mobile_number' },
  ];

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
      <div className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-0">User Creation</h2>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/admin/administration/user-creation/create"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add New
            </Link>
            {/* Use ExportActions component */}
            <ExportActions
              columns={columns}
              currentData={currentUsers}
              printElementId="printable-table"
            />
          </div>
        </div>

        <div className="my-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        <Table
          id="printable-table"
          data={currentUsers}
          columns={columns}
          onDelete={deleteUser}
          onEdit={editUser}
          currentPage={currentPage}
          paginate={paginate}
          PerPage={usersPerPage}
          totalItems={filteredUsers.length}
          idField="user_id"
          showActions={true}
        />
      </div>
  );
}

export default Users;
