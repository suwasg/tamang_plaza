import * as React from "react";
import BlogImage from "../atoms/avatars/BlogImage";
import BlogTitle from "../atoms/texts/BlogTitle";
import BlogDescription from "../atoms/texts/BlogDescription";
import Card from "../atoms/Card";
import { Link } from "@tanstack/react-router";
import BlogTags from "../atoms/texts/BlogTags";
import BlogCardFooter from "../atoms/BlogCardFooter";


interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  tag: string;
  timeToRead: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image, tag, timeToRead }) => (
  <Card >
    <Link to="/">
      <div className="relative overflow-hidden">
        <BlogImage src={image} alt="Blog" />
        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25 hover:scale-110"></div>
        <BlogTags label={tag}/>
         </div>
    </Link>
    <div className="px-6 py-4 mb-auto">
        {/* <div className="flex items-center justify-between">
        <p className="font-semibold">2022-02-22</p>
        <p className="font-semibold">category</p>
        </div> */}
      <BlogTitle>{title}</BlogTitle>
      {/* <BlogDescription>{description}</BlogDescription> */}
      <BlogCardFooter timeToRead={timeToRead} />

    </div>
  </Card>
);

export default BlogCard;
