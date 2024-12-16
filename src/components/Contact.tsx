"use client";
import SlideIn from "@/components/SlideIn";
// import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Tippy from "@tippyjs/react";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <div className="grid responsive-grid py-40 mb-40" id="contact">
      <div className="col-start-2 text-center">
        <SlideIn>
          <h2>Contact</h2>
          {/* <h3 className="mt-5">Get in touch</h3> */}
          {/* <p className="max-w-[490px] text-justify mx-auto my-10">
            Feel free to contact me about job opportunities or freelance
            assignments. Or just to connect.
          </p> */}

          <div className="flex flex-col md:flex-row gap-4 justify-center align-center">
            {CONTACT_OPTIONS.map(
              ({
                name,
                // Icon,
                image,
                content,
                externalLink,
              }) => (
                <Tippy
                  content={
                    externalLink ? "Click to visit" : `Click to copy ${content}`
                  }
                  delay={externalLink ? 1000 : 200}
                  key={name}
                  className="bg-green-700"
                >
                  <div className="max-w-[400px] cursor-pointer">
                    <CopyToClipboard
                      text={content}
                      onCopy={() =>
                        externalLink
                          ? window.open(content, "_blank")
                          : toast.success("Copied to clipboard")
                      }
                    >
                      <div className="flex flex-row items-center gap-4 text-left">
                        <div className="bg-neutral-700 text-white rounded-lg w-16 h-16  flex items-center justify-center overflow-hidden transition-all hover-extend">
                          {/* {Icon && <Icon className="size-4" />} */}
                          {image && (
                            <Image
                              src={image}
                              alt={`${name} logo`}
                              width={15}
                              height={15}
                              className="text-white"
                            />
                          )}
                        </div>
                        <div className="max-w-80 w-full md:hidden">
                          {content}
                        </div>
                      </div>
                    </CopyToClipboard>
                  </div>
                </Tippy>
              )
            )}
          </div>
        </SlideIn>
      </div>
    </div>
  );
}

const CONTACT_OPTIONS = [
  // {
  //   name: "E-mail",
  //   Icon: EnvelopeIcon,
  //   content: "babettestam@gmail.com",
  //   externalLink: false,
  // },
  // {
  //   name: "Phone",
  //   Icon: PhoneIcon,
  //   content: "0623533978",
  //   externalLink: false,
  // },
  {
    name: "LinkedIn",
    image: "/logos/linkedin.svg",
    content: "https://www.linkedin.com/in/babette-stam/",
    externalLink: true,
  },
];
