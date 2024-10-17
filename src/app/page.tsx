import Image from "next/image";
import profilePic from "/public/images/babette-1.png";
import Link from "next/link";
import { ArrowRight as ReactComponent } from "/public/icons/arrow-right.svg";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 my-80">
      <div className="col-start-1 col-end-5 justify-self-end max-w-[450px]">
        <h3>Hello, my name is</h3>
        <h1>Babette Stam</h1>
        <p>
          I’m an passionate creative developer, with 7+ years of industry
          experience as a front-end’er.{" "}
        </p>
        <Link href="#contact">
          Available for work <ArrowRight />
        </Link>
      </div>
      <div className="relative col-start-6 col-end-13">
        <div className="z-0 absolute bg-lightBackground w-full h-80 bottom-5 rounded-l-full" />
        <div className="z-0 absolute bg-primary w-full h-72 bottom-0 left-20 rounded-l-full" />
        <div className="w-[430px] relative ml-72">
          <Image
            alt="Profile picture of Babette"
            src={profilePic}
            width={430}
            priority
          />
        </div>
      </div>
    </div>
  );
}
