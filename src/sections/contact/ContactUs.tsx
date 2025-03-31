import * as React from "react";
import ContactInfo from "../../ui/atoms/texts/ContactInfo";
import SocialMediaIcon from "../../ui/atoms/texts/SocialMediaIcon";
import CoverImage from "../../ui/molecules/CoverImage";

const ContactUs: React.FC = () => {
    return (
        <>
                <CoverImage bgImage='https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg' heading='Contact Us' textColor='text-gray-50' />

      <section className="py-10 bg-gradient-to-r from-yellow-600 to-orange-600 sm:py-16 lg:py-24">
        <div className="px-6 mx-auto sm:px-12">
          <div className="max-w-6xl mx-auto mt-12 overflow-hidden bg-white rounded-md shadow-md lg:mt-20">
            <div className="grid items-stretch grid-cols-1 lg:grid-cols-5">
              <div className="bg-gray-100 lg:col-span-2">
                <div className="h-full p-6 sm:p-10">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h4 className="text-2xl font-semibold text-black">Contact info</h4>
                      <div className="mt-8 space-y-7">
                        <ContactInfo
                          icon={
                            <svg
                              className="w-7 h-7"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          }
                          text="8502 Preston Rd. Inglewood, Maine 98380, USA"
                        />
                        <ContactInfo
                          icon={
                            <svg
                              className="w-7 h-7"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          }
                          text="kenzi.lawson@example.com"
                        />
                        <ContactInfo
                          icon={
                            <svg
                              className="w-7 h-7"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                          }
                          text="(316) 555-0116"
                        />
                      </div>
                    </div>
  
                    <div className="mt-8 lg:mt-auto">
                      <hr className="border-gray-200" />
                      <div className="flex items-center justify-between mt-7">
                        <p className="text-lg font-semibold text-black">Follow us on</p>
                        <ul className="flex items-center justify-end space-x-3">
                          <SocialMediaIcon
                            href="#"
                            icon={
                              <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path
                                  d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                              </svg>
                            }
                          />
                          <SocialMediaIcon
                            href="#"
                            icon={
                              <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                              </svg>
                            }
                          />
                          <SocialMediaIcon
                            href="#"
                            icon={
                              <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.007 3.004 3.004 0 0 1 0 6.007z"></path>
                                <path d="M24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z"></path>
                              </svg>
                            }
                          />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="bg-gray-50 lg:col-span-3">
                <div className="h-full p-6 sm:p-10">
                  <div className="flex flex-col justify-between h-full">
                    <h4 className="text-2xl font-semibold text-black">Get in Touch</h4>
                    <div className="mt-8">
                      <form action="#">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <div className="relative">
                            <input
                              type="text"
                              className="w-full px-5 py-4 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                              placeholder="Name"
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="email"
                              className="w-full px-5 py-4 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                              placeholder="Email"
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="text"
                              className="w-full px-5 py-4 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                              placeholder="Phone Number"
                            />
                          </div>
                          <div className="relative">
                            <input
                              type="text"
                              className="w-full px-5 py-4 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="mt-5">
                          <textarea
                            className="w-full px-5 py-4 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            rows={6}
                            placeholder="Message"
                          />
                        </div>
                        <div className="mt-5">
                          <button
                            type="submit"
                            className="w-full py-4 text-base font-medium text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>

    );
  };
  
  export default ContactUs;