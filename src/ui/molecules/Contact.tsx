import * as React from "react";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  contact: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, contact }) => {
  return (
    <div className="flex items-start space-x-4">
      <span className="p-3 text-yellow-600 rounded-full bg-blue-100/80 ">
        {icon}
      </span>
      <div>
        <h2 className=" font-bold text-2xl text-gray-800 dark:text-white">{title}</h2>
        <p className="mt-2 text-md text-gray-100">{contact}</p>
      </div>
    </div>
  );
};

export default ContactItem;
