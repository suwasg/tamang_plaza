import * as React from "react";
import GalleryImage from "../atoms/avatars/GalleryImage";
import { Link } from "@tanstack/react-router";

export interface GalleryCardProps {
  title: string;
  imageUrl: string;
  href?: string;
  className?: string;
  fullHeight?: boolean;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ title, imageUrl, href = "#", className = "", fullHeight = false }) => {
  return (
<Link
  to={href}
  className={`group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 ${fullHeight ? "h-full" : ""} ${className}`}
>
  {/* Image */}
  <GalleryImage src={imageUrl} alt={title} className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105" />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Title */}
  <p className="absolute top-0 left-0 p-4 text-xl text-white z-10 sm:text-2xl">
    {title}
  </p>
</Link>

  );
};

export default GalleryCard;
