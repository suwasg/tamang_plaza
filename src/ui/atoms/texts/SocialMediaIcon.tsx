import * as React from "react";

interface SocialMediaProps {
    href: string;
    icon: React.ReactNode;
  }
  
  const SocialMediaIcon: React.FC<SocialMediaProps> = ({ href, icon }) => {
    return (
      <li>
        <a
          href={href}
          title="Social Media"
          className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-blue-600 hover:text-white focus:text-white hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
        >
          {icon}
        </a>
      </li>
    );
  };

export default SocialMediaIcon;