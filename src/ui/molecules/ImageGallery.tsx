import * as React from "react";
import { useState } from "react";
import ImageCard from "../atoms/avatars/ImageCard";
import Modal from "./Modal";

interface Image {
  id: number;
  caption: string;
  url: string;
}

const dummyImages: Image[] = [
  { id: 1, caption: "wedding image", url: "https://media.istockphoto.com/id/866987706/photo/indian-wedding-hands.jpg?s=612x612&w=0&k=20&c=6L-u9qhFPv9MjDnF4UK4AqjVbDKM4_8Xad72IHhwPZE=" },
  { id: 2, caption: "anniversary image", url: "https://www.stylecraze.com/wp-content/uploads/2021/06/204-Best-And-Romantic-Wedding-Anniversary-Wishes-For-Wife_1200px.jpg.webp" },
  { id: 3, caption: "birthday image", url: "https://images.prismic.io/floraqueen-blog/ZtnlAbzzk9ZrXD9D_shutterstock_1137003704.jpg?w=1000&h=600&fit=crop&auto=format,compress" },
  { id: 4, caption: "nepali wedding", url: "https://i.pinimg.com/originals/08/b7/79/08b779b792e991368daf4e70623bfd07.jpg" },
  { id: 5, caption: "Political Functions ", url: "https://superdesk-pro-c.s3.amazonaws.com/sd-nepalitimes/20221109101132/636b73d49c7e80680e06235ejpeg.jpg" },
  { id: 6, caption: "Durgesh Concert", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqRkNs2zCfnXHIay-V9pJsAUmpquNw-1Jsw&s" },
];

const ImageGallery: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const openImage = (index: number) => setCurrentImageIndex(index);
  const closeImage = () => setCurrentImageIndex(null);
  
  const nextImage = () => {
    if (currentImageIndex !== null && currentImageIndex < dummyImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex !== null && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <>
      {/* <Helmet>
        <title>Image Gallery</title>
        <meta name="description" content="Browse through our image gallery with stunning visuals." />
      </Helmet> */}

      <section className=" bg-gray-100  dark:bg-gray-800 font-poppins">
        <div className="mx-auto max-w-6xl">
          <h2 className=" font-bold text-center text-gray-800 text-4xl dark:text-gray-400">
            Our Gallery
          </h2>
          {/* <div className="mx-auto mb-10 border-b border-yellow-700 w-44 dark:border-gray-400"></div> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
            {dummyImages.map((image, index) => (
              <ImageCard key={image.id} src={image.url} alt="image" caption={image.caption} onClick={() => openImage(index)} />
            ))}
          </div>
        </div>
      </section>

      {currentImageIndex !== null && (
        <Modal
          image={dummyImages[currentImageIndex]}
          onClose={closeImage}
        />
      )}
    </>
  );
};

export default ImageGallery;
