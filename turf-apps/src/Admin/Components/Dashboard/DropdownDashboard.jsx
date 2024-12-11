import React from 'react';
import { BarChart2, PieChart, LineChart, Activity } from 'lucide-react';


const dashboardItems = [
  {
    title: 'Analytics',
    icon: React.createElement(BarChart2, { className: 'w-5 h-5' }),
    description: 'View detailed analytics and statistics',
    path: '/analytics'
  },
  {
    title: 'Sales Overview',
    icon: React.createElement(PieChart, { className: 'w-5 h-5' }),
    description: 'Monitor sales performance',
    path: '/sales'
  },
  {
    title: 'Performance',
    icon: React.createElement(LineChart, { className: 'w-5 h-5' }),
    description: 'Track system performance metrics',
    path: '/performance'
  },
  {
    title: 'Real-time Data',
    icon: React.createElement(Activity, { className: 'w-5 h-5' }),
    description: 'Monitor live statistics',
    path: '/realtime'
  }
];

const DashboardDropdown = () => {
  return React.createElement(
    'div',
    {
      className: 'absolute left-full ml-2 top-0 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50'
    },
    React.createElement(
      'div',
      { className: 'grid grid-cols-1 gap-2 p-2' },
      dashboardItems.map((item, index) =>
        React.createElement(
          'button',
          {
            key: index,
            className: 'flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left'
          },
          React.createElement(
            'div',
            {
              className: 'p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400'
            },
            item.icon
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              { className: 'font-medium text-gray-900 dark:text-white' },
              item.title
            ),
            React.createElement(
              'p',
              { className: 'text-sm text-gray-500 dark:text-gray-400' },
              item.description
            )
          )
        )
      )
    )
  );
};

export default DashboardDropdown;
