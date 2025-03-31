import * as React from "react";

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={`w-full h-full object-cover ${className}`} />
);

export default GalleryImage;
