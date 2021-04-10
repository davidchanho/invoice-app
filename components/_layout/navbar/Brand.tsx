import Link from 'next/link';
import React from 'react'
import { LogoContainer, Logo } from './Logo.styles';

function Brand() {
    return (
      <LogoContainer>
        <Link href="/">
          <Logo
            src="/assets/logo.svg"
            alt="logo icon"
            width={40}
            height={37.71}
          />
        </Link>
      </LogoContainer>
    );
}

export default Brand
