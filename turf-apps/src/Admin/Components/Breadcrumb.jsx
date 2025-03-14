import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbMap = {
    'dashboard': 'Dashboard',
    'administration': 'Administration',
    'user-creation': 'User Creation',
    'user-type': 'User Type',
    'create': 'Create',
    'edit': 'Edit',
    'user-logs': 'User Log',
    'master': 'Master',
    'state': 'State',
    'city': 'City',
    'entry': 'Entry',
    'inward-entry': 'Inward Entry'
  };

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/dashboard" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
            <Home className="w-4 h-4 mr-2" />
          </Link>
        </li>
        {pathnames.map((name, index) => {
          // const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name}>
              <div className="flex items-center">
                <ChevronRight className="w-6 h-6 text-gray-400" />
                {isLast ? (
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                    {breadcrumbMap[name] || name}
                  </span>
                ) : (
                  <Link
                    // to={routeTo}
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2"
                  >
                    {breadcrumbMap[name] || name}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

