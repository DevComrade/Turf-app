
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';
 import StatsCard from '../../Components/Dashboard/StatsCard';
//  import DashboardSection from '../dashboard/DashboardSection';
//  import RecentActivity from '../dashboard/RecentActivity';

const MainContent = () => (
  <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
      <div className="flex space-x-2">
        <select className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
          <option>Last year</option>
        </select>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <StatsCard
        title="Total Users"
        value="2,543"
        trend={12.5}
        icon={Users}
        color="bg-blue-500"
      />
      <StatsCard
        title="Total Orders"
        value="1,235"
        trend={8.2}
        icon={ShoppingCart}
        color="bg-green-500"
      />
      <StatsCard
        title="Revenue"
        value="$45,678"
        trend={-3.8}
        icon={DollarSign}
        color="bg-purple-500"
      />
      <StatsCard
        title="Growth"
        value="23.5%"
        trend={15.3}
        icon={TrendingUp}
        color="bg-orange-500"
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* <DashboardSection title="Recent Activity"> */}
        {/* <RecentActivity /> */}
      {/* </DashboardSection> */}

      {/* <DashboardSection title="Top Products"> */}
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                <div>
                  <p className="font-medium">Product {item}</p>
                  <p className="text-sm text-gray-500">
                    ${Math.random().toFixed(2) * 100}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  {Math.floor(Math.random() * 1000)} sales
                </p>
                <p className="text-sm text-green-500">
                  +{Math.floor(Math.random() * 100)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      {/* </DashboardSection> */}
    </div>
  </div>
);

export default MainContent;
