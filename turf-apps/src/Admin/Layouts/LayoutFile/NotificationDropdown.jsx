

const notifications = [
  {
    id: 1,
    title: 'New Order #1234',
    message: 'A new order has been placed',
    time: '5 min ago',
    isRead: false,
  },
  {
    id: 2,
    title: 'System Update',
    message: 'System maintenance scheduled',
    time: '1 hour ago',
    isRead: false,
  },
  {
    id: 3,
    title: 'New User Registration',
    message: 'New user signed up',
    time: '2 hours ago',
    isRead: true,
  },
];

const NotificationDropdown = () => {
  return (
    <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50 border dark:border-gray-700">
      <div className="px-4 py-2 border-b dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 ${
              !notification.isRead ? 'bg-blue-50 dark:bg-blue-900/20' : ''
            }`}
          >
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {notification.title}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {notification.message}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              {notification.time}
            </p>
          </div>
        ))}
      </div>
      <div className="px-4 py-2 border-t dark:border-gray-700">
        <button className="text-sm text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 w-full text-center">
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationDropdown;