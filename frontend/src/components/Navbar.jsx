import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-white'>
      <div className='flex items-center'>
        <svg
          className='text-purple-500 h-16 w-16 hover:-translate-y-0.5 transform duration-200'
          fill='none'
          strokeWidth='1.5'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <p className='text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ml-2'>
          BasicStoreRedo
        </p>
      </div>

      <div className='flex space-x-4'>
        <Link to = '/' className='bg-red-300 text-gray-500 px-2 py-1 rounded shadow-md hover:-translate-y-0.5 hover:shadow-lg transition transform duration-200 ease-in-out'>
          <svg
            className='h-8 w-8 text-white'
            fill='none'
            strokeWidth='1.5'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>

        <Link to = '/create' className='bg-red-300 text-gray-500 px-2 py-1 rounded shadow-md hover:-translate-y-0.5 hover:shadow-lg transition transform duration-200 ease-in-out'>
          <svg
            className='text-white h-8 w-8'
            fill='none'
            strokeWidth='1.5'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 4.5v15m7.5-7.5h-15'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;