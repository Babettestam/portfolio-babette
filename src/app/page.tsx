import Image from "next/image";
import profilePic from "/public/images/babette-1.png";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import About from "@/components/about/About";
import Work from "@/components/work/Work";
import Contact from "@/components/Contact";
import Timeline from "@/components/work/Timeline";

export default function Home() {
  return (
    <>
      <main
        className="grid grid-cols-12 gap-4 py-20 md:pt-80 md:pb-40"
        id="main"
      >
        <div className="col-start-1 col-end-13 md:col-end-4 xl:col-start-3 xl:col-end-6 max-w-[450px] mt-20 pl-4 xl:pl-0">
          <h3>Hello, my name is</h3>
          <h1>Babette Stam</h1>
          <p>
            I&apos;m an passionate creative developer, with 8+ years of
            professional experience as a front-end&apos;er.{" "}
          </p>
          <Link
            href="#contact"
            className="styled-link group flex gap-3 items-center mt-10 cursor-pointer"
          >
            <span className="w-3 h-3 blink bg-secondary rounded-full" />
            Available for work{" "}
            <ArrowRightIcon className="size-4 group-hover:ml-2 transition-all" />
          </Link>
        </div>
        <div className="col-start-1 md:col-start-7 col-end-13 xl:col-start-7 xl:col-end-13 overflow-hidden">
          <div className="relative">
            <div className="z-0 absolute bg-lightBackground w-full h-80 bottom-5 rounded-l-full fly-in" />
            <div className="z-0 absolute bg-primary w-[90%] h-72 bottom-0 right-0 rounded-l-full fly-in-delay" />
            <div className="w-[430px] relative ml-72 fly-in">
              <Image
                alt="Profile picture of Babette"
                src={profilePic}
                width={430}
                priority
              />
            </div>
          </div>
        </div>
      </main>

      <About />
      <Work />
      <Timeline />
      <Contact />
    </>
  );
}
