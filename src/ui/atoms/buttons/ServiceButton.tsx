import { Link } from "@tanstack/react-router";
import * as React from "react";

interface ServiceButtonProps {
  href: string;
  text: string;
  className?: string;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ href, text, className = "" }) => (
  <Link
    to={href}
    className={`inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-center text-base font-medium text-gray-100 hover:bg-opacity-90 ${className}`}
  >
    {text}
  </Link>
);

export default ServiceButton;
