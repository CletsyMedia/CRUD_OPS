const CustomBtn = ({ onClick, color, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-white font-semibold ${color} mr-2`}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
