import * as React from "react";

interface ServiceImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ServiceImage: React.FC<ServiceImageProps> = ({ src, alt, className = "" }) => (
  <img src={src} alt={alt} className={`w-full rounded-2xl ${className}`} />
);

export default ServiceImage;
