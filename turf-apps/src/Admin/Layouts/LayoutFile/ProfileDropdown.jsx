import { User, Settings, LogOut } from 'lucide-react';

const ProfileDropdown = () => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border dark:border-gray-700">
      <div className="px-4 py-2 border-b dark:border-gray-700">
        <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">john@example.com</p>
      </div>
      
      <button className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
        <User className="h-4 w-4 mr-2" />
        Profile
      </button>
      
      <button className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
        <Settings className="h-4 w-4 mr-2" />
        Settings
      </button>
      
      <div className="border-t dark:border-gray-700">
        <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center">
          <LogOut className="h-4 w-4 mr-2" />
          Sign out
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;