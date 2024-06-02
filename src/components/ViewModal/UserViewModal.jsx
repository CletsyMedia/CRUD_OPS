import PropTypes from 'prop-types';

const UserViewModal = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-12 rounded-lg max-w-md">
        <h2 className="text-xl font-semibold mb-4">User Details</h2>
        <div className="flex items-start flex-col space-y-2">
          <p><strong>Id:</strong> {user.id}</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded-md">Close</button>
        </div>
      </div>
    </div>
  );
};

UserViewModal.propTypes = {
  user: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default UserViewModal;
