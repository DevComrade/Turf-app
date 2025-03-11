import { apiCall } from '../utils/apiCall';

export const API_BASE_URL = 'http://192.168.120.63:8000/api';

export const Repository = {
  // Auth
  // Login
  login: (data) => apiCall('login', data),

  // Administration
  // User Creation
  indexUser: (data) => apiCall('user-creation-index', data),
  createUser: (data) => apiCall('user-creation-create', data),
  insertUser: (data) => apiCall('user-creation-insert', data),
  editUser: (data) => apiCall('user-creation-edit', data),
  updateUser: (data) => apiCall('user-creation-update', data),
  deleteUser: (data) => apiCall('user-creation-delete', data),
  // User Logs
  indexUserLogs: (data) => apiCall('user-logs-index', data),
};
