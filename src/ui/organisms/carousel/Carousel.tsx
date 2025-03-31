import { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NextArrow } from "../../atoms/arrows/NextArrow";
import { PrevArrow } from "../../atoms/arrows/PrevArrow";
import CarouselSlide from "../../molecules/CarouselSlide";
const Carousel: React.FC = () => {
  const [showArrows, setShowArrows] = useState(false);

  const carouselData = [
    {
      title: "Welcome to Tamang Plaza Agro Resort",
      description: "—your ultimate destination!",
      imgSrc: "https://cdn.pixabay.com/photo/2016/11/21/15/58/wedding-1846114_1280.jpg",
    },
    {
      title: "Anniversary Ceremony",
      description: "Explore the history-rich village of Ghormu.",
      imgSrc: "https://i.ytimg.com/vi/1ygPbMaSZRU/maxresdefault.jpg",
    },
    {
      title: "Various Functions",
      description: "Conquer the classic trek to EBC.",
      imgSrc: "https://nepaltraveller.com/images/main/1613024493.sidetrackimageTamu%20Lhosar-1.jpg",
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
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <CarouselSlide key={index} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
