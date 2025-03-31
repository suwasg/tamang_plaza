import { Link } from "@tanstack/react-router";
import * as React from "react";

interface BlogTitleProps {
  children: React.ReactNode;
}

const BlogTitle: React.FC<BlogTitleProps> = ({ children }) => (
  <Link to="#" className="font-semibold h-2 text-lg hover:text-amber-600 transition duration-500 ease-in-out inline-block mb-2">
    {children}
  </Link>
);

export default BlogTitle;
