import React from 'react';
import { Button } from "./ui/button";

const FilledButtonWrapper = ({ children, className = "" }) => {
  return (
    <Button className={`slide-button rounded-full overflow-hidden px-12 py-3 text-base bg-white/50 hover:bg-white/50 text-white transition ${className}`}>
      {children}
    </Button>
  );
};

export default FilledButtonWrapper;
