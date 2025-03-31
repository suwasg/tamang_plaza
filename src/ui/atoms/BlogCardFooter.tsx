import { Link } from '@tanstack/react-router';
import { FaArrowRight, FaClock } from 'react-icons/fa';

const BlogCardFooter = ({ timeToRead }: { timeToRead: number }) => {
  return (
    <div className="flex items-center justify-between mt-4">
      {/* Learn More Link */}
      <Link to="/" className="flex items-center text-gray-800 hover:text-amber-600">
        Learn More <FaArrowRight className="ml-2" /> {/* Arrow Icon */}
      </Link>

      {/* Time to Read with Clock Icon */}
      <div className="flex items-center text-gray-500">
        <FaClock className="mr-2" /> {/* Clock Icon */}
        <span>{timeToRead} mins</span>
      </div>
    </div>
  );
};

export default BlogCardFooter;
