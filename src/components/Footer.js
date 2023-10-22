/** @format */

import React from 'react';

export default function Footer() {
  return (
    <footer className='py-10'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='col-span-1 md:col-span-2 lg:col-span-1 mt-2 flex flex-col gap-3'>
            <h3 className='text-2xl font-bold'>Contact Us</h3>
            <p className='mt-2'>123 Main Street</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className=''>
            <h3 className='text-2xl font-bold'>Quick Links</h3>
            <ul className='mt-4 flex flex-col gap-3'>
              <li className=''>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Services</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-2xl font-bold'>Follow Us</h3>
            <div className='mt-2'>
              <a
                href='#'
                className='mr-4 text-2xl text-blue-400 hover:text-blue-600'
              >
                <i className='fab fa-facebook'></i>
              </a>
              <a
                href='#'
                className='mr-4 text-2xl text-blue-400 hover:text-blue-600'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                href='#'
                className='text-2xl text-blue-400 hover:text-blue-600'
              >
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='py-10 text-center'>
          &copy; 2023 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
