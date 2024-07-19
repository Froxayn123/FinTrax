import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen ? (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
          <div className="p-10 w-[1000px] bg-[#001833] bg-opacity-90 rounded-2xl border-2 border-white border-opacity-20 shadow-lg relative">
            <button onClick={onClose} className="absolute top-2 left-2 text-white text-xl focus:outline-none flex items-center ml-7 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
              </svg>
              <span className="ml-2">Back</span>
            </button>
            {children}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.array,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
