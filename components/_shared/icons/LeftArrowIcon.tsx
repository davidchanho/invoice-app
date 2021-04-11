import React from 'react'
import { Icon } from '.';

function LeftArrowIcon({...props}) {
    return (
      <Icon
        src="/assets/icon-arrow-left.svg"
        alt="left arrow icon"
        {...props}
      />
    );
}

export default LeftArrowIcon
