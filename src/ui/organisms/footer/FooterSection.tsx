import FooterColumn from "../../molecules/FooterColumn";
import SocialLinks from "../../molecules/SocialLinks";
import FooterLinkListBottom from "../../molecules/FooterLinkListBottom";


const FooterSection: React.FC = () => {
  return (
    <div className="px-6 sm:px-12 mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-12">
        {/* Resort Overview */}
        <div className="mt-4">
          <div className="flex items-center">
            <img className="w-auto h-7" src="/images/plaza_logo.jpg" alt="Logo" />
            <h3 className="px-2 font-semibold text-lg pacifico-regular">
              Tamang Plaza Agro Resort
            </h3>
          </div>
          <p className="space-y-2 text-md">
            Tamang Plaza Agro Resort—your ultimate destination! Experience seamless luxury with our hotel, guest house, restaurant, banquet hall, and resort all in one place. Perfect for relaxation, dining, celebrations, and getaways.
          </p>
        </div>

        {/* Resources Links */}
        <FooterColumn
          title="Resources"
          links={[
            { label: "Download Menu", to: "#" },
            { label: "Blogs", to: "#" },
            { label: "Client's Reviews", to: "#" },
            { label: "Gallery", to: "#" },
          ]}
        />

        {/* Extra Links */}
        <FooterColumn
          title="Extra Links"
          links={[
            { label: "Customer Support", to: "#" },
            { label: "Our Objectives", to: "#" },
            { label: "Our Commitments", to: "#" },
            { label: "Our Premier Values", to: "#" },
          ]}
        />
      </div>

      {/* Bottom Footer Section */}
      <div className="mt-6 sm:mt-12">
        <div className="lg:flex lg:items-center lg:justify-between">
          <SocialLinks />
<FooterLinkListBottom
  links={[
    { label: "Privacy Policy", to: "#" },
    { label: "Terms & Conditions", to: "#" },
    { label: "Support", to: "#" },
  ]}
/>

          <p className="mt-6 text-sm text-blue-200 lg:mt-0">
            © {new Date().getFullYear()}, All Rights Reserved by Tamang Plaza Agro Resort
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
