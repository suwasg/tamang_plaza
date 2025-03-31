import Avatar from "../atoms/avatars/Avatars";
import { motion } from "motion/react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

export default function TestimonialCard({ testimonial, isActive }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <h3 className="text-2xl font-bold text-black dark:text-white">
        {testimonial.name}
      </h3>
      <p className="text-sm text-gray-500 dark:text-neutral-500">
        {testimonial.designation}
      </p>
      <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
        {testimonial.quote}
      </motion.p>
    </motion.div>
  );
}
