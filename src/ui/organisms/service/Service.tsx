import * as React from "react";
import ServiceTextBlock from "../../molecules/ServiceTextBlock";
import ServiceImageGallery from "../../molecules/ServiceImageGallery";
const Service: React.FC = () => {
  const images = [
    "https://media.istockphoto.com/id/1399000012/photo/guests-throwing-confetti-over-bride-and-groom-as-they-walk-past-after-their-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=_KRu-9eoSqH8yazsoIDYy15NEzSOTTJQRJ0I7IJTMGA=",
    "https://img.freepik.com/free-photo/wedding-couple-best-friends-are-drinking-champagne-celebrating-park-wedding-day_8353-11143.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCcH8e5KuKepNQsnhy1uLbAZjNl8bIXqFew&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuKLtuoU_s63eZ9cd0IMAhLcS6l6aHwt5mw&s"
  ];

  const content = `Tamang Plaza is a wholesome complete catering service and event management business company. After our various catering and banquet business work since 1998 we are today established as a successful banquet company in Nepal with young, imaginative, keen and dynamic professionals with a sparkling stream of ideas having vast experience in the field of catering services and events.`;

  return (
    <section className="overflow-hidden bg-white pt-10 dark:bg-dark">
        <h1>service organisms</h1>
      <div className="container mx-auto px-6 sm:px-12">
        <div className="flex flex-wrap items-center justify-between">
          {/* Left Images */}
          <div className="w-full px-4 lg:w-6/12">
            <ServiceImageGallery images={images} />
          </div>

          {/* Right Content */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <ServiceTextBlock
              title="About Tamang Plaza"
              content={content}
              buttonText="Get Started"
              buttonHref="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
