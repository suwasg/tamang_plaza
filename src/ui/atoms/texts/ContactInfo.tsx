import * as React from "react";

interface ContactInfoProps {
  icon: React.ReactNode;
  text: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, text }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 text-yellow-600 w-7 h-7">{icon}</div>
      <span className="block ml-3 text-base text-gray-900">{text}</span>
    </div>
  );
};

export default ContactInfo;