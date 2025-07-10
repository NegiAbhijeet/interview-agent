import React from 'react';
import { Button } from "./ui/button";

const OutlineButtonWrapper = ({ children, className = "", icon = true, ...props }) => {
  const baseClasses =
    "relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50 text-white bg-transparent border border-white hover:opacity-90 transition";

  return (
    <Button
      className={`${baseClasses} ${className}`}
      {...props}
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

      {icon && (
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      )}

      <span className="relative z-10">{children}</span>
    </Button>
  );
};

export default OutlineButtonWrapper;
