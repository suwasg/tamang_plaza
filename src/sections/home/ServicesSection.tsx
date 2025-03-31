import * as React from "react";

const ServicesSection: React.FC = () => {
  return (
    <section className="overflow-hidden bg-white pt-10 dark:bg-dark">
      <div className="container mx-auto px-6 sm:px-12">
        <div className=" flex flex-wrap items-center justify-between">
          {/* Left Images */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="-mx-3 flex items-center sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <img
                    src="https://media.istockphoto.com/id/1399000012/photo/guests-throwing-confetti-over-bride-and-groom-as-they-walk-past-after-their-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=_KRu-9eoSqH8yazsoIDYy15NEzSOTTJQRJ0I7IJTMGA="
                    alt="about1"
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <img
                    src="https://img.freepik.com/free-photo/wedding-couple-best-friends-are-drinking-champagne-celebrating-park-wedding-day_8353-11143.jpg"
                    alt="about2"
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCcH8e5KuKepNQsnhy1uLbAZjNl8bIXqFew&s"
                    alt="about3"
                    className="w-full rounded-2xl"
                  />
                  <div className="absolute -bottom-16 -right-12 z-[-1]">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDuKLtuoU_s63eZ9cd0IMAhLcS6l6aHwt5mw&s" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="mb-4 block text-lg font-semibold text-primary">
                Namaste....
              </span>
              <h2 className="mb-5 text-3xl font-bold text-red-500 sm:text-[40px]/[48px] dark:text-white">
                About Tamang Plaza
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
              Tamang Plaza is a wholesome complete catering service and event management business company. After our various catering and banquet business work since 1998 we are today established as a successful banquet company in Nepal with young, imaginative, keen and dynamic professionals with a sparkling stream of ideas having vast experience in the field of catering services and events.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
              Impeccable service, elegant ambiance, and unmatched attention to detail make every occasion truly special. Indulge in culinary excellence tailored to your tastes in a stunning event setting, accompanied by hassle-free, effortless parking.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;