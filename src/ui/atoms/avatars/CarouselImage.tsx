import * as React from "react";

interface CarouselImageProps {
    src: string;
    alt: string;
  }
  
const CarouselImage: React.FC<CarouselImageProps> = ({ src, alt }) => {
    return <img src={src} alt={alt} className="w-full h-full object-cover" />;
  };
  
export default CarouselImage;
  