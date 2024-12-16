
import { useState } from 'react';
import { ChevronDown, ChevronRight, LayoutDashboard, Users, Settings, Box, ShoppingCart, FileText, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardDropdown from '../../Components/Dashboard/DropdownDashboard';

const menuItems = [
  {
    title: 'Dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    path: '/Admin/'
  },
  {
    title: 'Adminstration',
    icon: <Users className="w-5 h-5" />,
    submenu: [
      { title: 'User Type', path: '/Admin/UserType' },
      { title: 'User Creation', path: '/userCreation' },
      { title: 'User Logs', path: '/userLogs' },
    ],
  },
  {
    title: 'Products',
    icon: <Box className="w-5 h-5" />,
    submenu: [
      { title: 'All Products', path: '/products' },
      { title: 'Add Product', path: '/products/add' },
      { title: 'Categories', path: '/products/categories' },
    ],
  },
  {
    title: 'Orders',
    icon: <ShoppingCart className="w-5 h-5" />,
    submenu: [
      { title: 'All Orders', path: '/orders' },
      { title: 'Pending', path: '/orders/pending' },
      { title: 'Completed', path: '/orders/completed' },
    ],
  },
  {
    title: 'Reports',
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: 'Notifications',
    icon: <Bell className="w-5 h-5" />,
  },
  {
    title: 'Settings',
    icon: <Settings className="w-5 h-5" />,
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [showDashboardDropdown, setShowDashboardDropdown] = useState(false);

  const toggleSubmenu = (title) => {
    if (title === 'Dashboard') {
      setShowDashboardDropdown(!showDashboardDropdown);
    } else {
      setOpenSubmenus((prev) => ({
        ...prev,
        [title]: !prev[title],
      }));
    }
  };

  const handleMouseEnter = (title) => {
    if (title === 'Dashboard') {
      setShowDashboardDropdown(true);
    }
  };

  const handleMouseLeave = (title) => {
    if (title === 'Dashboard') {
      setShowDashboardDropdown(false);
    }
  };

  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} min-h-screen bg-green-500 text-white transition-all duration-300 fixed left-0 top-0`}>
      <div className="p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-[-12px] top-6 bg-white rounded-full p-1 hover:bg-white"
        >
          <ChevronRight className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <nav className="mt-8">
        {menuItems.map((item, index) => (
          <div key={index} className="mb-2 relative">
            {item.title === 'Dashboard' ? (
              <Link
                to={item.path}
                className="w-full flex items-center px-4 py-3 hover:bg-gray-700 transition-colors"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={() => handleMouseLeave(item.title)}
              >
                <span className="mr-4">{item.icon}</span>
                {isOpen && <span className="flex-1 text-left">{item.title}</span>}
              </Link>
            ) : (
              <button
                onClick={() => toggleSubmenu(item.title)}
                className={`w-full flex items-center px-4 py-3 hover:bg-gray-700 transition-colors
                ${openSubmenus[item.title] ? 'bg-gray-700' : ''}`}
              >
                <span className="mr-4">{item.icon}</span>
                {isOpen && (
                  <>
                    <span className="flex-1 text-left">{item.title}</span>
                    {item.submenu && (
                      <ChevronDown
                        className={`w-5 h-5 transform transition-transform ${openSubmenus[item.title] ? 'rotate-180' : ''}`}
                      />
                    )}
                  </>
                )}
              </button>
            )}

            {/* Show Dashboard Dropdown */}
            {item.title === 'Dashboard' && showDashboardDropdown && isOpen && (
              <div>
                <DashboardDropdown />
              </div>
            )}

            {/* Regular Submenu */}
            {isOpen && item.submenu && openSubmenus[item.title] && (
              <div className="bg-gray-900">
                {item.submenu.map((subItem, subIndex) => (
                  <Link
                    key={`${subItem.title}-${subIndex}`}
                    to={subItem.path}
                    className="w-full flex items-center px-12 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
