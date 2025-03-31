import * as React from "react";
import ServiceImage from "../atoms/avatars/ServiceImage";

interface ServiceImageGalleryProps {
  images: string[];
}

const ServiceImageGallery: React.FC<ServiceImageGalleryProps> = ({ images }) => {
  return (
    <div className="-mx-3 flex items-center sm:-mx-4">
      <div className="w-full px-3 sm:px-4 xl:w-1/2">
        {images.slice(0, 2).map((image, index) => (
          <div key={index} className="py-3 sm:py-4">
            <ServiceImage src={image} alt={`about${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="w-full px-3 sm:px-4 xl:w-1/2">
        <div className="relative z-10 my-4">
          <ServiceImage src={images[2]} alt="about3" />
          <div className="absolute -bottom-16 -right-12 z-[-1]">
            <img src={images[3]} alt="about-extra" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceImageGallery;
