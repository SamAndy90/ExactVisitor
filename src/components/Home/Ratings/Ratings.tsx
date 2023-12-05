"use client";

import { Container, Title } from "@/common/ui";
import Image from "next/image";
import RatingIcon from "./static/ratingsIcon.png";
import Link from "next/link";
import CircleProgressBar from "./CircleProgressBar";
import { useEffect, useState, useRef } from "react";

function Ratings() {
    const [rateValues, setRateValues] = useState([100, 98, 97]);
    const [stopCode, setStopCode] = useState(false);
    // function calcPerc() {

    //     if (rate1 < 100) {
    //         setRate1((rate1) => rate1 + 1);
    //         console.log(rate1);
    //     }
    // }
    // let interval2 = setInterval(() => {

    //     if (rate2 < 98) {
    //         setRate2((rate2) => rate2 + 1);
    //     } else {
    //         console.log(interval2);

    //         clearInterval(interval2);
    //     }
    // }, 200);
    // let interval3 = setInterval(() => {
    //     if (rate3 < 97) {
    //         setRate3((rate3) => rate3 + 1);
    //     } else {
    //         clearInterval(interval3);
    //     }
    // }, 100);

    const prog1 = useRef(null);
    const prog2 = useRef(null);
    const prog3 = useRef(null);
    const section = useRef(null);

    // window.addEventListener("scroll", circles);

    function activateCircles() {
        const circlesSectionOffset =
            document.getElementById("circlesSection")?.offsetTop || 6153;
        const circles = [prog1.current, prog2.current, prog3.current];

        if (window.scrollY > circlesSectionOffset - 600 && stopCode === false) {
            for (let i = 0; i < circles.length; i++) {
                let radius =
                    circles[i] !== null ? circles[i].r.baseVal.value : 45;
                const dashArray = radius * Math.PI * 2;
                circles[i].style.strokeDasharray = dashArray;
                const setProgress = (percent: number) => {
                    circles[i].style.strokeDashoffset =
                        dashArray - (dashArray * percent) / 100;
                };
                setProgress(rateValues[i]);
            }
            console.log("Again");
            setStopCode((stopCode) => (stopCode = !stopCode));
            console.log(stopCode);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", activateCircles);
        setStopCode(true);
        console.log(stopCode);
    }, []);
    return (
        <section className={"py-8 md:pt-14 md:pb-16"}>
            <Container>
                <div
                    className={
                        "border rounded-[20px] border-[#E5E5E5] py-10 sm:py-12 lg:pb-14 px-4 sm:px-6 lg:px-12"
                    }>
                    <div className={"flex gap-6 items-end mb-12"}>
                        <Image
                            src={RatingIcon}
                            alt={"Brand Icon"}
                            width={55}
                            className={"hidden sm:block"}
                        />
                        <div
                            className={
                                "text-center sm:text-left mx-auto sm:mx-0"
                            }>
                            <Title
                                component={"h2"}
                                className={
                                    "md:text-[35px] text-2xl text-center md:text-left mx-auto md:mx-0"
                                }>
                                ExactVisitor user ratings
                            </Title>
                            <p className={"text-[#686868] text-sm pl-1"}>
                                Based on our{" "}
                                <Link
                                    href={"#"}
                                    className={"text-[#3D7AFF] inline"}>
                                    G2 ratings
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div
                        className={
                            "flex flex-col sm:flex-row gap-y-6 gap-x-1 justify-between text-center md:text-left"
                        }
                        ref={section}
                        id="circlesSection">
                        <div
                            className={
                                "flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-7 items-center flex-1"
                            }>
                            <div className={"relative"}>
                                <CircleProgressBar
                                    ref={prog1}
                                    circleWidth={94}
                                    strokeWidth={3}
                                    percentage={rateValues[0]}
                                    color={"stroke-rate1-500"}
                                />
                                <span
                                    className={
                                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25px] text-rate1-500"
                                    }>
                                    10
                                </span>
                            </div>
                            <div>
                                <p className={"text-[22px] text-[#404040]"}>
                                    Ease of use
                                </p>
                                <p className={"text-[#686868] text-sm"}>
                                    Average: 10
                                </p>
                            </div>
                        </div>
                        <div
                            className={
                                "flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-7 items-center flex-1"
                            }>
                            <div className={"relative"}>
                                <CircleProgressBar
                                    ref={prog2}
                                    circleWidth={94}
                                    strokeWidth={3}
                                    percentage={rateValues[1]}
                                    color={"stroke-rate2-500"}
                                />
                                <span
                                    className={
                                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25px] text-rate2-500"
                                    }>
                                    9.8
                                </span>
                            </div>
                            <div>
                                <p className={"text-[22px] text-[#404040]"}>
                                    Quality of support
                                </p>
                                <p className={"text-[#686868] text-sm"}>
                                    Average: 9.8
                                </p>
                            </div>
                        </div>
                        <div
                            className={
                                "flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-7 items-center flex-1"
                            }>
                            <div className={"relative"}>
                                <CircleProgressBar
                                    ref={prog3}
                                    circleWidth={94}
                                    strokeWidth={3}
                                    percentage={rateValues[2]}
                                    color={"stroke-rate3-500"}
                                />
                                <span
                                    className={
                                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25px] text-rate3-500"
                                    }>
                                    9.7
                                </span>
                            </div>
                            <div>
                                <p className={"text-[22px] text-[#404040]"}>
                                    Ease of setup
                                </p>
                                <p className={"text-[#686868] text-sm"}>
                                    Average: 9.7
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Ratings;
