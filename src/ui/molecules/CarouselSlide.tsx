import CarouselImage from "../atoms/avatars/CarouselImage";
import BookNowButton from "../atoms/buttons/BookNowButton";

interface CarouselSlideProps {
  title: string;
  description: string;
  imgSrc: string;
  // link: string;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ title, description, imgSrc }) => {
  return (
    <div className="relative h-[500px] md:h-[650px]">
      <CarouselImage src={imgSrc} alt={title} />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-8 md:px-24">
        <h2 className="text-xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-200 mb-6 block">{description}</p>
        <BookNowButton link="/reserve" />
      </div>
    </div>
  );
};

export default CarouselSlide;
