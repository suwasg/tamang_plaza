import * as React from "react";

interface BlogTagsProps {
  label: string;
}

const BlogTags: React.FC<BlogTagsProps> = ({ label }) => (
  <div className="text-xs absolute top-0 left-0 bg-amber-600 px-4 py-2 text-white rounded-br-md transition duration-500 ease-in-out">
    {label}
  </div>
);

export default BlogTags;
