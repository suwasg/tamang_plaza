import * as React from "react";

interface GalleryItem {
  title: string;
  imageUrl: string;
  href?: string;
}

const galleryData: GalleryItem[] = [
  {
    title: "Wedding",
    imageUrl: "https://i.ytimg.com/vi/1ygPbMaSZRU/maxresdefault.jpg",
  },
  {
    title: "Birthday",
    imageUrl: "https://thumbs.dreamstime.com/b/kids-celebrating-birthday-party-blowing-group-joyful-little-candles-cake-holidays-concept-48869522.jpg",
  },
  {
    title: "Anniversary",
    imageUrl: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/wi/art/5cab1ee2443fd.jpeg",
  },
  {
    title: "Bratabandha",
    imageUrl: "https://photolifenepal.com/wp-content/uploads/2023/02/bratabanda_service_banner_3.jpg",
  },
  {
    title: "Celebrations",
    imageUrl: "https://nepaltraveller.com/images/main/1613024493.sidetrackimageTamu%20Lhosar-1.jpg",
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-screen-xl px-4 mx-auto sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          {/* Wines */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-full">
  <GalleryCard {...galleryData[0]} fullHeight />
</div>

          {/* Gin + 2 small */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <GalleryCard {...galleryData[1]} className="mb-4" />
            <div className="grid gap-4 grid-cols-2">
              <GalleryCard {...galleryData[2]} />
              <GalleryCard {...galleryData[3]} />
            </div>
          </div>

          {/* Brandy */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-full">
  <GalleryCard {...galleryData[4]} fullHeight />
</div>
        </div>
      </div>
    </section>
  );
};

interface CardProps extends GalleryItem {
  className?: string;
  fullHeight?: boolean;
}

const GalleryCard: React.FC<CardProps> = ({ title, imageUrl, href = "#", className = "", fullHeight = false }) => {
  return (
    <a
      href={href}
      className={`group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 ${fullHeight ? "h-full" : ""} ${className}`}
    >
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5" />
      <h3 className="absolute top-0 left-0 p-4 text-2xl font-medium text-white z-10 xs:text-xl md:text-3xl">
        {title}
      </h3>
    </a>
  );
};


export default Gallery;
