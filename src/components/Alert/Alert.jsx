import React from 'react';
import {
  generateAlertClasses,
  generatePositionClasses
} from 'react-nex/src/Components/Alert/alertUtils'
import classNames from 'classnames';
const Alert = ({
  type = 'info', // Default alert type
  title,
  message,
  titleStyle = '', // Classes for styling title
  messageStyle = '', // Classes for styling message
  alertContainerStyle = '', // New prop for styling the entire alert container
  position = 'top-left', // Default position (can be adjusted)
}) => {
 
  return (
    <div
      className={classNames(generateAlertClasses(type), generatePositionClasses(position),alertContainerStyle, 'absolute')}
    > {/* Apply base classes, prop style, absolute positioning, and position classes */}
      {title && <h3 className={`font-bold ${titleStyle}`}>{title}</h3>}
      <p className={`text-sm ${messageStyle}`}>{message}</p>
    </div>
  );
};

export default Alert;
