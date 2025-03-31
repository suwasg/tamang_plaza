import * as React from "react";

interface BlogDescriptionProps {
  children: React.ReactNode;
}

const BlogDescription: React.FC<BlogDescriptionProps> = ({ children }) => (
  <p className="text-gray-500 text-sm md:text-md">
    {children}
  </p>
);

export default BlogDescription;
