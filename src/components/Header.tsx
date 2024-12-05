'use client';
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return ( 
    <>
        <div className="fixed top-0 w-full z-10">
        <div className='relative h-18 bg-primary font-[inter] p-6'>
          <div className="absolute sm:left-[100px]">
            <Image
              src={'/logo.png'}
              alt='logo'
              width={90}
              height={90}
            />
          </div>
          <div className="flex justify-between items-center">
            <h1 className="block md:hidden text-[24px] ml-[80px] text-skyblue font-extrabold text-lg font-[roboto]">
              Tuition Free Program
            </h1>
            <h1 className='hidden md:block text-[24px] sm:ml-[270px] text-skyblue font-extrabold text-2xl font-[roboto]'>
              Tuition Free Education Program on Latest Technologies
            </h1>
            <div className="flex items-center">
              <button 
                className="block sm:hidden text-white focus:outline-none" 
                onClick={toggleMenu}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
              <ul className={`fixed top-18 right-0 w-full bg-primary text-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} sm:flex gap-10 mr-20 sm:static sm:w-auto sm:translate-x-0 sm:bg-transparent`}>
                <li className="border-b border-gray-600 sm:border-none"><Link href={'/'}>Home</Link></li>
                <li className="border-b border-gray-600 sm:border-none"><Link href={'/apply'}>Apply</Link></li>
                <li className="border-b border-gray-600 sm:border-none"><Link href={'/jobs'}>Jobs</Link></li>
                <li className="border-b border-gray-600 sm:border-none"><Link href={'/result'}>Result</Link></li>
                <li className="border-b border-gray-600 sm:border-none"><Link href={'/courses'}>Courses</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Header;