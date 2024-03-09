import React from 'react';
import { generateAlertClasses, generatePositionClasses } from 'react-nex';

const Alert = ({
  type = 'info', 
  title,
  message,
  titleStyle = '', 
  messageStyle = '', 
  alertContainerStyle = '', 
  position = 'top-left', 
}) => {
  let alertClasses = `rounded-md px-4 py-2 shadow-md w-[300px] h-auto `; // Base styles with padding, width, height

  switch (type) {
    case 'info':
      alertClasses += 'bg-blue-100 text-black ';
      break;
    case 'success':
      alertClasses += 'bg-green-100 text-black';
      break;
    case 'error':
      alertClasses += 'bg-red-100 text-black';
      break;
    case 'warning':
      alertClasses += 'bg-yellow-100 text-black';
      break;
    default:
      alertClasses += 'bg-white border-1 border-[#61DAFB]';
      break;
  }

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-2 left-2';
      case 'top-right':
        return 'top-2 right-2';
      case 'bottom-left':
        return 'bottom-2 left-2';
      case 'bottom-right':
        return 'bottom-2 right-2';
      case 'top-center':
        return 'top-4 transform -translate-y-2'; // Center vertically
      case 'bottom-center':
        return 'bottom-4 transform -translate-y-2'; // Center vertically
      default:
        return 'top-left'; // Fallback to default
    }
  };

  return (
    <div
      className={`${alertClasses} ${alertContainerStyle} absolute ${getPositionClasses()}`}
    > {/* Apply base classes, prop style, absolute positioning, and position classes */}
      {title && <h3 className={`font-bold ${titleStyle}`}>{title}</h3>}
      <p className={`text-sm ${messageStyle}`}>{message}</p>
    </div>
  );
};

export default Alert;
