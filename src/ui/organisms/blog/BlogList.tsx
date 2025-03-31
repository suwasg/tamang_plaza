import * as React from 'react';
import BlogCard from '../../molecules/BlogCard';

const BlogList: React.FC = () => {
    const blogData = [
        {
          title: "How to Host a Successful Banquet Event",
          description: "Learn the essential tips and tricks to host a memorable banquet. From décor to catering, this guide covers everything you need.",
          image: "https://images.pexels.com/photos/2226316/pexels-photo-2226316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          tag: "Banquet",
          timeToRead:3,
        },
        {
          title: "Top 5 Wedding Plazas for Your Big Day",
          description: "Choosing the right plaza is key to making your wedding day perfect. Check out our top 5 recommendations for wedding venues.",
          image: "https://images.pexels.com/photos/2977553/pexels-photo-2977553.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          tag: "Plaza",
          timeToRead:5,
        },
        {
          title: "Banquet Halls vs. Open-Air Plazas: What's Best for Your Event?",
          description: "Should you host your event indoors or outdoors? We compare the pros and cons of banquet halls and open-air plazas for different types of events.",
          image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          tag: "Banquet",
          timeToRead:4,
        },
        {
          title: "The Ultimate Guide to Event Planning in a Plaza",
          description: "Planning an event in a plaza can be a unique and exciting experience. Discover how to plan a flawless event in an outdoor venue.",
          image: "https://images.pexels.com/photos/3567222/pexels-photo-3567222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          tag: "Plaza",
          timeToRead:6,
        },
        {
          title: "Decorating Your Banquet for a Luxurious Experience",
          description: "Transform your banquet hall into a luxurious venue with these decoration tips. From lighting to floral arrangements, we've got you covered.",
          image: "https://images.pexels.com/photos/2906784/pexels-photo-2906784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          tag: "Banquet",
          timeToRead:4,
        },
        {
          title: "Event Catering Tips for Plaza Celebrations",
          description: "Catering in a plaza can present unique challenges. Here are our top tips for selecting the best catering service for your outdoor event.",
          image: "https://images.pexels.com/photos/1174416/pexels-photo-1174416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          tag: "Plaza",
          timeToRead:8,
        },
        {
          title: "Maximizing Space in Your Banquet Hall",
          description: "Make the most of your banquet hall space with these clever layout and design strategies. Perfect for both intimate and large gatherings.",
          image: "https://images.pexels.com/photos/1903509/pexels-photo-1903509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          tag: "Banquet",
          timeToRead:9,
        },
        {
          title: "Hosting a Corporate Event in a Plaza: Tips and Tricks",
          description: "Plazas are great for corporate events. Here's how to plan and execute a successful corporate event in an outdoor venue.",
          image: "https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          tag: "Plaza",
          timeToRead:4,
        },
      ];
      

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogData && blogData.slice(0,3).map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            tag={blog.tag}
            timeToRead={blog.timeToRead}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
