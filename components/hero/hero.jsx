/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Hero = () => (
  <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    <div className="sm:text-center lg:text-left">
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">Dance Specific</span>{' '}
        <span className="block text-brandRed xl:inline">TALKS</span>
      </h1>
      <p className="mt-3 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        A unique podcast with stories from dancers worldwide!
      </p>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brandRed hover:bg-brandRed md:py-4 md:text-lg md:px-10"
          >
            Get started
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gray-200 hover:bg-brandRed hover:opacity-50  md:py-4 md:text-lg md:px-10"
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
