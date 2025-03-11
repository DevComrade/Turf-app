import { useState, useEffect } from "react";
import {
  Users,
  ShoppingCart,
  Bell,
  Settings,
  ChevronDown,
  Search,
  Sun,
  X,
  LogOut,
  User,
  Menu,
  MoonStar,
} from "lucide-react";

const Header = ({ toggleSidebar, isDarkMode, toggleDarkMode }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsProfileOpen(false);
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const notifications = [
    { id: 1, title: "New Order", message: "You have a new order #1234", time: "5 min ago" },
    { id: 2, title: "Payment Received", message: "Payment for order #5678 received", time: "1 hour ago" },
    { id: 3, title: "New User", message: "New user registered: John Doe", time: "2 hours ago" },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center justify-between p-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} className="text-gray-600 dark:text-gray-300" />
        </button>

        <div className="flex-1 flex items-center justify-end">
          <div
            className={`relative transition-all duration-300 ease-in-out ${isSearchOpen ? "w-full md:w-96" : "w-10"}`}
          >
            <input
              type="search"
              placeholder="Search..."
              className={`w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 
                           bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500
                           transition-all duration-300 ease-in-out
                           ${isSearchOpen ? "opacity-100" : "opacity-0"}`}
            />
            <button onClick={toggleSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </div>

          <div className="flex items-center ml-4 space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              {isDarkMode ? <MoonStar size={24} /> : <Sun size={24} />}
            </button>

            {/* Notification Dropdown */}
            <div className="relative">
              <button
                onClick={toggleNotifications}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative"
                aria-label="Notifications"
              >
                <Bell size={24} />
                <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  {notifications.length}
                </span>
              </button>

              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-10">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{notification.message}</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                    <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      View all notifications
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                  className="h-8 w-8 rounded-full"
                />
                <span className="hidden md:inline-block font-medium text-gray-700 dark:text-gray-200">John Doe</span>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-10">
                  <a
                    href="#profile"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <User size={16} className="inline-block mr-2" />
                    Your Profile
                  </a>
                  <a
                    href="#settings"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Settings size={16} className="inline-block mr-2" />
                    Settings
                  </a>
                  <a
                    href="#logout"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <LogOut size={16} className="inline-block mr-2" />
                    Log out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

