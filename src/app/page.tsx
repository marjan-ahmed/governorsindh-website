'use client';
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
<div className="sm:px-[110px] p-2 mt-1">
  <div className="flex flex-wrap justify-between items-center">
    <div className="sm:my-[170px] my-[120px] w-full sm:w-1/2">
      <h1 className="-tracking-tighter text-primary text-center sm:text-start font-[poppins] text-[2em] sm:text-[60px] font-extrabold">
        Governor Sindh
      </h1>
      <h1 className="sm:text-[40px] text-[1.8em] text-center sm:text-start font-normal leading-8 font-[poppins] tracking-wider text-primary">
        Kamran Khan Tessori
      </h1>
      <h1 className="sm:text-[40px] text-[29px] font-[poppins] tracking-wider text-center sm:text-start mt-[35px] font-semibold text-blueC leading-tight">
        Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)
      </h1>
      <p className="text-primary text-[24px] mt-[20px] font-[poppins] text-center sm:text-start font-bold">
        Earn up to $5,000 / month
      </p>
      <p className="text-primary text-[24px] mt-[20px] font-[poppins] text-center sm:text-start font-bold">
        Now admissions are open in <br /> Hyderabad
      </p>
      <div className="mt-9 flex gap-12 justify-center flex-wrap sm:justify-start">
        <div className="mt-[-20px] sm:mt-0">
          <Button text="apply now"/>
        </div>
        <div className="mt-[-2em] sm:mt-0 text-center">
          <div className="font-extrabold text-xl font-[poppins] sm:text-[30px] text-primary tracking-wider">
            562,143
          </div>
          <div className="font-normal text-[12px] sm:text-[14px] text-primary font-[poppins] tracking-wider">
            Accepted Applications
          </div>
        </div>
      </div>
    </div>
    <div className="w-full sm:w-1/2 mt-10 sm:mt-0 flex justify-center">
      <Image 
        src={'/governor_sindh.png'}
        alt="governor sindh"
        width={1200}
        height={1200}
        className="object-cover"
      />
    </div>
  </div>
</div>

    {/* // second */}
    <div className="sm:mx-24">
      <h1 className="text-primary text-[20px] sm:text-[36px] font-extrabold font-[geist] text-center">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
      <p className="font-normal text-md text-justify sm:text-[20px] m-5  my-10">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
      <div className="flex justify-center gap-5 flex-wrap sm:flex-nowrap">
  <div className="w-full sm:w-[27em] sm:h-[18em] h-[20em] flex flex-wrap rounded-lg shadow-gray-800 shadow-2xl bg-white overflow-hidden">
    <Image 
      src={'https://kamrantessori.com/_next/static/media/imageWebsite.5c6ae62f.jpg'}
      alt="img-1"
      width={400}
      height={400}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-full sm:w-[27em] sm:h-[18em] h-[20em] rounded-lg shadow-gray-800 shadow-2xl bg-white overflow-hidden">
    <Image 
      src={'https://kamrantessori.com/_next/static/media/imageWebsite2.a102c7b5.jpg'}
      alt="img-1"
      width={400}
      height={400}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-full sm:w-[27em] sm:h-[18em] h-[20em] rounded-lg shadow-gray-800 shadow-2xl bg-white overflow-hidden">
    <Image 
      src={'https://kamrantessori.com/_next/static/media/imageWebsite3.b845fe78.jpg'}
      alt="img-1"
      width={400}
      height={400}
      className="object-cover w-full h-full"
    />
  </div>
</div>
      <div className="border-b-2 my-12"></div>
      <h1 className="text-[36px] mx-5 text-primary font-extrabold font-[inter]">Core Courses Sequence</h1>
      <div className="flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-9 my-8">
      <div className="">
        <Card img="https://kamrantessori.com/_next/static/media/programming_fundamentals.49cca4e9.jpg" text="Programming Fundamentals"/>
      </div>
      <div className="mt-[-60px] sm:mt-0">
      <Card img="https://kamrantessori.com/_next/static/media/nextjs.3dff0f70.jpg" text="nextjs Web2 Using NextJS"/>
      </div>
      <div className="mt-[-60px] sm:mt-0">
        <Card img="https://kamrantessori.com/_next/static/media/earn_as_your_learn.b8248a49.jpg" text="earn as you learn"/>
      </div>
      </div>
      <div className="flex flex-wrap sm:w-[1315px]">
      <h1 className="text-[36px] mx-5 text-primary font-extrabold font-[inter]">Advanced Courses</h1>
      <div className="flex flex-wrap sm:justify-start justify-center my-24 sm:gap-8">
        <div className="mt-[-60px] sm:mt-0">
          <Card img="https://kamrantessori.com/_next/static/media/AI.39397d24.jpg" text="artificial intelligence"/>
        </div>
        <div className="mt-[-60px] sm:mt-0">
          <Card img="https://kamrantessori.com/_next/static/media/metaverse.06eccb60.jpg" text="Web 3 and Metaverse"/>
        </div>
        <div className="mt-[-60px] sm:mt-0">
          <Card img="https://kamrantessori.com/_next/static/media/cloudComputing.7260492c.jpg" text="Cloud-Native Computing"/>
        </div>
        <div className="mt-[-60px] sm:mt-0">
          <Card img="https://kamrantessori.com/_next/static/media/iot.16f7b003.jpg" text="Ambient Computing and IoT"/>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start sm:gap-8">
          <div className="mt-[-60px] sm:mt-[-60px]">
          <Card img="https://kamrantessori.com/_next/static/media/genomics.b87789f1.jpg" text="Genomics and Bioinformatics"/>
        </div>
        <div className="mt-[-60px] sm:mt-[-60px]">
          <Card img="https://kamrantessori.com/_next/static/media/automation.a77dbbe8.jpg" text="Network Programmability and Automation"/>
          </div>
          </div>
      </div>
      </div>
    </div>
    </>
  );
}