import * as React from "react";
import Button from "../buttons/Button";
import { FaCamera } from "react-icons/fa";

interface ImageCardProps {
  src: string;
  alt: string;
  caption: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, caption, onClick }) => {
  return (
    <div className="relative rounded-md shadow-sm overflow-hidden group">
      <img 
        src={src} 
        alt={alt}
        className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
        onClick={onClick}
      />
      <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
      <div className="absolute z-10 hidden group-hover:block top-4 right-4">
        <button className="bg-orange-600 hover:bg-orange-700 text-white btn-icon rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
          </svg>
          {/* <FaCamera/> */}
        </button>
      </div>
      <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
        <p className="text-white text-lg">{caption}</p>
      </div>
    </div>
  );
};

export default ImageCard;
