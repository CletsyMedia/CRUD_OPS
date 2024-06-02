import { useState } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import endpoints from "../Endpoints/Endpoints";
import CustomBtn from "../CustomBtn/CustomBtn";

const UpdateUsers = ({ user, onUpdate, onClose }) => {
  const [userData, setUserData] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    phone: user.phone,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${endpoints.users}/${user.id}`, userData);
      onUpdate(response.data); // Update the user state with the updated data
      onClose(); // Close the update form
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle error if necessary
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 pt-[10rem]">
      <div className="flex items-center justify-center">
        <div className="w-[25rem] bg-white shadow-sm p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Update User</h2>
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
              <CustomBtn color="bg-yellow-500 hover:bg-opacity-90" onClick={onClose}>
                Back
              </CustomBtn>
              <CustomBtn color="bg-green-500 hover:bg-opacity-90" onClick={handleUpdate}>
                Update
              </CustomBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

UpdateUsers.propTypes = {
  user: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UpdateUsers;
