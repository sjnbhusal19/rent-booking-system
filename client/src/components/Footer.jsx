
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-4 mt-10 border-t">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        <div className="space-x-4 text-sm">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Terms of Service</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
