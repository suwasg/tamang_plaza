import * as React from "react";
import ImageGallery from "../../molecules/ImageGallery";

const ImageGalleryPage: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-6">Image Gallery</h1>
      <ImageGallery />
    </div>
  );
};

export default ImageGalleryPage;