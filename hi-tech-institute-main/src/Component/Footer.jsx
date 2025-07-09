import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* OUR BRANCHES */}
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">OUR BRANCHES</h3>
            <ul className="space-y-2">
              {["Khanpur", "Karol Bagh", "Tilak Nagar", "Badarpur", "Peera Garhi"].map((branch) => (
                <li key={branch} className="hover:text-red-500 transition-colors">
                  {branch}
                </li>
              ))}
            </ul>
          </div>

          {/* OUR LINKS */}
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">OUR LINKS</h3>
            <ul className="space-y-2">
              {[
                "Contact Us",
                "About Us",
                "Online Registration",
                "Privacy policy",
                "Terms & Condition",
                "Refund & Cancellation Policy",
              ].map((link) => (
                <li key={link} className="hover:text-red-500 transition-colors">
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER SIGNUP */}
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">NEWSLETTER SIGNUP</h3>
            <p className="mb-4">
              By subscribing to our mailing list you will always be update with the latest news from us.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="your.address@email.com"
                className="px-4 py-2 w-full text-black rounded-l focus:outline-none"
              />
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r transition-colors">
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-sm italic">We never spam!</p>
          </div>

          {/* GET IN TOUCH */}
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">GET IN TOUCH</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <span className="mr-2">📞</span> +91 9212 577 577
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span> info@hitechinstitute.in
              </p>
              <p>
                2922/44, Saraswati Marg, opp. Regent Tower, Ghaffar Market
                <br />
                Beadonpura, Karol Bagh, New Delhi, 110005
              </p>
            </div>

            {/* GET SOCIAL */}
            <div className="mt-6">
              <h4 className="text-red-600 font-bold mb-3">GET SOCIAL</h4>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                    title={social}
                  >
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>Copyright @ 2004-2021 Hi-Tech Institute of Advance Technology</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;