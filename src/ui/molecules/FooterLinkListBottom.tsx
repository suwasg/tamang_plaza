import { Link } from "@tanstack/react-router";
import * as React from "react";

interface FooterLinkListBottomProps {
  links: { label: string; to: string }[];
}

const FooterLinkListBottom: React.FC<FooterLinkListBottomProps> = ({ links }) => {
  return (
    <ul className="flex flex-wrap justify-start gap-x-6 gap-y-3 mt-5 sm:mt-0 text-sm">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.to} className="text-blue-200 hover:text-white transition duration-200">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinkListBottom;
