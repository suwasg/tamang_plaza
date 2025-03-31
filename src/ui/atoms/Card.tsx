import * as React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className="rounded-md overflow-hidden shadow-lg flex flex-col border-1 border-gray-300 hover:border-amber-500">
    {children}
  </div>
);

export default Card;
