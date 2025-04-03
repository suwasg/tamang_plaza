import * as React from "react";
import ContactInfo from "../../ui/atoms/texts/ContactInfo";
import SocialMediaIcon from "../../ui/atoms/texts/SocialMediaIcon";
import CoverImage from "../../ui/molecules/CoverImage";
import { FaFacebook, FaFacebookF, FaInstagram, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const ContactUs: React.FC = () => {
    return (
        <>
                <CoverImage bgImage='https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg' heading='Contact Us' textColor='text-gray-50' />

      <section className="bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="px-6 mx-auto sm:px-12">
          <div className="max-w-6xl mx-auto overflow-hidden bg-white rounded-md shadow-md lg:mt-20">
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
                          text="Bidur-04, Battar, Nuwakot"
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
                          text="cs@tamangplaza.com"
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
                          text="+977 122334444"
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
                          text="+977 122334444"
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
                          text="+977 122334444"
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
                           <FaFacebookF/>
                            }
                          />
                          <SocialMediaIcon
                            href="#"
                            icon={
                             <FaInstagram/>
                            }
                          />
                          <SocialMediaIcon
                            href="#"
                            icon={
                              <FaTwitter/>
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