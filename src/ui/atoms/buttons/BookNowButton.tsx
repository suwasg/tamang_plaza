import { Link } from "@tanstack/react-router";
import * as React from "react";

interface BookNowButtonProps {
  link: string;
}

const BookNowButton: React.FC<BookNowButtonProps> = ({ link }) => {
  return (
    <Link
      to={link}
      className="bg-[#e7710b] text-white px-6 py-2 rounded hover:bg-[#e7710b]"
    >
      Book Now
    </Link>
  );
};

export default BookNowButton;
