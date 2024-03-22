import React from 'react';

const Card = ({ children , className }) => {
  return (
    <div className={`bg-white shadow-md border-2 border-gray-200 rounded-lg p-4 dark:border-2 dark:border-[#2E2E2E] dark:bg-[#1C1C1B] ${className!="" ? className : ''}`}>
      {children}
    </div>
  );
};

export default Card;
