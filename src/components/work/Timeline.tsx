import SlideIn from "@/components/SlideIn";
import { TIMELINE_LIST } from "@/data/timelineData";
import React from "react";

const Timeline: React.FC = () => {
  return (
    <div className="grid responsive-grid pb-20 pt-10" id="work">
      <div className="col-start-2">
        <SlideIn>
          <h3 className="mb-20 text-center">My experience</h3>
        </SlideIn>
        <div className="relative flex flex-col">
          {TIMELINE_LIST.map((item, index) => (
            <div
              key={item.company + item.year}
              className={`group pb-20 pl-10 md:pl-0 md:flex gap-32 relative ${
                isEven(index) ? "" : "flex-row-reverse"
              }`}
            >
              <SlideIn
                side={isEven(index) ? "LEFT" : "RIGHT"}
                className={`flex-1 ${
                  isEven(index) ? "md:text-right" : "text-left"
                }`}
              >
                <h5 className="text-md text-neutral-500 md:text-black md:bg-primary md:rounded-full md:inline-block md:px-3">
                  {item.year}
                </h5>
              </SlideIn>
              <span className="bg-yellow-300 top-1 absolute left-0 md:left-1/2 h-full w-[2px] group-last:hidden ml-2" />
              <span className="absolute  top-1 left-0 h-4 w-4 border-2 border-yellow-300 rounded-full bg-primary md:left-1/2" />

              <SlideIn
                side={isEven(index) ? "RIGHT" : "LEFT"}
                className={`flex-1 ${
                  isEven(index) ? "text-left" : "md:text-right"
                }`}
              >
                <h4 className="text-lg">{item.position}</h4>
                <h3 className="font-semibold text-3xl">{item.company}</h3>
                <p className="text-gray-800 mt-2 text-justify max-w-[500px] inline-block">
                  {item.description}
                </p>
              </SlideIn>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
function isEven(n: number) {
  n = Number(n);
  return n === 0 || !!(n && !(n % 2));
}
