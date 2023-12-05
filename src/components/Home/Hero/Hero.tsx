"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect } from "react";

import { ButtonBase, Container, Title } from "@/common/ui";

import AvatarIcon1 from "./static/avatarIcon1.png";
import AvatarIcon2 from "./static/avatarIcon2.png";
import AvatarIcon3 from "./static/avatarIcon3.png";
import AvatarIcon4 from "./static/avatarIcon4.png";
import AvatarIcon5 from "./static/avatarIcon5.png";
import AvatarIcon6 from "./static/avatarIcon6.png";
import AvatarIcon7 from "./static/avatarIcon7.png";
import AvatarIcon8 from "./static/avatarIcon8.png";
import ListImage from "./static/heroImage.jpg";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  useLayoutEffect(() => {
    const endPointAnimation = [
      { image: "img1", endPoint: 400 },
      { image: "img2", endPoint: 450 },
      { image: "img3", endPoint: 500 },
      { image: "img4", endPoint: 550 },
      { image: "img5", endPoint: 600 },
      { image: "img6", endPoint: 650 },
      { image: "img7", endPoint: 700 },
      { image: "img8", endPoint: 700 },
    ];
    for (const { image, endPoint } of endPointAnimation) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section",
          start: "top 74%",
          end: `+=${endPoint} 90%`,
          scrub: true,
        },
      });
      tl.to(`.${image}`, {
        y: 0,
        x: 0,
        scale: 1,
        duration: 3,
      });
    }
  }, []);

  return (
    <section className={"overflow-hidden"}>
      <Container>
        <div className={"pb-10 pt-20 text-center lg:pt-32"}>
          <p
            className={
              "mb-2 inline-block rounded-lg bg-mainBlue-500 px-4 py-1 font-inter text-sm text-white"
            }
          >
            ✨ Introducing People Tracking: Know the real person that visits
            your website before they fill a form!
          </p>
          <Title
            component={"h1"}
            className={
              "mx-auto mb-5 max-w-[780px] text-4xl sm:mb-7 sm:text-5xl md:text-6xl lg:mb-9 lg:text-[75px]"
            }
          >
            Know the person visiting your website
          </Title>
          <p
            className={
              "mx-auto mb-5 max-w-[585px] font-inter text-lg text-[#1A1A1A]"
            }
          >
            60% of companies engaging with your site aren&apos;t in your CRM.
            Identify your top prospects, engage them back, and
          </p>
          <ButtonBase
            className={{
              button:
                "mb-2 w-full rounded-2xl bg-mainBlue-500 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-600 md:w-auto",
            }}
          >
            See your leads for Free
          </ButtonBase>
          <div>
            <span
              className={
                "rounded-[4px] bg-[#FFD800] px-2 py-1 text-xs font-bold"
              }
            >
              3 MONTHS FREE TRIAL
            </span>
          </div>
        </div>
        <div
          className={
            "section relative rounded-2xl border-2 border-[#F0F0F0] pb-[58%]"
          }
        >
          <Image
            src={ListImage}
            alt={"List Image"}
            fill
            className={"rounded-md object-cover p-1 md:p-2 lg:p-3"}
          />
          <Image
            src={AvatarIcon1}
            alt={"Avatar Icon"}
            width={40}
            className={
              "img1 z-50] absolute left-[39.5%] top-[32.5%] hidden -translate-x-[560px] -translate-y-[690px] scale-125 lg:block"
            }
          />{" "}
          <Image
            src={AvatarIcon2}
            alt={"Avatar Icon"}
            width={40}
            className={
              "img2 z-50] absolute left-[39.5%] top-[40.9%] hidden -translate-x-[450px] -translate-y-[660px] scale-[1.3] lg:block"
            }
          />{" "}
          <Image
            src={AvatarIcon3}
            alt={"Avatar Icon"}
            width={40}
            className={
              "img3 z-50] absolute left-[39.5%] top-[49.3%] hidden -translate-x-[540px] -translate-y-[680px] scale-95 lg:block"
            }
          />{" "}
          <Image
            src={AvatarIcon4}
            alt={"Avatar Icon"}
            width={40}
            className={
              "img4 z-50] absolute left-[39.5%] top-[57.7%] hidden -translate-x-[480px] -translate-y-[670px] scale-150 lg:block"
            }
          />{" "}
          <Image
            src={AvatarIcon5}
            alt={"Avatar Icon"}
            width={40}
            className={
              "img5 z-50] absolute left-[39.5%] top-[66%] hidden -translate-y-[910px] translate-x-[650px] scale-125 lg:block"
            }
          />{" "}
          <Image
            src={AvatarIcon6}
            alt={"Avatar Icon"}
            width={40}
            className={
              "img6 z-50] absolute left-[39.5%] top-[74.5%] hidden -translate-y-[875px] translate-x-[760px] scale-[1.3] lg:block"
            }
          />{" "}
          <Image
            src={AvatarIcon7}
            alt={"Avatar Icon"}
            width={40}
            className={
              "img7 z-50] absolute left-[39.5%] top-[82.7%] hidden -translate-y-[900px] translate-x-[670px] scale-95 lg:block"
            }
          />{" "}
          <Image
            src={AvatarIcon8}
            alt={"Avatar Icon"}
            width={40}
            className={
              "img8 z-50] absolute left-[39.5%] top-[82.7%] hidden -translate-y-[820px] translate-x-[730px] scale-150 lg:block"
            }
          />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
