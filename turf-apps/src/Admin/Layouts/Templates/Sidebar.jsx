import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutGrid,
  Users,
  ShoppingCart,
  ClipboardList,
  FileText,
  Bell,
  Settings,
  ChevronDown,
  X,
  User,
  UserPlus,
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Toggle Dropdowns
  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Navigation Items
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutGrid className="w-5 h-5" size={20} />,
      path: '/admin',
    },
    {
      id: 'Administration',
      label: 'Administration',
      icon: <Users className="w-5 h-5" size={20} />,
      hasDropdown: true,
      dropdownItems: [
        { id: 'user-creation', label: 'User Creation', icon: <User size={16} />, path: '/admin/administration/user-creation' },
        { id: 'user-logs', label: 'User Logs', icon: <UserPlus size={16} />, path: '/admin/administration/user-logs' },
      ],
    },
    {
      id: 'products',
      label: 'Products',
      icon: <ShoppingCart className="w-5 h-5" size={20} />,
      hasDropdown: true,
      dropdownItems: [
        { id: 'all-products', label: 'All Products' },
        { id: 'add-product', label: 'Add Product' },
        { id: 'categories', label: 'Categories' },
      ],
    },
    { id: 'orders', label: 'Orders', icon: <ClipboardList className="w-5 h-5" size={20} /> },
    { id: 'reports', label: 'Reports', icon: <FileText className="w-5 h-5" size={20} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" size={20} /> },
  ];

  // Check if the current route matches the navigation path
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Sidebar Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#2ECC71] dark:bg-gray-800 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold">Admin Panel</h2>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-5">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => (
              <li key={item.id}>
                {/* Main Navigation Item */}
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      toggleDropdown(item.id);
                    } else {
                      navigate(item.path);
                      if (window.innerWidth < 1024) toggleSidebar(); // Close sidebar on mobile
                    }
                  }}
                  className={`flex items-center w-full p-2 text-base transition-colors duration-200 rounded-lg ${
                    isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-100 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`ml-auto transform transition-transform duration-200 ${
                        openDropdowns[item.id] ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown Items */}
                {item.hasDropdown && openDropdowns[item.id] && (
                  <ul className="mt-2 space-y-1 pl-8">
                    {item.dropdownItems.map((dropdownItem) => (
                      <li key={dropdownItem.id}>
                        <button
                          onClick={() => {
                            navigate(dropdownItem.path);
                            if (window.innerWidth < 1024) toggleSidebar(); // Close sidebar on mobile
                          }}
                          className={`w-full p-2 text-sm transition-colors duration-200 rounded-lg flex items-center ${
                            isActive(dropdownItem.path)
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-100 hover:bg-blue-500 hover:text-white'
                          }`}
                        >
                          {dropdownItem.icon && (
                            <span className="mr-2">{dropdownItem.icon}</span>
                          )}
                          {dropdownItem.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
