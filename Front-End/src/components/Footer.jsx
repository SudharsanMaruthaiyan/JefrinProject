import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center py-4">
      <div className="max-w-[100%] mx-auto bg-cover pt-20">
        <div className="w-[80%] mx-auto">
          <div className="flex items-start flex-wrap justify-between gap-5">
            <div>
              <h1 className="text-2xl font-semibold py-5 text-white">Quick Link</h1>
              <ul className="flex flex-col gap-6">
                <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
                <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                <li><a href="#portfolio" className="hover:text-gray-300">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-semibold py-5 text-white">Services</h1>
              <ul className="flex flex-col gap-6">
                <li><a href="#services" className="hover:text-gray-300">Web Design</a></li>
                <li><a href="#services" className="hover:text-gray-300">Branding</a></li>
                <li><a href="#services" className="hover:text-gray-300">SEO Optimization</a></li>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-semibold py-5 text-white">Supports</h1>
              <ul className="flex flex-col gap-6">
                <li className="font-medium text-white">Contact Us</li>
                <li className="font-medium text-white">Terms and Condition</li>
                <li className="font-medium text-white">Privacy Policy</li>
                <li className="font-medium text-white">Refund/Cancellation Policy</li>
              </ul>
              <h1 className="text-2xl font-semibold py-5 text-white">Address</h1>
              <p className="font-medium text-white">
                70 Kaliamman Kovil Street Palanganatham
                <br />
                Pasumpon Nagar Madurai-625003
              </p>
            </div>
          </div>
          <hr className="my-10 h-[1.8px] bg-gray-800" />
        </div>
      </div>
      <p>&copy; 2024 Your Business. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
