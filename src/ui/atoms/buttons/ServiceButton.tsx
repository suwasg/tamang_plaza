import * as React from "react";

interface ServiceButtonProps {
  href: string;
  text: string;
  className?: string;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ href, text, className = "" }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90 ${className}`}
  >
    {text}
  </a>
);

export default ServiceButton;
