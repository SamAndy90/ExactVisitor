import { Container, Title } from "@/common/ui";
import Image from "next/image";
import CompassIcon from "./static/clockIcon.svg";
import ClockIcon from "./static/clockIcon.svg";
import RatingIcon from "./static/ratingIcon.svg";
import ArrowIcon from "./static/arrowIcon.svg";

function UseCases() {
    return (
        <section>
            <Container>
                <div className={"font-inter py-11"}>
                    <Title
                        component={"h4"}
                        className={
                            "text-xl md:text-xl text-center mb-3 sm:mb-6 md:mb-8"
                        }>
                        Use cases
                    </Title>
                    <div
                        className={
                            "flex flex-col lg:flex-row justify-center gap-3 md:gap-4 lg:gap-6"
                        }>
                        <div
                            className={
                                "flex-1 flex items-center justify-between gap-7 border border-[#E5E7EB] rounded-xl pl-7 pr-6 py-4 w-full max-w-md mx-auto"
                            }>
                            <Image src={CompassIcon} alt={"Compass Icon"} />
                            <div className={"flex-1"}>
                                <h6 className={"text-[#111827] text-[15px]"}>
                                    For Founders
                                </h6>
                                <p className={"text-[#6B7280] text-sm"}>
                                    Find your winning GTM strategy
                                </p>
                            </div>
                            <Image src={ArrowIcon} alt={"Arrow Icon"} />
                        </div>
                        <div
                            className={
                                "flex-1 flex items-center justify-between gap-7 border border-[#E5E7EB] rounded-xl pl-7 pr-6 py-4 w-full max-w-md mx-auto"
                            }>
                            <Image src={ClockIcon} alt={"Compass Icon"} />
                            <div className={"flex-1"}>
                                <h6 className={"text-[#111827] text-[15px]"}>
                                    For Sales Teams
                                </h6>
                                <p className={"text-[#6B7280] text-sm"}>
                                    Get a competitive edge
                                </p>
                            </div>
                            <Image src={ArrowIcon} alt={"Arrow Icon"} />
                        </div>
                        <div
                            className={
                                "flex-1 flex items-center justify-between gap-7 border border-[#E5E7EB] rounded-xl pl-7 pr-6 py-4 w-full max-w-md mx-auto"
                            }>
                            <Image src={RatingIcon} alt={"Rating Icon"} />
                            <div className={"flex-1"}>
                                <h6 className={"text-[#111827] text-[15px]"}>
                                    For Marketing Teams
                                </h6>
                                <p className={"text-[#6B7280] text-sm"}>
                                    Convert content into pipeline
                                </p>
                            </div>
                            <Image src={ArrowIcon} alt={"Arrow Icon"} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default UseCases;
