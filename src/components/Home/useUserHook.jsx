import { useState, useEffect } from 'react';
import axios from 'axios';
import endpoints from '../Endpoints/Endpoints';

const useUserHook = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(endpoints.users);
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`${endpoints.users}/${userId}`);
      // Filter out the deleted user and update the IDs of the remaining users
      const updatedUsers = users.filter(user => user.id !== userId)
                                 .map((user, index) => ({ ...user, id: index + 1 }));
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle error if necessary
    }
  };
  
  

  return { users, loading, error, deleteUser };
};

export default useUserHook;
