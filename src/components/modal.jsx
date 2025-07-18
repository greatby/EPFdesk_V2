// Modal.jsx
import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="animate-fadeIn fixed inset-0 z-[999999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="animate-slideUp relative mx-4 w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-0 right-4 text-[40px] text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
