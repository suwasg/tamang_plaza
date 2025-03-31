import * as React from "react";
import ServiceButton from "../atoms/buttons/ServiceButton";

interface ServiceTextBlockProps {
  title: string;
  content: string;
  buttonText: string;
  buttonHref: string;
}

const ServiceTextBlock: React.FC<ServiceTextBlockProps> = ({ title, content, buttonText, buttonHref }) => (
  <div className="mt-10 lg:mt-0">
    <span className="mb-4 block text-lg font-semibold text-primary">Namaste....</span>
    <h2 className="mb-5 text-3xl font-bold text-red-500 sm:text-[40px]/[48px] dark:text-white">{title}</h2>
    <p className="mb-5 text-base text-body-color dark:text-dark-6">{content}</p>
    <p className="mb-8 text-base text-body-color dark:text-dark-6">{content}</p>
    <ServiceButton href={buttonHref} text={buttonText} />
  </div>
);

export default ServiceTextBlock;
