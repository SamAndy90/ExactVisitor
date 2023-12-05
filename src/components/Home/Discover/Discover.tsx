import { Container, Title } from "@/common/ui";
import Image from "next/image";
import HumanIcon from "./static/humanIcon.svg";
import GeoIcon from "./static/geoIcon.svg";
import MobileIcon from "./static/mobileIcon.svg";
import SegmentIMG from "./static/segmentImage.jpg";
import WebflowIMG from "./static/webflowImage.jpg";
import OpenAiIMG from "./static/openaiImage.jpg";

function Discover() {
    return (
        <section className={""}>
            <Container>
                <div className={"md:pt-8 lg:pt-16 py-4"}>
                    <Title
                        className={
                            "text-4xl md:text-5xl lg:text-[63px] text-center mb-5 md:mb-7 lg:mb-9"
                        }>
                        Discover the people and companies behind your website
                        traffic
                    </Title>
                    <p
                        className={
                            "text-[#707070] text-lg text-center mb-8 md:mb-11 lg:mb-14"
                        }>
                        ExactVisitor enables you to identify website visitors
                        with ease so you can turn traffic into actionable leads.
                        See which companies are researching your docs, checking
                        out your pricing page, and showing intent to buy.
                    </p>
                    <div
                        className={
                            "rounded-[20px] px-2 lg:px-4 xl:px-9 py-10 lg:py-20 bg-mainBlue-500"
                        }>
                        <div
                            className={
                                "flex flex-col lg:flex-row justify-around gap-7"
                            }>
                            <div
                                className={
                                    "flex-1 max-w-lg mx-auto w-full p-3 rounded-xl bg-white"
                                }>
                                <div className={"flex gap-5 items-center mb-4"}>
                                    <Image
                                        src={SegmentIMG}
                                        alt={"Segment company logo"}
                                        width={60}
                                    />
                                    <div>
                                        <Title
                                            component={"h4"}
                                            className={
                                                "font-bold text-xl md:text-xl"
                                            }>
                                            Segment
                                        </Title>
                                        <p className={"text-base md:text-xl"}>
                                            Software Company
                                        </p>
                                    </div>
                                </div>
                                <div className={"mb-7"}>
                                    <div
                                        className={
                                            "flex gap-1 items-center mb-1"
                                        }>
                                        <Image
                                            src={GeoIcon}
                                            alt={"GEO Icon"}
                                            width={16}
                                        />
                                        <p>San Francisco, United States</p>
                                    </div>
                                    <div className={"flex gap-1 items-center"}>
                                        <Image
                                            src={HumanIcon}
                                            alt={"Human Icon"}
                                            width={16}
                                        />
                                        <p>2 decision makers visited</p>
                                    </div>
                                </div>
                                <div className={"mb-4"}>
                                    <div className={"text-[#8A8787] mb-1"}>
                                        Top pages
                                    </div>
                                    <div
                                        className={
                                            "flex items-center justify-between gap-2 mb-1.5"
                                        }>
                                        <span
                                            className={
                                                "flex items-center gap-1"
                                            }>
                                            <Image
                                                src={MobileIcon}
                                                alt={"Mobile Icon"}
                                                width={16}
                                            />
                                            Pricing
                                        </span>
                                        <span
                                            className={
                                                "bg-[#E4E4E4] rounded-lg px-1"
                                            }>
                                            28 Sessions
                                        </span>
                                    </div>
                                    <div
                                        className={
                                            "flex items-center justify-between gap-2 mb-1.5"
                                        }>
                                        <span
                                            className={
                                                "flex items-center gap-1"
                                            }>
                                            <Image
                                                src={MobileIcon}
                                                alt={"Mobile Icon"}
                                                width={16}
                                            />
                                            Contact Sales
                                        </span>
                                        <span
                                            className={
                                                "bg-[#E4E4E4] rounded-lg px-1"
                                            }>
                                            15 Sessions
                                        </span>
                                    </div>
                                    <div
                                        className={
                                            "flex items-center justify-between gap-2"
                                        }>
                                        <span
                                            className={
                                                "flex items-center gap-1"
                                            }>
                                            <Image
                                                src={MobileIcon}
                                                alt={"Mobile Icon"}
                                                width={16}
                                            />
                                            Technical Docs
                                        </span>
                                        <span
                                            className={
                                                "bg-[#E4E4E4] rounded-lg px-1"
                                            }>
                                            8 Sessions
                                        </span>
                                    </div>
                                </div>
                                <div className={"mb-3"}>
                                    <div className={"text-[#8A8787] mb-1"}>
                                        Attribution
                                    </div>
                                    <div className={"flex items-center gap-1"}>
                                        <Image
                                            src={MobileIcon}
                                            alt={"Mobile Icon"}
                                            width={16}
                                        />
                                        Referrer: G2 Review
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    "flex-1 max-w-lg mx-auto w-full p-3 rounded-xl bg-white"
                                }>
                                <div className={"flex gap-5 items-center mb-4"}>
                                    <Image
                                        src={WebflowIMG}
                                        alt={"Segment company logo"}
                                        width={60}
                                    />
                                    <div>
                                        <Title
                                            component={"h4"}
                                            className={
                                                "font-bold text-xl md:text-xl"
                                            }>
                                            Webflow
                                        </Title>
                                        <p className={"text-base md:text-xl"}>
                                            Software Company
                                        </p>
                                    </div>
                                </div>
                                <div className={"mb-7"}>
                                    <div
                                        className={
                                            "flex gap-1 items-center mb-1"
                                        }>
                                        <Image
                                            src={GeoIcon}
                                            alt={"GEO Icon"}
                                            width={16}
                                        />
                                        <p>Tel Aviv, Israel</p>
                                    </div>
                                    <div className={"flex gap-1 items-center"}>
                                        <Image
                                            src={HumanIcon}
                                            alt={"Human Icon"}
                                            width={16}
                                        />
                                        <p>5 decision makers visited</p>
                                    </div>
                                </div>
                                <div className={"mb-4"}>
                                    <div className={"text-[#8A8787] mb-1"}>
                                        Top pages
                                    </div>
                                    <div
                                        className={
                                            "flex items-center justify-between gap-2 mb-1.5"
                                        }>
                                        <span
                                            className={
                                                "flex items-center gap-1"
                                            }>
                                            <Image
                                                src={MobileIcon}
                                                alt={"Mobile Icon"}
                                                width={16}
                                            />
                                            Pricing
                                        </span>
                                        <span
                                            className={
                                                "bg-[#E4E4E4] rounded-lg px-1"
                                            }>
                                            26 Sessions
                                        </span>
                                    </div>
                                    <div
                                        className={
                                            "flex items-center justify-between gap-2 mb-1.5"
                                        }>
                                        <span
                                            className={
                                                "flex items-center gap-1"
                                            }>
                                            <Image
                                                src={MobileIcon}
                                                alt={"Mobile Icon"}
                                                width={16}
                                            />
                                            Contact Sales
                                        </span>
                                        <span
                                            className={
                                                "bg-[#E4E4E4] rounded-lg px-1"
                                            }>
                                            14 Sessions
                                        </span>
                                    </div>
                                    <div
                                        className={
                                            "flex items-center justify-between gap-2"
                                        }>
                                        <span
                                            className={
                                                "flex items-center gap-1"
                                            }>
                                            <Image
                                                src={MobileIcon}
                                                alt={"Mobile Icon"}
                                                width={16}
                                            />
                                            Technical Docs
                                        </span>
                                        <span
                                            className={
                                                "bg-[#E4E4E4] rounded-lg px-1"
                                            }>
                                            4 Sessions
                                        </span>
                                    </div>
                                </div>
                                <div className={"mb-3"}>
                                    <div className={"text-[#8A8787] mb-1"}>
                                        Attribution
                                    </div>
                                    <div className={"flex items-center gap-1"}>
                                        <Image
                                            src={MobileIcon}
                                            alt={"Mobile Icon"}
                                            width={16}
                                        />
                                        Referrer: outbound email
                                    </div>
                                </div>
                            </div>
                            <div
                                className={
                                    "flex-1 max-w-lg mx-auto w-full p-3 rounded-xl bg-white"
                                }>
                                <div className={"flex gap-5 items-center mb-4"}>
                                    <Image
                                        src={OpenAiIMG}
                                        alt={"Segment company logo"}
                                        width={60}
                                    />
                                    <div>
                                        <Title
                                            component={"h4"}
                                            className={
                                                "font-bold text-xl md:text-xl"
                                            }>
                                            OpenAI
                                        </Title>
                                        <p className={"text-base md:text-xl"}>
                                            Software Company
                                        </p>
                                    </div>
                                </div>
                                <div className={"mb-7"}>
                                    <div
                                        className={
                                            "flex gap-1 items-center mb-1"
                                        }>
                                        <Image
                                            src={GeoIcon}
                                            alt={"GEO Icon"}
                                            width={16}
                                        />
                                        <p>San Francisco, United States</p>
                                    </div>
                                    <div className={"flex gap-1 items-center"}>
                                        <Image
                                            src={HumanIcon}
                                            alt={"Human Icon"}
                                            width={16}
                                        />
                                        <p>3 decision makers visited</p>
                                    </div>
                                </div>
                                <div className={"mb-4"}>
                                    <div className={"text-[#8A8787] mb-1"}>
                                        Top pages
                                    </div>
                                    <div
                                        className={
                                            "flex items-center justify-between gap-2 mb-1.5"
                                        }>
                                        <span
                                            className={
                                                "flex items-center gap-1"
                                            }>
                                            <Image
                                                src={MobileIcon}
                                                alt={"Mobile Icon"}
                                                width={16}
                                            />
                                            Pricing
                                        </span>
                                        <span
                                            className={
                                                "bg-[#E4E4E4] rounded-lg px-1"
                                            }>
                                            44 Sessions
                                        </span>
                                    </div>
                                    <div
                                        className={
                                            "flex items-center justify-between gap-2 mb-1.5"
                                        }>
                                        <span
                                            className={
                                                "flex items-center gap-1"
                                            }>
                                            <Image
                                                src={MobileIcon}
                                                alt={"Mobile Icon"}
                                                width={16}
                                            />
                                            Contact Sales
                                        </span>
                                        <span
                                            className={
                                                "bg-[#E4E4E4] rounded-lg px-1"
                                            }>
                                            12 Sessions
                                        </span>
                                    </div>
                                    <div
                                        className={
                                            "flex items-center justify-between gap-2"
                                        }>
                                        <span
                                            className={
                                                "flex items-center gap-1"
                                            }>
                                            <Image
                                                src={MobileIcon}
                                                alt={"Mobile Icon"}
                                                width={16}
                                            />
                                            Technical Docs
                                        </span>
                                        <span
                                            className={
                                                "bg-[#E4E4E4] rounded-lg px-1"
                                            }>
                                            6 Sessions
                                        </span>
                                    </div>
                                </div>
                                <div className={"mb-3"}>
                                    <div className={"text-[#8A8787] mb-1"}>
                                        Attribution
                                    </div>
                                    <div className={"flex items-center gap-1"}>
                                        <Image
                                            src={MobileIcon}
                                            alt={"Mobile Icon"}
                                            width={16}
                                        />
                                        Referrer: LinkedIn
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Discover;
