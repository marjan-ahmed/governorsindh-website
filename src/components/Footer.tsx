import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-200 p-10 sm:p-20">
      <div className="flex flex-col sm:flex-row justify-around">
        <div className="mb-8 sm:mb-0">
          <h1 className="text-xl font-bold">Core Courses</h1>
          <ul className="mt-4 flex flex-col gap-3">
            <li>Programming Fundamentals</li>
            <li>Web2 Using NextJS</li>
            <li>Earn as You Learn</li>
          </ul>
        </div>

        <div className="mb-8 sm:mb-0">
          <h1 className="text-xl font-bold">Advanced Courses</h1>
          <ul className="mt-4 flex flex-col gap-3">
            <li>Web 3 and Metaverse</li>
            <li>Cloud-Native Computing</li>
            <li>Artificial Intelligence (AI) and Deep Learning</li>
            <li>Ambient Computing and IoT</li>
            <li>Genomics and Bioinformatics</li>
            <li>Network Programmability and Automation</li>
          </ul>
        </div>

        <div>
          <h1 className="text-xl font-bold">Social Links</h1>
          <div className="flex gap-4 my-4 justify-center sm:justify-start">
            <Link href={"https://www.facebook.com/TeamKTessori"} target="blank">
              <FacebookIcon />
            </Link>
            <Link
              href={"https://www.youtube.com/@KamranTessorikk"}
              target="blank"
            >
              <YoutubeIcon />
            </Link>
            <Link href={"https://twitter.com/KamranTessoriPk"} target="blank">
              <TwitterIcon />
            </Link>
            <Link
              href={"https://www.instagram.com/KamranTessoriPk"}
              target="blank"
            >
              <InstagramIcon />
            </Link>
            <Link
              href={"https://pk.linkedin.com/company/governor-sindh-initiative"}
              target="blank"
            >
              <LinkedinIcon />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 my-5 items-center sm:items-start">
            <Mail />
            <button className="underline text-primary">
              <Link href="mailto:education@governorsindh.com">
                education@governorsindh.com
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
