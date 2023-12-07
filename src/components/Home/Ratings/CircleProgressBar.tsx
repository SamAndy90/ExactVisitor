"use client";

import { useEffect, useRef, useState } from "react";

type CircleProgressBarType = {
  percentage: number;
  circleWidth: number;
  strokeWidth: number;
  color: string;
  text?: string;
  textColor?: string;
};

export const CircleProgressBar = ({
  circleWidth = 100,
  strokeWidth = 5,
  color,
  percentage = 0,
  text,
  textColor = color,
}: CircleProgressBarType) => {
  const [decrement, setDecrement] = useState(600);
  const circleRef = useRef(null);
  const componentRef = useRef(null);
  const radius = circleWidth / 2 - strokeWidth;

  useEffect(() => {
    setDecrement(window.innerHeight * 0.85);

    function activateCircles() {
      const circle: SVGCircleElement = circleRef.current!;
      const component: HTMLDivElement = componentRef.current!;
      const componentOffset = component.offsetTop;

      if (window.scrollY > componentOffset - decrement) {
        const dashArray = radius * Math.PI * 2;
        circle.style.strokeDasharray = `${dashArray}`;
        circle.style.strokeDashoffset = `${
          dashArray - (dashArray * percentage) / 100
        }`;
      }
      // if (window.scrollY < componentOffset - window.innerHeight) {
      //   circle.style.strokeDasharray = "550";
      //   circle.style.strokeDashoffset = "549";
      // }
    }
    window.addEventListener("scroll", activateCircles);
    return () => {
      window.removeEventListener("scroll", activateCircles);
    };
  }, [percentage, decrement]);
  return (
    <div ref={componentRef} className={"relative"}>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={`${strokeWidth}px`}
          r={radius}
          className={`fill-none stroke-white`}
        />
        <circle
          ref={circleRef}
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={`${strokeWidth}px`}
          r={radius}
          className={`fill-none ${color} transition-all duration-[1.7s] ease-in-out`}
          style={{
            strokeDasharray: 550,
            strokeDashoffset: 549,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform={`rotate(-90, ${circleWidth / 2}, ${circleWidth / 2})`}
        />
      </svg>
      <span
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[25px] ${textColor}`}
      >
        {text}
      </span>
    </div>
  );
};

CircleProgressBar.displayName = "CircleProgressBar";
