"use client";

import { Container } from "@/common/ui";
import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Image from "next/image";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import SlideIMG1 from "./static/sliderImage1.jpg";
import SlideIMG2 from "./static/sliderImage2.jpg";
import SlideIMG3 from "./static/sliderImage3.webp";
// import { useSwiper,  } from "swiper/react";

function Slider() {
    // const swiper = useSwiper();
    return (
        <section className={"bg-black"}>
            <Container>
                <div
                    className={
                        "text-white py-6 md:py-10 lg:pt-20 lg:pb-12 xl:pt-28 xl:pb-14 relative"
                    }>
                    <Swiper
                        modules={[EffectFade, Navigation]}
                        effect="fade"
                        loop
                        navigation={{
                            nextEl: "#next-slide-btn",
                            prevEl: "#prev-slide-btn",
                        }}
                        slidesPerView={1}>
                        <SwiperSlide>
                            <div
                                className={
                                    "flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-5 bg-black"
                                }>
                                <div
                                    className={
                                        "relative min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] flex-shrink-0 basis-[47%] rounded-xl overflow-hidden"
                                    }>
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
                                            "text-2xl sm:text-3xl inline-block !leading-snug md:text-[34px] lg:text-[40px] mb-4 sm:mb-5 md:mb-6 lg:mb-7"
                                        }>
                                        ''Exact
                                        <span className={"font-bold"}>
                                            visitor
                                        </span>{" "}
                                        has uncovered the dark funnel for us.
                                        Has been a total game changer for our
                                        marketing spend.''
                                    </div>
                                    <div className={"text-xl md:text-2xl mb-2"}>
                                        Steve Blum, COO
                                    </div>
                                    <div className={"md:text-lg"}>Autodesk</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className={
                                    "flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-5 bg-black"
                                }>
                                <div
                                    className={
                                        "relative min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] flex-shrink-0 basis-[47%] rounded-xl overflow-hidden"
                                    }>
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
                                            "text-2xl sm:text-3xl inline-block !leading-snug md:text-[34px] lg:text-[40px] mb-4 sm:mb-5 md:mb-6 lg:mb-7"
                                        }>
                                        ''Exact
                                        <span className={"font-bold"}>
                                            visitor
                                        </span>{" "}
                                        has uncovered the dark funnel for us.
                                        Has been a total game changer for our
                                        marketing spend.''
                                    </div>
                                    <div className={"text-xl md:text-2xl mb-2"}>
                                        John Blum, COO
                                    </div>
                                    <div className={"md:text-lg"}>Autodesk</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div
                                className={
                                    "flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-5 bg-black"
                                }>
                                <div
                                    className={
                                        "relative min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] flex-shrink-0 basis-[47%] rounded-xl overflow-hidden"
                                    }>
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
                                            "text-2xl sm:text-3xl inline-block !leading-snug md:text-[34px] lg:text-[40px] mb-4 sm:mb-5 md:mb-6 lg:mb-7"
                                        }>
                                        ''Exact
                                        <span className={"font-bold"}>
                                            visitor
                                        </span>{" "}
                                        has uncovered the dark funnel for us.
                                        Has been a total game changer for our
                                        marketing spend.''
                                    </div>
                                    <div className={"text-xl md:text-2xl mb-2"}>
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
                            "bg-white absolute bottom-6 md:bottom-10 lg:bottom-12 xl:bottom-14 right-16 w-10 h-10 rounded-full flex items-center justify-center pr-1 z-10"
                        }>
                        <PrevArrow
                            className={
                                "hover:fill-mainBlue-500 active:fill-blue-700 transition-colors"
                            }
                        />
                    </span>
                    <span
                        id={"next-slide-btn"}
                        className={
                            "bg-white absolute bottom-6 md:bottom-10 lg:bottom-12 xl:bottom-14 right-0 w-10 h-10 rounded-full flex items-center justify-center pl-1 z-10"
                        }>
                        <NextArrow
                            className={
                                "hover:fill-mainBlue-500 active:fill-blue-700 transition-colors"
                            }
                        />
                    </span>
                </div>
            </Container>
        </section>
    );
}

export default Slider;
