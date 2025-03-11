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
import UserCreation from './Admin/Pages/Administration/ManageAdmin/UserCreation/index';
import UserCreationCreate from './Admin/Pages/Administration/ManageAdmin/UserCreation/Create';
import UserCreationEdit from './Admin/Pages/Administration/ManageAdmin/UserCreation/Edit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes */}
        <Route path='/Admin/' element={<AdminPanel pages={<AdminDashboard />} />} />
        <Route path='/admin/administration/user-creation' element={<AdminPanel pages={<UserCreation />} />} />
        <Route path='/admin/administration/user-creation/create' element={<AdminPanel pages={<UserCreationCreate />} />} />
        <Route path='/admin/administration/user-creation/edit/:id' element={<AdminPanel pages={<UserCreationEdit />} />} />

        {/* Customer Routes */}
        <Route path='/' element={<CustomerPanel pages={<CustomerDashboard />} />} />
        {/* End Customer Routes */}

        {/* Seller Routes */}
        <Route path='/seller/' element={<SellerPanel pages={<SellerDashboard />} />} />
        {/* End Seller Routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
