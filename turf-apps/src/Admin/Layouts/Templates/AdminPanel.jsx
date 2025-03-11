import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AdminPanel = ({ pages }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkModePreference);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
        <Header toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        {/* Main Content Area */}
        <div className="flex flex-grow overflow-hidden">
          {/* Pass isOpen prop to Sidebar */}
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <main className="flex-grow overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-6 py-8">{pages}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
