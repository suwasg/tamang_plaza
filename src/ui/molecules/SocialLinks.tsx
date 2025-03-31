import * as React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
       <FaFacebook/>
      ),
    },
    {
      name: "Instagram",
      href: "https://facebook.com",
      icon: (
 <FaInstagram/>
      ),
    },
    {
      name: "Whatsapp",
      href: "https://instagram.com",
      icon: (
    <FaWhatsapp/>
      ),
    },
    {
      name: "Twitter(X)",
      href: "https://github.com",
      icon: (
<FaTwitter/>
      ),
    },
  ];

  return (


          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="sm:flex sm:items-center sm:justify-start sm:space-x-8">
              <ul className="flex items-center space-x-6">
                {socialLinks.map(({ name, href, icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:text-opacity-80"
                      title={name}
                    >
                      <span className="sr-only">{name}</span>
                      <span className="text-3xl">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
         
          </div>

  );
};

export default SocialLinks;
