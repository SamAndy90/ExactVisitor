"use client";

import { ButtonBase, Container, Title } from "@/common/ui";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ListImage from "./static/heroImage.jpg";
import AvatarIcon1 from "./static/avatarIcon1.png";
import AvatarIcon2 from "./static/avatarIcon2.png";
import AvatarIcon3 from "./static/avatarIcon3.png";
import AvatarIcon4 from "./static/avatarIcon4.png";
import AvatarIcon5 from "./static/avatarIcon5.png";
import AvatarIcon6 from "./static/avatarIcon6.png";
import AvatarIcon7 from "./static/avatarIcon7.png";
import AvatarIcon8 from "./static/avatarIcon8.png";

gsap.registerPlugin(ScrollTrigger);

// type PositionsType = {
//     x: number;
//     y: number;
// };

function Hero() {
    // const [scroll, setScroll] = useState<number>(0);
    // const [positions, setPositions] = useState([{ x: -2000, y: -90 }]);

    // function calculatePosition(positions: PositionsType[], scroll: number) {
    //     if (scroll >= 400) return positions;
    //     let res = positions.map((pos) => {
    //         pos.x = pos.x * (1 - scroll / 400);
    //         pos.y = pos.y * (1 - scroll / 400);
    //         return pos;
    //     });

    //     return res;
    // }
    // useEffect(() => {
    //     setScroll(window.scrollY);
    //     setPositions(() => calculatePosition(positions, scroll));
    // }, []);

    // useEffect(() => {
    //     setPositions(() => calculatePosition(positions, scroll));
    //     window.addEventListener("scroll", () => {
    //         setScroll(window.scrollY);
    //     });
    // }, [scroll]);

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
    useLayoutEffect(() => {
        for (let { image, endPoint } of endPointAnimation) {
            let tl = gsap.timeline({
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
                <div className={"text-center pt-20 lg:pt-32 pb-10"}>
                    <p
                        className={
                            "inline-block text-white rounded-lg mb-2 font-inter text-sm bg-mainBlue-500 px-4 py-1"
                        }>
                        ✨ Introducing People Tracking: Know the real person
                        that visits your website before they fill a form!
                    </p>
                    <Title
                        component={"h1"}
                        className={
                            "max-w-[780px] mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-[75px] mb-5 sm:mb-7 lg:mb-9"
                        }>
                        Know the person visiting your website
                    </Title>
                    <p
                        className={
                            "max-w-[585px] mx-auto font-inter text-lg text-[#1A1A1A] mb-5"
                        }>
                        60% of companies engaging with your site aren't in your
                        CRM. Identify your top prospects, engage them back, and
                    </p>
                    <ButtonBase
                        className={{
                            button: "font-bold text-sm text-white bg-mainBlue-500 hover:bg-blue-600 transition-colors py-3 px-7 rounded-2xl mb-2 w-full md:w-auto",
                        }}>
                        See your leads for Free
                    </ButtonBase>
                    <div>
                        <span
                            className={
                                "bg-[#FFD800] font-bold text-xs px-2 py-1 rounded-[4px]"
                            }>
                            3 MONTHS FREE TRIAL
                        </span>
                    </div>
                </div>
                <div
                    className={
                        "section relative rounded-2xl border-2 border-[#F0F0F0] pb-[58%]"
                    }>
                    <Image
                        src={ListImage}
                        alt={"List Image"}
                        fill
                        className={"object-cover rounded-md p-1 md:p-2 lg:p-3"}
                    />
                    <Image
                        src={AvatarIcon1}
                        alt={"Avatar Icon"}
                        width={40}
                        className={
                            "img1 absolute left-[39.5%] top-[32.5%] hidden lg:block z-50] -translate-x-[560px] -translate-y-[690px] scale-125"
                        }
                    />{" "}
                    <Image
                        src={AvatarIcon2}
                        alt={"Avatar Icon"}
                        width={40}
                        className={
                            "img2 absolute left-[39.5%] top-[40.9%] hidden lg:block z-50] -translate-x-[450px] -translate-y-[660px] scale-[1.3]"
                        }
                    />{" "}
                    <Image
                        src={AvatarIcon3}
                        alt={"Avatar Icon"}
                        width={40}
                        className={
                            "img3 absolute left-[39.5%] top-[49.3%] hidden lg:block z-50] -translate-x-[540px] -translate-y-[680px] scale-95"
                        }
                    />{" "}
                    <Image
                        src={AvatarIcon4}
                        alt={"Avatar Icon"}
                        width={40}
                        className={
                            "img4 absolute left-[39.5%] top-[57.7%] hidden lg:block z-50] -translate-x-[480px] -translate-y-[670px] scale-150"
                        }
                    />{" "}
                    <Image
                        src={AvatarIcon5}
                        alt={"Avatar Icon"}
                        width={40}
                        className={
                            "img5 absolute left-[39.5%] top-[66%] hidden lg:block z-50] translate-x-[650px] -translate-y-[910px] scale-125"
                        }
                    />{" "}
                    <Image
                        src={AvatarIcon6}
                        alt={"Avatar Icon"}
                        width={40}
                        className={
                            "img6 absolute left-[39.5%] top-[74.5%] hidden lg:block z-50] translate-x-[760px] -translate-y-[875px] scale-[1.3]"
                        }
                    />{" "}
                    <Image
                        src={AvatarIcon7}
                        alt={"Avatar Icon"}
                        width={40}
                        className={
                            "img7 absolute left-[39.5%] top-[82.7%] hidden lg:block z-50] translate-x-[670px] -translate-y-[900px] scale-95"
                        }
                    />{" "}
                    <Image
                        src={AvatarIcon8}
                        alt={"Avatar Icon"}
                        width={40}
                        className={
                            "img8 absolute left-[39.5%] top-[82.7%] hidden lg:block z-50] translate-x-[730px] -translate-y-[820px] scale-150"
                        }
                    />
                </div>
            </Container>
        </section>
    );
}

export default Hero;
