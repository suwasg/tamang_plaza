import  { useState } from "react";
import Slider, { Settings } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "@tanstack/react-router";

interface CarouselItem {
  title: string;
  description: string;
  imgSrc: string;
  link: string;
}

const PrevArrow = (props: any) => (
  <div
    {...props}
    className="z-10 absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full hover:bg-[#e7710b] hover:text-white transition cursor-pointer"
  >
    <FaChevronLeft />
  </div>
);

const NextArrow = (props: any) => (
  <div
    {...props}
    className="z-10 absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full hover:bg-[#e7710b] hover:text-white transition cursor-pointer"
  >
    <FaChevronRight />
  </div>
);

const Carousel: React.FC = () => {
  const [showArrows, setShowArrows] = useState(false);
  const [slider, setSlider] = useState<Slider | null>(null);

  const carouselData: CarouselItem[] = [
    {
      title: "Wedding Ceremony",
      description: "Hello and Namaste, how are you doing?",
      imgSrc: "https://cdn.pixabay.com/photo/2016/11/21/15/58/wedding-1846114_1280.jpg",
      link: "/ghormu",
    },
    {
      title: "Anniversary Ceremony",
      description: "Explore the history-rich village of Ghormu.",
      imgSrc: "https://i.ytimg.com/vi/1ygPbMaSZRU/maxresdefault.jpg",
      link: "/ghormu-2",
    },
    {
      title: "Various Functions",
      description: "Conquer the classic trek to EBC.",
      imgSrc: "https://nepaltraveller.com/images/main/1613024493.sidetrackimageTamu%20Lhosar-1.jpg",
      link: "/ebc",
    },
  ];

  const settings: Settings = {
    fade: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: showArrows,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div
      className="w-full relative"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <Slider {...settings} ref={(s) => setSlider(s)}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <div className="relative h-[500px] md:h-[650px]">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-8 md:px-24">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{item.title}</h2>
                <p className="text-gray-200 mb-6 block">{item.description}</p>
                <Link
                  to={item.link}
                  className="bg-[#e7710b] text-white px-6 py-2 rounded hover:bg-[#e7710b]"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
