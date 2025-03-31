// import * as React from "react";
// import SocialLinks from "../../molecules/SocialLinks";
// import { Link } from "@tanstack/react-router";

import * as React from "react";
import FooterSection from "./FooterSection";

// const Footer: React.FC = () => {
//   return (
//     <footer className="py-10 bg-[#e7710b]  text-white">
//       <div className="px-6 sm:px-12 mx-auto">
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-12">
//           <div className="mt-4">
//             <div className='flex items-center'>
//             <img className="w-auto h-7" src="/images/plaza_logo.jpg" alt="Logo" />
//             <h3 className="px-2 font-semibold text-lg pacifico-regular">Tamang Plaza Agro Resort</h3>
//             </div>
//             <p className="space-y-2 text-sm">
//             Tamang Plaza Agro Resort—your ultimate destination! Experience seamless luxury with our hotel, guest house, restaurant, banquet hall, and resort all in one place. Perfect for relaxation, dining, celebrations, and getaways.
//             </p>
//           </div>

//           <div className="mt-4">
//             <p className="text-lg font-semibold">Resources</p>
//             <ul className="space-y-2 text-sm">
//               {[
//                 "Download Menu",
//                 "Blogs",
//                 "Client's Reviews",
//                 "Gallery",
//               ].map((item, i) => (
//                 <li key={i}>
//                   <Link to="#" className="text-blue-200 hover:text-white transition-all duration-200">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="mt-4">
//             <p className="text-lg font-semibold">Extra Links</p>
//             <ul className=" space-y-2 text-sm">
//               {[
//                 "Customer Support",
//                 "Our objectives",
//                 "Our Commitments",
//                 "Our Premier values",
//               ].map((item, i) => (
//                 <li key={i}>
//                   <Link to="#" className="text-blue-200 hover:text-white transition-all duration-200">
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="mt-6 sm:mt-12">
//           <div className="lg:flex lg:items-center lg:justify-between">
//             <div className="sm:flex sm:items-center sm:justify-start sm:space-x-8">
//             <SocialLinks/>
             
//             </div>
//             <ul className="flex flex-wrap gap-x-6 gap-y-3 mt-5 sm:mt-0 text-sm">
//                 <li>
//                   <Link to="#" className="text-blue-200 hover:text-white">
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="text-blue-200 hover:text-white">
//                     Terms & Conditions
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#" className="text-blue-200 hover:text-white">
//                     Support
//                   </Link>
//                 </li>
//               </ul>

//             <p className="mt-6 text-sm text-blue-200 lg:mt-0">
//               © Copyright {new Date().getFullYear()}, All Rights Reserved by Tamang Plaza Agro Resort
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-[#e7710b] text-white">
      <FooterSection />
    </footer>
  );
};

export default Footer;
