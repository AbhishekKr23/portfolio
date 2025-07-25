import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import logo from "../../public/logo.png";

const Footer = ()  => {
  return (
    <div className='max-w-[1200px] mt-10 sm:mt-20 md:mt-32 lg:mt-40 pt-20 pb-8 w-[90%] mx-auto flex flex-col sm:flex-row gap-4 sm:gap-[10px] justify-between items-center border-t border-[#1d1d1d] text-center'>
      <Link href="/">
        <Image src={logo} width={120} height={60} className="max-h-[60px] h-full object-contain object-center mx-auto" alt="logo" />
      </Link>
      <span className='text-[0.95rem] font-[500] text-[#9e9e9e] mt-2 sm:mt-0'>Made with ❤️ by Abhishek Kumar</span>
    </div>
  );
}

export default Footer;