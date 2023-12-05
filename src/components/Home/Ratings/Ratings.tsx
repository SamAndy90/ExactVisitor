"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { CircleProgressBar } from "./CircleProgressBar";
import { Container, Title } from "@/common/ui";

import RatingIcon from "./static/ratingsIcon.png";

function Ratings() {
  const [stopCode, setStopCode] = useState(false);

  const prog1 = useRef<SVGCircleElement>(null);
  const prog2 = useRef<SVGCircleElement>(null);
  const prog3 = useRef<SVGCircleElement>(null);
  const section = useRef(null);

  useEffect(() => {
    function activateCircles() {
      const rateValues = [100, 98, 97];
      const circlesSectionOffset =
        document.getElementById("circlesSection")?.offsetTop || 6153;
      const circles: SVGCircleElement[] = [
        prog1.current!,
        prog2.current!,
        prog3.current!,
      ];
      if (window.scrollY > circlesSectionOffset - 600 && stopCode === false) {
        for (let i = 0; i < circles.length; i++) {
          const radius = circles[i].r.baseVal.value;
          const dashArray = radius * Math.PI * 2;
          circles[i].style.strokeDasharray = `${dashArray}`;
          const setProgress = (percent: number) => {
            circles[i].style.strokeDashoffset = `${
              dashArray - (dashArray * percent) / 100
            }`;
          };
          setProgress(rateValues[i]);
        }
        setStopCode(true);
      }
    }
    window.addEventListener("scroll", activateCircles);
    return () => {
      window.removeEventListener("scroll", activateCircles);
    };
  }, [stopCode]);
  return (
    <section className={"py-8 md:pb-16 md:pt-14"}>
      <Container>
        <div
          className={
            "rounded-[20px] border border-[#E5E5E5] px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:pb-14"
          }
        >
          <div className={"mb-12 flex items-end gap-6"}>
            <Image
              src={RatingIcon}
              alt={"Brand Icon"}
              width={55}
              className={"hidden sm:block"}
            />
            <div className={"mx-auto text-center sm:mx-0 sm:text-left"}>
              <Title
                component={"h2"}
                className={
                  "mx-auto text-center text-2xl md:mx-0 md:text-left md:text-[35px]"
                }
              >
                ExactVisitor user ratings
              </Title>
              <p className={"pl-1 text-sm text-[#686868]"}>
                Based on our{" "}
                <Link href={"#"} className={"inline text-[#3D7AFF]"}>
                  G2 ratings
                </Link>
              </p>
            </div>
          </div>
          <div
            className={
              "flex flex-col justify-between gap-x-1 gap-y-6 text-center sm:flex-row md:text-left"
            }
            ref={section}
            id={"circlesSection"}
          >
            <div
              className={
                "flex flex-1 flex-col items-center gap-2 md:flex-row md:gap-4 lg:gap-7"
              }
            >
              <div className={"relative"}>
                <CircleProgressBar
                  ref={prog1}
                  circleWidth={94}
                  strokeWidth={3}
                  color={"stroke-rate1-500"}
                />
                <span
                  className={
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[25px] text-rate1-500"
                  }
                >
                  10
                </span>
              </div>
              <div>
                <p className={"text-[22px] text-[#404040]"}>Ease of use</p>
                <p className={"text-sm text-[#686868]"}>Average: 10</p>
              </div>
            </div>
            <div
              className={
                "flex flex-1 flex-col items-center gap-2 md:flex-row md:gap-4 lg:gap-7"
              }
            >
              <div className={"relative"}>
                <CircleProgressBar
                  ref={prog2}
                  circleWidth={94}
                  strokeWidth={3}
                  color={"stroke-rate2-500"}
                />
                <span
                  className={
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[25px] text-rate2-500"
                  }
                >
                  9.8
                </span>
              </div>
              <div>
                <p className={"text-[22px] text-[#404040]"}>
                  Quality of support
                </p>
                <p className={"text-sm text-[#686868]"}>Average: 9.8</p>
              </div>
            </div>
            <div
              className={
                "flex flex-1 flex-col items-center gap-2 md:flex-row md:gap-4 lg:gap-7"
              }
            >
              <div className={"relative"}>
                <CircleProgressBar
                  ref={prog3}
                  circleWidth={94}
                  strokeWidth={3}
                  color={"stroke-rate3-500"}
                />
                <span
                  className={
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[25px] text-rate3-500"
                  }
                >
                  9.7
                </span>
              </div>
              <div>
                <p className={"text-[22px] text-[#404040]"}>Ease of setup</p>
                <p className={"text-sm text-[#686868]"}>Average: 9.7</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Ratings;
