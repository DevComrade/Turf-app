import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPanel from './Admin/Layouts/Templates/AdminPanel';
import CustomerPanel from './Customer/Layouts/Templates/CustomerPanel';
import SellerPanel from './Seller/Layouts/Templates/SellerPanel';

// Customer
import CustomerDashboard from './Customer/Pages/Dashboard/index';

// Seller
import SellerDashboard from './Seller/Pages/Dashboard/index';

// Admin
import AdminDashboard from './Admin/Pages/Dashboard/index';
import UserType from './Admin/Pages/Administration/ManageAdmin/UserType/index';
import UserTypeCreate from './Admin/Pages/Administration/ManageAdmin/UserType/Create';
import UserTypeEdit from './Admin/Pages/Administration/ManageAdmin/UserType/Edit';

const App = () => {
  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="flex-1 ml-64">

        <BrowserRouter>
          <Routes>
            {/* Admin Routes */}
            <Route path='/Admin/' element={<AdminPanel pages={<AdminDashboard />}/>} />
            <Route path='/Admin/UserType' element={<AdminPanel pages={<UserType />}/>} />
            <Route path='/Admin/UserType/Create' element={<AdminPanel pages={<UserTypeCreate />}/>} />
            <Route path='/Admin/UserType/Edit' element={<AdminPanel pages={<UserTypeEdit />}/>} />

            {/* Customer Routes */}
            <Route path='/' element={<CustomerPanel pages={<CustomerDashboard />}/>} />
            {/* End Customer Routes */}

            {/* Seller Routes */}
            <Route path='/Seller/' element={<SellerPanel pages={<SellerDashboard />}/>} />
            {/* End Seller Routes */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
