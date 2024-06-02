const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 mr-3 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.373A8 8 0 0012 20v4c-6.627 0-12-5.373-12-12h4zm14-2a8 8 0 00-8-8V0c6.627 0 12 5.373 12 12h-4zM20 11.373A8 8 0 0012 4V0c6.627 0 12 5.373 12 12h-4z"
    ></path>
  </svg>
);

export default Spinner;
