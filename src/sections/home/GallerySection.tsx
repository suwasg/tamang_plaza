import GalleryGrid from "../../ui/organisms/gallery/GalleryGrid";

const GallerySection: React.FC = () => {
    const galleryData = [
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
    return (
      <section className="bg-white py-10">
        <h1>Gallery Section </h1>
        <div className="max-w-screen-xl px-4 mx-auto sm:py-4 lg:px-6">
          <GalleryGrid  />
        </div>
      </section>
    );
  };
  
  export default GallerySection;