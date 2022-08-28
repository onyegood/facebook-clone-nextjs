import React from 'react';
import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src='/logo.png'
      alt='Facebook logo'
      width={40}
      height={40}
    />
  );
}

export default Logo;
