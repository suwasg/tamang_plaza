import * as React from "react";
import FooterHeading from "../atoms/texts/FooterHeading";
import FooterLinkList from "../molecules/FooterLinkList";

interface FooterColumnProps {
  title: string;
  links: { label: string; to: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="mt-4">
    <FooterHeading text={title} />
    <FooterLinkList links={links} />
  </div>
);

export default FooterColumn;
