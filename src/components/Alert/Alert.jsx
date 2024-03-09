import React from 'react';
import {getAlertTypeStyle,getPositionClasses} from './utils'
import classNames from 'classnames';
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
      className={classNames(getAlertTypeStyle(type) ,alertContainerStyle, getPositionClasses(position) , 'absolute')}
    > {/* Apply base classes, prop style, absolute positioning, and position classes */}
      {title && <h3 className={`font-bold ${titleStyle}`}>{title}</h3>}
      <p className={`text-sm ${messageStyle}`}>{message}</p>
    </div>
  );
};

export default Alert;
