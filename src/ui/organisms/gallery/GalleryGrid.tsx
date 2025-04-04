import * as React from "react";
import GalleryCard from "../../molecules/GalleryCard";

const galleryData = [
  { title: "Wedding", imageUrl: "https://i.ytimg.com/vi/1ygPbMaSZRU/maxresdefault.jpg" },
  { title: "Birthday", imageUrl: "https://thumbs.dreamstime.com/b/kids-celebrating-birthday-party-blowing-group-joyful-little-candles-cake-holidays-concept-48869522.jpg" },
  { title: "Anniversary", imageUrl: "https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/wi/art/5cab1ee2443fd.jpeg" },
  { title: "Bratabandha", imageUrl: "https://photolifenepal.com/wp-content/uploads/2023/02/bratabanda_service_banner_3.jpg" },
  { title: "Celebrations", imageUrl: "https://nepaltraveller.com/images/main/1613024493.sidetrackimageTamu%20Lhosar-1.jpg" },
];

const GalleryGrid: React.FC = () => {
  return (
    <section className="bg-white py-4">
      <div className="max-w-screen-xl px-4 mx-auto sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          {/* First Section */}
          {/* <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-full">
            <GalleryCard {...galleryData[0]} fullHeight />
          </div> */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <GalleryCard {...galleryData[0]} className="mb-4" />
           
              <GalleryCard {...galleryData[3]} />
            
          </div>

          {/* Last Section */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-full">
            <GalleryCard {...galleryData[4]} fullHeight />
          </div>

                    {/* Middle Section */}
                    <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <GalleryCard {...galleryData[1]} className="mb-4" />
            <div className="grid gap-4 grid-cols-2">
              <GalleryCard {...galleryData[2]} />
              <GalleryCard {...galleryData[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
