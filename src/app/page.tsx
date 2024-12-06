"use client";
import Image from "next/image";
import Button from "../components/Button";
import Card from "@/components/Card";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/jpeg;base64,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")`,
          }}
        >
          <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        </div>

        <div className="relative h-full sm:px-[110px] p-2 mt-1">
          <div className="flex flex-wrap justify-between items-center">
            <div className="sm:my-[170px] my-[120px] w-full sm:w-1/2">
              <h1 className="-tracking-tighter text-primary text-center sm:text-start font-[poppins] text-[2em] sm:text-[60px] font-extrabold">
                Governor Sindh
              </h1>
              <h1 className="sm:text-[40px] text-[1.8em] text-center sm:text-start font-normal leading-4 font-[poppins] tracking-wider text-primary">
                Kamran Khan Tessori
              </h1>
              <h1 className="sm:text-[40px] text-[29px] font-[poppins] tracking-wider text-center sm:text-start mt-[35px] font-semibold text-blueC leading-tight">
                Certified Cloud <br /> Applied Generative AI <br /> Engineer
                (GenEng)
              </h1>
              <p className="text-primary text-[24px] mt-[20px] font-[poppins] text-center sm:text-start font-bold">
                Earn up to $5,000 / month
              </p>
              <p className="text-primary text-[24px] mt-[20px] font-[poppins] text-center sm:text-start font-bold">
                Now admissions are open in <br /> Hyderabad
              </p>
              <div className="mt-9 flex gap-12 justify-center flex-wrap sm:justify-start">
                <div className="mt-[-20px] sm:mt-0">
                  <Button text="apply now" />
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
            <div className="w-full hidden sm:flex sm:w-1/2 mt-10 sm:mt-0 justify-center">
              <Image
                src={"/governor_sindh.png"}
                alt="governor sindh"
                width={1200}
                height={1200}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* // second */}
      <div className="sm:mx-24">
        <h1 className="text-primary my-20 mb-2 text-[20px] sm:text-[36px] font-extrabold font-[roboto] tracking-normal leading-10 text-center">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h1>
        <p className="font-normal text-md text-justify font-[roboto] sm:text-[20.4px]  tracking-wide my-10">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
        <div className="flex justify-center gap-5 flex-wrap sm:flex-nowrap">
          <div className="w-full sm:w-[27em] sm:h-[18em] h-[20em] flex flex-wrap rounded-lg shadow-gray-800 shadow-2xl bg-white overflow-hidden">
            <Image
              src={
                "https://kamrantessori.com/_next/static/media/imageWebsite.5c6ae62f.jpg"
              }
              alt="img-1"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full sm:w-[27em] sm:h-[18em] h-[20em] rounded-lg shadow-gray-800 shadow-2xl bg-white overflow-hidden">
            <Image
              src={
                "https://kamrantessori.com/_next/static/media/imageWebsite2.a102c7b5.jpg"
              }
              alt="img-1"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full sm:w-[27em] sm:h-[18em] h-[20em] rounded-lg shadow-gray-800 shadow-2xl bg-white overflow-hidden">
            <Image
              src={
                "https://kamrantessori.com/_next/static/media/imageWebsite3.b845fe78.jpg"
              }
              alt="img-1"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="border-b-2 my-12"></div>
        <h1 className="text-[36px] mx-5 text-primary font-extrabold font-[inter]">
          Core Courses Sequence
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-9 my-8">
          <div className="">
            <Card
              img="https://kamrantessori.com/_next/static/media/programming_fundamentals.49cca4e9.jpg"
              text="Programming Fundamentals"
            />
          </div>
          <div className="mt-[-60px] sm:mt-0">
            <Card
              img="https://kamrantessori.com/_next/static/media/nextjs.3dff0f70.jpg"
              text="nextjs Web2 Using NextJS"
            />
          </div>
          <div className="mt-[-60px] sm:mt-0">
            <Card
              img="https://kamrantessori.com/_next/static/media/earn_as_your_learn.b8248a49.jpg"
              text="earn as you learn"
            />
          </div>
        </div>
        <div className="flex flex-wrap sm:w-[1315px]">
          <h1 className="text-[36px] mx-5 text-primary font-extrabold font-[inter]">
            Advanced Courses
          </h1>
          <div className="flex flex-wrap sm:justify-start justify-center my-24 sm:gap-8">
            <div className="mt-[-60px] sm:mt-0">
              <Card
                img="https://kamrantessori.com/_next/static/media/AI.39397d24.jpg"
                text="artificial intelligence"
              />
            </div>
            <div className="mt-[-60px] sm:mt-0">
              <Card
                img="https://kamrantessori.com/_next/static/media/metaverse.06eccb60.jpg"
                text="Web 3 and Metaverse"
              />
            </div>
            <div className="mt-[-60px] sm:mt-0">
              <Card
                img="https://kamrantessori.com/_next/static/media/cloudComputing.7260492c.jpg"
                text="Cloud-Native Computing"
              />
            </div>
            <div className="mt-[-60px] sm:mt-0">
              <Card
                img="https://kamrantessori.com/_next/static/media/iot.16f7b003.jpg"
                text="Ambient Computing and IoT"
              />
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start sm:gap-8">
              <div className="mt-[-60px] sm:mt-[-60px]">
                <Card
                  img="https://kamrantessori.com/_next/static/media/genomics.b87789f1.jpg"
                  text="Genomics and Bioinformatics"
                />
              </div>
              <div className="mt-[-60px] sm:mt-[-60px]">
                <Card
                  img="https://kamrantessori.com/_next/static/media/automation.a77dbbe8.jpg"
                  text="Network Programmability and Automation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
