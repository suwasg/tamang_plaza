import { useEffect, useState, memo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import IconButton from "../../atoms/buttons/IconButton";
import TestimonialCard from "../../molecules/TestimonialCard";
import Avatar from "../../atoms/avatars/Avatars";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const AnimatedTestimonials = memo(({ testimonials, autoplay = false }: { testimonials: Testimonial[]; autoplay?: boolean }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="antialiased font-sans px-6 sm:px-12 lg:px-24 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-20">
        
        {/* Testimonial Image */}
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: active === index ? 1 : 0.7, scale: active === index ? 1 : 0.95 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Avatar src={testimonial.src} alt={testimonial.name} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Testimonial Content */}
        <div className="flex justify-between flex-col py-4">
          <TestimonialCard testimonial={testimonials[active]} isActive={true} />

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <IconButton onClick={handlePrev}>
              <FaArrowLeft className="h-5 w-5 text-black dark:text-neutral-400" />
            </IconButton>
            <IconButton onClick={handleNext}>
              <FaArrowRight className="h-5 w-5 text-black dark:text-neutral-400" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AnimatedTestimonials;
