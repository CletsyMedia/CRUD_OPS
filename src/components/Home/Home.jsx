import { useState } from 'react';
import useUserHook from './useUserHook';
import UserViewModal from '../ViewModal/UserViewModal';
import UpdateUsers from '../Update/UpdateUsers';
import CustomBtn from '../CustomBtn/CustomBtn';
import DeleteUser from '../DeleteUser/DeleteUser';
import AddUser from '../CreateUser/AddUser';
import '../../App.css';

const Home = () => {
  const { users, loading, error, deleteUser, addUser } = useUserHook();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleView = (user) => {
    setSelectedUser(user);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsUpdateModalOpen(true);
  };

  const handleUpdate = (updatedUserData) => {
    console.log('Updated user:', updatedUserData);
  };

  const handleDelete = (userId) => {
    console.log('Delete user with ID:', userId);
    setUserIdToDelete(userId);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => { 
    try {
      await deleteUser(userIdToDelete);
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
  
  const handleAddUser = () => {
    setIsAddModalOpen(true);
  }

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsUpdateModalOpen(false);
    setIsDeleteModalOpen(false);
    setUserIdToDelete(null);
    setIsAddModalOpen(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className='relative'>
        <h1 className='fixed top-0 left-0 w-full py-5 bg-white shadow-sm text-5xl sm-max:text-2xl'>List of Users From DataBase</h1>
        <div className="table-container overflow-x-auto pt-20 table-container">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <CustomBtn onClick={handleAddUser} color="bg-green-500 hover:bg-opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </CustomBtn>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap text-left">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-left">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-left">{user.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-left">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-left">{user.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-left">
                    <CustomBtn onClick={() => handleView(user)} color="bg-blue-500 hover:bg-opacity-90">View</CustomBtn>
                    <CustomBtn onClick={() => handleEdit(user)} color="bg-yellow-500 hover:bg-opacity-90">Edit</CustomBtn>
                    <CustomBtn onClick={() => handleDelete(user.id)} color="bg-red-500 hover:bg-opacity-90">Delete</CustomBtn>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedUser && !isUpdateModalOpen && <UserViewModal user={selectedUser} onClose={handleCloseModal} />}
      {isUpdateModalOpen && <UpdateUsers user={selectedUser} onUpdate={handleUpdate} onClose={handleCloseModal} />}
      <DeleteUser isOpen={isDeleteModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmDelete} />
      {isAddModalOpen && <AddUser onAdd={addUser} onClose={handleCloseModal} />} {/* Pass the addUser function to AddUser */}
    </>
  );
};

export default Home;
