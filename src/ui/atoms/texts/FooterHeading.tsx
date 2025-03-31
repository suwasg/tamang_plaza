import * as React from "react";

interface FooterHeadingProps {
  text: string;
}

const FooterHeading: React.FC<FooterHeadingProps> = ({ text }) => (
  <p className="text-lg font-semibold">{text}</p>
);

export default FooterHeading;
