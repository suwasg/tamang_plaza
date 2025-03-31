import { Link } from "@tanstack/react-router";
import * as React from "react";

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, label }) => (
  <li>
    <Link to={to} className="text-blue-200 hover:text-white transition-all duration-200">
      {label}
    </Link>
  </li>
);

export default FooterLink;
