import { API_BASE_URL } from '../Repositories/Repository';

// API Call Function
export const apiCall = async (endpoint, data = {}) => {
  try {
    // Make the API call
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Use the correct variable here, 'data' instead of 'values'
    });

    // Parse the JSON response
    const responseData = await response.json();

    // If the response is successful, return the response data
    if (response.ok) {
      return responseData;
    } else {
      throw new Error(`API Error: ${responseData.message || 'Unknown error'}`);
    }
  } catch (error) {
    console.error('API Error:', error);
    throw error; // Re-throw the error after logging it
  }
};
