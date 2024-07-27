import React from 'react';

const Footer = () => {
  return (
    <footer className=' bg-transparent text-white py-1'>
      <div className='max-w-7xl mx-auto text-center'>
        <p className='text-sm mt-1'>
          &copy; {new Date().getFullYear()} Created By Neharika Rout
        </p>
      </div>
    </footer>
  );
};

export default Footer;
