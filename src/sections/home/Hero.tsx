import { Link } from '@tanstack/react-router';
import './carousel.css'
const Hero = () => {
  return (
    <main className='mb-4'>
      <section className=" text-white overflow-hidden overflow-x-hidden pt-32 sm:py-24 md:py-14 lg:py-28 relative">
        <div
          className="hero-section"
        >
        </div>
        <div className="px-4 sm:px-12 mx-auto py-24 md:py-32 relative z-10 flex items-center justify-center">
          <div className="w-full md:w-1/2 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-normal">
              Welcome to <span className='font-sans text-primary'>Tamang Plaza</span>
            </h1>

            <div className="flex items-center justify-center space-x-4 mb-5">
              {/* Left Line */}
              <div className="flex-grow border-t border-gray-300"></div>
              {/* Image */}
              {/* <div className="flex-shrink-0">
                <img
                  src="/images/cheesepng1.webp"
                  alt="Center Image"
                  className="w-6 h-6 rounded-full object-cover"
                  loading='lazy'
                />
              </div> */}
              {/* Right Line */}
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <h2 className="text-xl font-semibold mb-8 text-gray-50">
             Tamang Plaza for every functions and celebrations.
            </h2>
            <div className="flex flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center" >
              <Link 
                to="/contact"
                className="hover:bg-gray-50 hover:text-tertiary  font-semibold px-4 py-2 sm:px-6 md:py-3 rounded-full bg-primary text-tertiary transition duration-300 text-center"
                rel='noopener noreferrer'
                aria-label="Go to Contact Us Page"
              >
                Contact Us
              </Link>

            </div>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Hero;

