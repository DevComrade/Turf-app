import { useState, useEffect } from "react";
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".search-bar")) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-bar relative">
      <div
        className={`flex items-center ${
          isExpanded ? "w-64" : "w-10"
        } transition-all duration-300 ease-in-out`}
      >
        <button
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          onMouseEnter={() => setIsExpanded(true)}
        >
          <Search className="h-5 w-5 text-gray-600 dark:text-gray-200" />
        </button>
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Search..."
          className={`${
            isExpanded ? "w-full opacity-100 pl-2" : "w-0 opacity-0"
          } transition-all duration-300 ease-in-out py-2 border-b border-gray-300 dark:border-gray-600 bg-transparent dark:text-white focus:outline-none`}
        />
      </div>
    </div>
  );
};

export default SearchBar;