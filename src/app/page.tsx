import Image from "next/image";
import profilePic from "/public/images/babette-1.png";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-4 my-80">
      <div className="col-start-2 col-end-6 justify-self-end max-w-[450px] mt-20">
        <h3>Hello, my name is</h3>
        <h1>Babette Stam</h1>
        <p>
          I&apos;m an passionate creative developer, with 7+ years of industry
          experience as a front-end&apos;er.{" "}
        </p>
        <Link
          href="#contact"
          className="group flex gap-3 items-center mt-10 cursor-pointer"
        >
          <span className="w-3 h-3 blink bg-secondary rounded-full" />
          Available for work{" "}
          <ArrowRightIcon className="size-4 group-hover:ml-2 transition-all" />
        </Link>
      </div>
      <div className="col-start-7 col-end-13">
        <div className="relative">
          <div className="z-0 absolute bg-lightBackground w-full h-80 bottom-5 rounded-l-full fly-in" />
          <div className="z-0 absolute bg-primary w-full h-72 bottom-0 left-20 rounded-l-full fly-in-delay" />
          <div className="w-[430px] relative ml-72 fade-in">
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
  );
}
