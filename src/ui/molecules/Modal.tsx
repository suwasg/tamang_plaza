import * as React from "react";

interface ModalProps {
  image: { id: number; caption: string; url: string };
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="relative bg-white p-4 rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-700 text-white rounded-full p-2"
        >
          ✖
        </button>
        <img src={image.url} alt={image.caption} className="max-w-md rounded-md" />
        <p className="text-center mt-2">{image.caption}</p>
      </div>
    </div>
  );
};

export default Modal;