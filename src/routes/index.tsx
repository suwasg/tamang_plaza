// import { createFileRoute } from "@tanstack/react-router";

// export const Route = createFileRoute("/")({
//   component: HomeComponent,
// });

// function HomeComponent() {
//   return (
//     <div className="p-2 text-primary">
//       <h3>🏠 Welcome to the Homepage</h3>
//     </div>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "../ui/templates/MainLayout";
import Hero from "../sections/home/Hero";
import Testimonial from "../sections/home/Testimonial";
import ServicesSection from "../sections/home/ServicesSection";
import Gallery from "../sections/home/Gallery";
// import Carousel from "../sections/home/Carousel";
// import Banner from "../sections/home/Banner";
import { BannerPic } from "../ui/molecules/BannerPic";
import Carousel from "../ui/organisms/carousel/Carousel";
import GallerySection from "../sections/home/GallerySection";
import Service from "../ui/organisms/service/Service";
import BlogList from "../ui/organisms/blog/BlogList";
import ImageGallery from "../ui/molecules/ImageGallery";
import ContactSection from "../sections/home/Contact";

export const Route = createFileRoute("/")<{
  component: typeof HomeComponent;
}>({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
    <MainLayout>
      <Carousel/>
      {/* <Carousel/> */}
      {/* <Hero/> */}
      {/* <ServicesSection/> */}
      <Service/>
      {/* <Gallery/> */}
      <GallerySection/>
      {/* <Banner/> */}
      <ImageGallery/>
      <BlogList/>
      <BannerPic img="https://fulltimeexplorer.com/wp-content/uploads/2020/05/18-Nepali-Wedding-Traditions-Explained-1.jpg"/>
      <Testimonial/>
      <ContactSection/>
    </MainLayout>
    </>

  );
}
