import { Container, Title } from "@/common/ui";
import Image from "next/image";
import HumanIcon from "./static/humanIcon.svg";
import HubspotIcon from "./static/hubspotIcon.svg";
import RateIcon from "./static/rateIcon.svg";
import SegmentLogo from "./static/segmentLogo.svg";
import VirginLogo from "./static/virginLogo.svg";
import TeslaLogo from "./static/teslaLogo.svg";
import WebflowLogo from "./static/webflowLogo.svg";
import SeizeIcon from "./static/seizeIcon.png";
import SeizeImage from "./static/seizeReview.png";

function Strategic() {
    return (
        <section>
            <Container>
                <div className={"flex flex-col md:flex-row py-3"}>
                    <div
                        className={
                            "flex-1 py-4 md:py-6 lg:py-11 md:px-4 lg:px-10"
                        }>
                        <Title
                            component={"h4"}
                            className={
                                "max-w-[520px] md:text-[34px] text-2xl mb-5 text-center md:text-left mx-auto md:mx-0"
                            }>
                            Build strategic{" "}
                            <span className={"text-mainBlue-500"}>
                                account lists
                            </span>{" "}
                            you can act on, in real-time
                        </Title>
                        <p
                            className={
                                "max-w-[463px] mb-6 lg:mb-10 text-[#707070] text-center md:text-left mx-auto md:mx-0"
                            }>
                            Effortlessly segment leads by company attributes and
                            people tracking you can count on! Reveal the real
                            visitors and engage in closing more deals.
                        </p>
                        <div
                            className={
                                "mx-auto max-w-[351px] pb-4 md:pb-0 lg:pb-8"
                            }>
                            <div
                                className={
                                    "mb-1.5 flex gap-y-1.5 gap-x-3 flex-wrap"
                                }>
                                <span
                                    className={
                                        "border border-[#F6F6F6] rounded-lg py-2 px-1.5 inline-block"
                                    }>
                                    <Image
                                        src={HubspotIcon}
                                        alt={"Hubspot Icon"}
                                        className={"inline mr-[2px]"}
                                    />
                                    <span
                                        className={
                                            "border border-[#DEDEDE] rounded-[4px] px-[2px] mr-[2px]"
                                        }>
                                        is
                                    </span>
                                    installed
                                </span>
                                <span
                                    className={
                                        "border border-[#F6F6F6] rounded-lg py-2 px-1.5 inline-block"
                                    }>
                                    <span
                                        className={
                                            "w-3 h-3 rounded-full bg-mainBlue-500 mr-1.5 inline-block"
                                        }></span>
                                    intent
                                    <span
                                        className={
                                            "border border-[#DEDEDE] rounded-[4px] px-[2px] mx-[2px]"
                                        }>
                                        is
                                    </span>
                                    high
                                </span>
                            </div>
                            <div className={"mb-6"}>
                                <span
                                    className={
                                        "border border-[#F6F6F6] rounded-lg py-2 px-1.5 inline-block"
                                    }>
                                    <Image
                                        src={HumanIcon}
                                        alt={"Hubspot Icon"}
                                        className={"inline mr-1.5"}
                                    />
                                    Employees
                                    <span
                                        className={
                                            "border border-[#DEDEDE] rounded-[4px] px-[2px] mx-[2px]"
                                        }>
                                        is
                                    </span>
                                    51-200
                                </span>
                            </div>
                            <div
                                className={
                                    "sm:px-2 md:px-0 lg:px-2 flex flex-col gap-2"
                                }>
                                <div
                                    className={
                                        "rounded-xl border border-[#DEDEDE] py-2 pl-2 sm:pl-4 pr-2 flex items-center justify-between gap-1 max-w-[335px]"
                                    }>
                                    <div
                                        className={
                                            "flex items center gap-2 sm:gap-3 md:gap-2 lg:gap-[14px]"
                                        }>
                                        <Image
                                            src={SegmentLogo}
                                            alt={"Segment company Logo"}
                                        />
                                        <div className={"text-[15px]"}>
                                            <h6 className={"font-bold"}>
                                                Segment
                                            </h6>
                                            <p
                                                className={
                                                    "text-[#9E9898] leading-none"
                                                }>
                                                segment.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className={"flex items-end"}>
                                        <Image
                                            src={RateIcon}
                                            alt={"Rate Icon"}
                                        />
                                        <span
                                            className={
                                                "text-[#00CD5E] text-[11px] font-bold leading-none ml-1 whitespace-nowrap"
                                            }>
                                            Very high intent
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={
                                        "rounded-xl border border-[#DEDEDE] py-2 pl-2 sm:pl-4 pr-2 flex items-center justify-between max-w-[335px] gap-1"
                                    }>
                                    <div
                                        className={
                                            "flex items center gap-2 sm:gap-3 md:gap-2 lg:gap-[14px]"
                                        }>
                                        <Image
                                            src={VirginLogo}
                                            alt={"Segment company Logo"}
                                        />
                                        <div className={"text-[15px]"}>
                                            <h6 className={"font-bold"}>
                                                Segment
                                            </h6>
                                            <p
                                                className={
                                                    "text-[#9E9898] leading-none"
                                                }>
                                                virgin.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className={"flex items-end"}>
                                        <Image
                                            src={RateIcon}
                                            alt={"Rate Icon"}
                                        />
                                        <span
                                            className={
                                                "text-[#00CD5E] text-[11px] font-bold leading-none ml-1 whitespace-nowrap"
                                            }>
                                            Very high intent
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={
                                        "rounded-xl border border-[#DEDEDE] py-2 pl-2 sm:pl-4 pr-2 flex items-center justify-between max-w-[335px] gap-1"
                                    }>
                                    <div
                                        className={
                                            "flex items center gap-2 sm:gap-3 md:gap-2 lg:gap-[14px]"
                                        }>
                                        <Image
                                            src={TeslaLogo}
                                            alt={"Segment company Logo"}
                                        />
                                        <div className={"text-[15px]"}>
                                            <h6 className={"font-bold"}>
                                                Segment
                                            </h6>
                                            <p
                                                className={
                                                    "text-[#9E9898] leading-none"
                                                }>
                                                tesla.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className={"flex items-end"}>
                                        <Image
                                            src={RateIcon}
                                            alt={"Rate Icon"}
                                        />
                                        <span
                                            className={
                                                "text-[#00CD5E] text-[11px] font-bold leading-none ml-1 whitespace-nowrap"
                                            }>
                                            Very high intent
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={
                                        "rounded-xl border border-[#DEDEDE] py-2 pl-2 sm:pl-4 pr-2 flex items-center justify-between max-w-[335px] gap-1"
                                    }>
                                    <div
                                        className={
                                            "flex items center gap-2 sm:gap-3 md:gap-2 lg:gap-[14px]"
                                        }>
                                        <Image
                                            src={WebflowLogo}
                                            alt={"Segment company Logo"}
                                        />
                                        <div className={"text-[15px]"}>
                                            <h6 className={"font-bold"}>
                                                Segment
                                            </h6>
                                            <p
                                                className={
                                                    "text-[#9E9898] leading-none"
                                                }>
                                                webflow.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className={"flex items-end"}>
                                        <Image
                                            src={RateIcon}
                                            alt={"Rate Icon"}
                                        />
                                        <span
                                            className={
                                                "text-[#00CD5E] text-[11px] font-bold leading-none ml-1 whitespace-nowrap"
                                            }>
                                            Very high intent
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            "bg-[#EA648C] rounded-[20px] px-2 py-4 md:py-6 lg:py-11 md:px-4 lg:px-10 flex-1 text-white flex flex-col"
                        }>
                        <Title
                            component={"h4"}
                            className={
                                "max-w-[456px] md:text-[34px] text-2xl mb-5 text-center md:text-left mx-auto md:mx-0 relative"
                            }>
                            <span className={"text-mainBlue-500"}>
                                Seize opportunities
                            </span>{" "}
                            at the moment of intent{" "}
                            <span className={"relative w-[55px] inline-block"}>
                                {" "}
                                <Image
                                    src={SeizeIcon}
                                    alt={"Icon"}
                                    className={
                                        "absolute right-0 -bottom-4 lg:-right-2 lg:-bottom-5 sm:w-10 md:w-[55px] rotate-12 hidden sm:block md:hidden lg:block"
                                    }
                                />
                            </span>
                        </Title>
                        <p
                            className={
                                "max-w-[460px] mb-4 sm:mb-7 md:mb-0 lg:mb-7 text-center md:text-left mx-auto md:mx-0"
                            }>
                            Increase flexibility for your staff by making shift
                            swapping easy and accessible.
                        </p>
                        <div
                            className={
                                "relative h-full min-h-[250px] sm:min-h-[350px]"
                            }>
                            <Image
                                src={SeizeImage}
                                alt={"Review Image"}
                                fill
                                className={"object-contain !top-0"}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Strategic;
