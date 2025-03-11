import { Users, ShoppingCart } from 'lucide-react';

const Dashboard = () => {

  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      changeType: 'positive',
      icon: <Users className="text-blue-500" size={24} />
    },
    {
      title: 'Total Orders',
      value: '1,235',
      change: '+8.2%',
      changeType: 'positive',
      icon: <ShoppingCart className="text-green-500" size={24} />
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '-3.8%',
      changeType: 'negative',
      icon: <span className="text-purple-500 text-2xl">$</span>
    },
    {
      title: 'Growth',
      value: '23.5%',
      change: '+15.3%',
      changeType: 'positive',
      icon: <span className="text-orange-500 text-2xl">📈</span>
    }
  ];

  const topProducts = [
    { id: 1, name: 'Product 1', price: '$38.13', sales: '257 sales', change: '+70%' },
    { id: 2, name: 'Product 2', price: '$77.01', sales: '384 sales', change: '+13%' },
    { id: 3, name: 'Product 3', price: '$41.71', sales: '560 sales', change: '+34%' },
  ];

  return (
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard Overview</h1>
          <select className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</h3>
                <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-700">
                  {stat.icon}
                </div>
              </div>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                <span className={`ml-2 text-sm ${stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                  }`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">vs last month</p>
            </div>
          ))}
        </div>

        {/* Recent Activity & Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {/* Add your recent activity items here */}
                <p className="text-gray-600 dark:text-gray-400">No recent activity to display.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Products</h2>
              <div className="space-y-4">
                {topProducts.map((product) => (
                  <div key={product.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{product.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{product.price}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900 dark:text-white">{product.sales}</p>
                      <p className="text-sm text-green-500">{product.change}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dashboard;
