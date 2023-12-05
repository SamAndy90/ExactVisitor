import { forwardRef } from "react";

type CircleProgressBarType = {
  percentage: number;
  circleWidth: number;
  strokeWidth: number;
  color: string;
};

const CircleProgressBar = forwardRef<SVGCircleElement, CircleProgressBarType>(
  (props, ref) => {
    const { percentage, circleWidth, strokeWidth, color } = props;
    const radius = circleWidth / 2 - strokeWidth;
    const dashArray = 550;
    const dashOffset = 549;
    // const dashArray = radius * Math.PI * 2;
    // const dashOffset = dashArray - (dashArray * percentage) / 100;
    return (
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
          ref={ref}
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={`${strokeWidth}px`}
          r={radius}
          className={`fill-none ${color} transition-all duration-[1.7s] ease-in-out`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform={`rotate(-90, ${circleWidth / 2}, ${circleWidth / 2})`}
        />
      </svg>
    );
  },
);

export default CircleProgressBar;
