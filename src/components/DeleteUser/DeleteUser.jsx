import PropTypes from 'prop-types';
import CustomBtn from '../CustomBtn/CustomBtn';


const DeleteUser = ({isOpen, onClose, onConfirm}) => {
  return (
    <div className={`fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex justify-center items-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-8 rounded-lg max-w-md">
        <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
        <p>Are you sure you want to delete this user?</p>
        <div className="mt-6 flex justify-end">
          <CustomBtn onClick={onClose} color="bg-gray-500 text-white mr-2">No</CustomBtn>
          <CustomBtn onClick={onConfirm} color="bg-red-500 text-white">Yes</CustomBtn>
        </div>
      </div>
    </div>
  );
}

DeleteUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default DeleteUser
