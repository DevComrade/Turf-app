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


const App = () => {
  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="flex-1 ml-64">

    <BrowserRouter>

      <Routes>
        
         {/* Admin Routes */}
         <Route path='/Admin/' element={<AdminPanel pages={<AdminDashboard />}/>} />

        {/* Customer Routes */}
        <Route path='/' element={<CustomerPanel pages={<CustomerDashboard />}/>} />
        {/* End Customer Routes */}

        {/* Seller Routes */}
        <Route path='/Seller/' element={<SellerPanel pages={<SellerDashboard />}/>} />
        {/* End Seller Routes */}

       
        {/* End Seller Routes */}
      </Routes>
    </BrowserRouter>
  </div>
  </div>
  )
}
export default App