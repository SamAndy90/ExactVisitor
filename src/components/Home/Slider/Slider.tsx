"use client";

import Image from "next/image";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { Container } from "@/common/ui";

import SlideIMG1 from "./static/sliderImage1.jpg";
import SlideIMG2 from "./static/sliderImage2.jpg";
import SlideIMG3 from "./static/sliderImage3.webp";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

function Slider() {
  return (
    <section className={"bg-black"}>
      <Container>
        <div
          className={
            "relative py-6 text-white md:py-10 lg:pb-12 lg:pt-20 xl:pb-14 xl:pt-28"
          }
        >
          <Swiper
            modules={[EffectFade, Navigation]}
            effect={"fade"}
            loop
            navigation={{
              nextEl: "#next-slide-btn",
              prevEl: "#prev-slide-btn",
            }}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div
                className={
                  "flex flex-col gap-2 bg-black sm:gap-3 md:flex-row md:gap-5"
                }
              >
                <div
                  className={
                    "relative min-h-[320px] flex-shrink-0 basis-[47%] overflow-hidden rounded-xl sm:min-h-[400px] lg:min-h-[500px]"
                  }
                >
                  <Image
                    src={SlideIMG1}
                    alt={"Slider Image"}
                    fill
                    className={"object-cover"}
                  />
                </div>
                <div className={"py-6"}>
                  <div
                    className={
                      "mb-4 inline-block text-2xl !leading-snug sm:mb-5 sm:text-3xl md:mb-6 md:text-[34px] lg:mb-7 lg:text-[40px]"
                    }
                  >
                    &apos;&apos;Exact
                    <span className={"font-bold"}>visitor</span> has uncovered
                    the dark funnel for us. Has been a total game changer for
                    our marketing spend.&apos;&apos;
                  </div>
                  <div className={"mb-2 text-xl md:text-2xl"}>
                    Steve Blum, COO
                  </div>
                  <div className={"md:text-lg"}>Autodesk</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={
                  "flex flex-col gap-2 bg-black sm:gap-3 md:flex-row md:gap-5"
                }
              >
                <div
                  className={
                    "relative min-h-[320px] flex-shrink-0 basis-[47%] overflow-hidden rounded-xl sm:min-h-[400px] lg:min-h-[500px]"
                  }
                >
                  <Image
                    src={SlideIMG2}
                    alt={"Slider Image"}
                    fill
                    className={"object-cover"}
                  />
                </div>
                <div className={"py-6"}>
                  <div
                    className={
                      "mb-4 inline-block text-2xl !leading-snug sm:mb-5 sm:text-3xl md:mb-6 md:text-[34px] lg:mb-7 lg:text-[40px]"
                    }
                  >
                    &apos;&apos;Exact
                    <span className={"font-bold"}>visitor</span> has uncovered
                    the dark funnel for us. Has been a total game changer for
                    our marketing spend.&apos;&apos;
                  </div>
                  <div className={"mb-2 text-xl md:text-2xl"}>
                    John Blum, COO
                  </div>
                  <div className={"md:text-lg"}>Autodesk</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={
                  "flex flex-col gap-2 bg-black sm:gap-3 md:flex-row md:gap-5"
                }
              >
                <div
                  className={
                    "relative min-h-[320px] flex-shrink-0 basis-[47%] overflow-hidden rounded-xl sm:min-h-[400px] lg:min-h-[500px]"
                  }
                >
                  <Image
                    src={SlideIMG3}
                    alt={"Slider Image"}
                    fill
                    className={"object-cover"}
                  />
                </div>
                <div className={"py-6"}>
                  <div
                    className={
                      "mb-4 inline-block text-2xl !leading-snug sm:mb-5 sm:text-3xl md:mb-6 md:text-[34px] lg:mb-7 lg:text-[40px]"
                    }
                  >
                    &apos;&apos;Exact
                    <span className={"font-bold"}>visitor</span> has uncovered
                    the dark funnel for us. Has been a total game changer for
                    our marketing spend.&apos;&apos;
                  </div>
                  <div className={"mb-2 text-xl md:text-2xl"}>
                    George Blum, COO
                  </div>
                  <div className={"md:text-lg"}>Autodesk</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <span
            id={"prev-slide-btn"}
            className={
              "absolute bottom-6 right-16 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white pr-1 md:bottom-10 lg:bottom-12 xl:bottom-14"
            }
          >
            <PrevArrow
              className={
                "transition-colors hover:fill-mainBlue-500 active:fill-blue-700"
              }
            />
          </span>
          <span
            id={"next-slide-btn"}
            className={
              "absolute bottom-6 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white pl-1 md:bottom-10 lg:bottom-12 xl:bottom-14"
            }
          >
            <NextArrow
              className={
                "transition-colors hover:fill-mainBlue-500 active:fill-blue-700"
              }
            />
          </span>
        </div>
      </Container>
    </section>
  );
}

export default Slider;
