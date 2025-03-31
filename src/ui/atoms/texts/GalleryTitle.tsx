import * as React from "react";

const GalleryTitle: React.FC<{ title: string }> = ({ title }) => (
    <h3 className="absolute top-0 left-0 p-4 text-2xl font-medium text-white z-10 xs:text-xl md:text-3xl">
      {title}
    </h3>
  );
  
export default GalleryTitle;