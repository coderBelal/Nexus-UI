import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                Nexus UI is a leading provider of web development solutions. We
                specialize in creating dynamic, user-friendly interfaces using
                the latest technologies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul>
                <li className="py-2">
                  <a href="#"  className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li className="py-2">
                  <a href="#"  className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li className="py-2">
                  <a href="#"  className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li className="py-2">
                  <a href="#"  className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: abdullahalnirob12@gmail.com</p>
              <p className="text-gray-400">Phone: +017xxxxxxx</p>
              <div className="mt-4">
                <a href="#" className="text-gray-400 hover:text-white mr-4">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white mr-4">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-gray-400">
              &copy; 2024 Nexus UI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
