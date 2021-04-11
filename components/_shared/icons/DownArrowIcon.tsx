import React from 'react'
import { Icon } from '.';

function DownArrowIcon({...props}) {
    return (
      <Icon
        src="/assets/icon-arrow-down.svg"
        alt="down arrow icon"
        {...props}
      />
    );
}

export default DownArrowIcon
