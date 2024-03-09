import React from 'react';
import {generateAlertClasses,generatePositionClasses}from 'react-nex/src/Components/Alert/alertUtils'
const Alert = ({
  type = 'info', 
  title,
  message,
  titleStyle = '', 
  messageStyle = '', 
  alertContainerStyle = '', 
  position = 'top-left', 
}) => {

  return (
    <div
      className={`${generateAlertClasses(type)} ${generatePositionClasses(position)} ${alertContainerStyle}`}
    > {/* Apply base classes, prop style, absolute positioning, and position classes */}
      {title && <h3 className={`font-bold ${titleStyle}`}>{title}</h3>}
      <p className={`text-sm ${messageStyle}`}>{message}</p>
    </div>
  );
};

export default Alert;
