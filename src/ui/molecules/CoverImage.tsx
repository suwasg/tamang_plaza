import { Link, useLocation } from "@tanstack/react-router";
import * as React from "react";

interface CoverImageProps {
  bgImage: string;
  heading: string;
  textColor: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ bgImage, heading, textColor }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter((seg) => seg);

  return (
    <div
      className="relative h-[35vh] lg:h-[50vh] flex justify-center items-center text-center"
      style={{
        background: `url(${bgImage}) no-repeat center center/cover`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 w-full">
        <h1 className={`text-3xl md:text-5xl font-bold ${textColor}`}>
          {heading}
        </h1>
        
        {/* Breadcrumbs */}
        <div className="mt-2 text-sm md:text-base text-gray-200">
          <Link to="/" aria-label="Go to home page" className="hover:text-primary">
            Home
          </Link>
          {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            return (
              <span key={index}>
                {" / "}
                <Link to={path} className="hover:text-primary capitalize">
                  {segment.replace("-", " ")}
                </Link>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
