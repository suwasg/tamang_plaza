import * as React from "react";
import { motion } from "framer-motion";

interface BannerPicProps {
  img: string;
}

export const BannerPic: React.FC<BannerPicProps> = ({ img }) => {
  return (
    <motion.div
      className="h-[400px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
      initial={{ scale: 0.8, opacity: 0 }} // Start smaller and faded
      animate={{ scale: 1, opacity: 1 }} // Zoom in to normal size
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when visible

    />
  );
};
