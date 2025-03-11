export const fetchWrapper = async (url, options = {}) => {
    try {
      const response = await fetch(url, {
        ...options,
        method: 'POST', // Always use POST method
      });
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'An error occurred while making the request.');
      }
  
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  