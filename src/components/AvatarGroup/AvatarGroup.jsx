import classNames from 'classnames';
import React, { Children } from 'react';

const AvatarGroup = ({ children, containerStyle, imageContainerStyle }) => {
    return (
        <div className={classNames('flex flex-row' ,containerStyle)}>
            {Children.map(children, (child, index) => (
                <div className={classNames(imageContainerStyle,'relative ml-[-5%] p-1 bg-white rounded-full')} style={{zIndex: children.length - index }} key={index}>
                    {child}
                </div>
            ))}
        </div>
    );
}

export default AvatarGroup;
