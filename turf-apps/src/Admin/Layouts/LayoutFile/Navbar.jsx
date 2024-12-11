import { useState } from 'react'; 
import { Bell, Sun, Moon, Menu } from 'lucide-react'; 
import NotificationDropdown from './NotificationDropdown'; 
import ProfileDropdown from './ProfileDropdown'; 
import SearchBar from './SearchBar';

const Navbar = () => 
    { const [isDarkMode, setIsDarkMode] = useState(false); 
        const [showNotifications, setShowNotifications] = useState(false); 
        const [showProfile, setShowProfile] = useState(false);

const toggleDarkMode = () => 
    { setIsDarkMode(!isDarkMode); document.documentElement.classList.toggle('dark'); };

return ( <nav className="bg-white dark:bg-gray-800 shadow-md"> 
<div className="max-w-full mx-auto px-4"> 
    <div className="flex items-center justify-between h-16"> 
        {/* Mobile menu button */} 
        <button className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"> 
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-200" /> 
            </button>

      {/* Right side icons */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Search Bar */}
        <SearchBar />

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-gray-600 dark:text-gray-200" />
          ) : (
            <Moon className="h-5 w-5 text-gray-600 dark:text-gray-200" />
          )}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <div className="relative">
              <Bell className="h-5 w-5 text-gray-600 dark:text-gray-200" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">3</span>
              </span>
            </div>
          </button>
          {showNotifications && <NotificationDropdown />}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            className="flex items-center space-x-3 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setShowProfile(!showProfile)}
          >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-8 w-8 rounded-full"
            />
          </button>
          {showProfile && <ProfileDropdown />}
        </div>
      </div>
    </div>
  </div>
</nav>
);
 };

export default Navbar;