import * as React from "react";

interface BlogImageProps {
  src: string;
  alt: string;
}

const BlogImage: React.FC<BlogImageProps> = ({ src, alt }) => (
  <img className="w-full h-[300px] md:h-[250px] object-cover rounded-md" src={src} alt={alt} />
);

export default BlogImage;
