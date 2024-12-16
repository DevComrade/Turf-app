import { useState } from 'react';
import { 
  HomeIcon, 
  ChatAlt2Icon, 
  CogIcon, 
  LogoutIcon, 
  UploadIcon, 
  UserIcon, 
  MenuIcon, 
  BellIcon 
} from 'lucide-react';

const Sidebar = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const sidebarItems = [
    { icon: HomeIcon, label: 'Home', href: '#' },
    { icon: ChatAlt2Icon, label: 'Message', href: '#' },
    { icon: BellIcon, label: 'Chat', href: '#' },
    { icon: UserIcon, label: 'Profile', href: '#' },
    { icon: UploadIcon, label: 'Upload', href: '#' },
    { icon: CogIcon, label: 'Setting', href: '#' },
    { icon: LogoutIcon, label: 'Log-Out', href: '#' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarActive ? 'w-16' : 'w-64'
        } bg-purple-800 text-white transition-all duration-300 fixed h-full`}
      >
        <ul className="space-y-4 p-4">
          <li className="flex items-center space-x-4">
            <MenuIcon
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsSidebarActive(!isSidebarActive)}
            />
            {!isSidebarActive && <h2 className="text-xl font-semibold">Carpool</h2>}
          </li>

          {sidebarItems.map((item, index) => (
            <li key={index} className="hover:bg-purple-600 p-2 rounded-md">
              <a href={item.href} className="flex items-center space-x-4">
                <item.icon className="h-6 w-6" />
                {!isSidebarActive && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div
        className={`${
          isSidebarActive ? 'ml-16' : 'ml-64'
        } flex-1 transition-all duration-300`}
      >
        <div className="flex justify-between items-center bg-white shadow-md p-4">
          <MenuIcon
            className="h-6 w-6 cursor-pointer md:hidden"
            onClick={() => setIsSidebarActive(!isSidebarActive)}
          />
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;