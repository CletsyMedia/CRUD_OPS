import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import endpoints from '../Endpoints/Endpoints';
import CustomBtn from '../CustomBtn/CustomBtn';

const AddUser = ({ onAdd, onClose }) => {
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  const [latestId, setLatestId] = useState(0); // State to store the latest ID

  useEffect(() => {
    const fetchLatestId = async () => {
      try {
        const response = await axios.get(endpoints.users);
        const users = response.data;
        if (users.length === 0) {
          setLatestId(0);
        } else {
          const maxId = Math.max(...users.map(user => parseInt(user.id)));
          setLatestId(maxId);
        }
      } catch (error) {
        console.error('Error fetching latest ID:', error);
      }
    };
    fetchLatestId();
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleAddUser = async () => {
    try {
      if (latestId === null) {
        console.error('Latest ID not loaded yet');
        return;
      }
      
      // Increment the latest ID to generate a new one
      const newUserId = latestId + 1;

      // Add the generated ID to the user data
      const userDataWithId = { ...userData, id: newUserId.toString() }; // Ensure the new ID is a string

      // Send the request with the user data including the custom ID
      const response = await axios.post(endpoints.users, userDataWithId);

      // Add the new user to the list
      onAdd(response.data);

      // Close the modal
      onClose();

      // Update the latest ID
      setLatestId(newUserId);
    } catch (error) {
      console.error('Error adding user:', error);
      // Handle error if necessary
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 pt-[10rem]">
      <div className="flex items-center justify-center">
        <div className="w-[25rem] bg-white shadow-sm p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Add User</h2>
          <form className="flex flex-col space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="px-4 py-2 border outline-none rounded-md bg-white"
              value={userData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="px-3 py-2 outline-none border rounded-md bg-white"
              value={userData.username}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="px-3 py-2 outline-none border rounded-md bg-white"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="px-3 py-2 outline-none border rounded-md bg-white"
              value={userData.phone}
              onChange={handleChange}
            />
            <div className="flex justify-between">
              <CustomBtn color="bg-gray-500 hover:bg-opacity-90" onClick={onClose}>
                Cancel
              </CustomBtn>
              <CustomBtn color="bg-green-500 hover:bg-opacity-90" onClick={handleAddUser}>
                Add
              </CustomBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AddUser.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddUser;
