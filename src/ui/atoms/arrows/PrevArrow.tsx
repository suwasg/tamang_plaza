import { FaChevronLeft } from "react-icons/fa";

export const PrevArrow = (props: any) => (
  <div
    {...props}
    className="z-10 absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-black p-2 rounded-full hover:bg-[#e7710b] hover:text-white transition cursor-pointer"
  >
    <FaChevronLeft />
  </div>
);


