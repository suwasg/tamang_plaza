import * as React from "react";
import FooterLink from "../atoms/texts/FooterLinkProps";

interface FooterLinkListProps {
  links: { label: string; to: string }[];
}

const FooterLinkList: React.FC<FooterLinkListProps> = ({ links }) => (
  <ul className="space-y-2 text-md">
    {links.map((link, index) => (
      <FooterLink key={index} to={link.to} label={link.label} />
    ))}
  </ul>
);

export default FooterLinkList;
