import * as React from "react";
import GalleryImage from "../atoms/avatars/GalleryImage";

export interface GalleryCardProps {
  title: string;
  imageUrl: string;
  href?: string;
  className?: string;
  fullHeight?: boolean;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ title, imageUrl, href = "#", className = "", fullHeight = false }) => {
  return (
    <a
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 ${fullHeight ? "h-full" : ""} ${className}`}
    >
      <GalleryImage src={imageUrl} alt={title} className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
      <h3 className="absolute top-0 left-0 p-4 text-2xl font-medium text-white z-10 xs:text-xl md:text-3xl">
        {title}
      </h3>
    </a>
  );
};

export default GalleryCard;
