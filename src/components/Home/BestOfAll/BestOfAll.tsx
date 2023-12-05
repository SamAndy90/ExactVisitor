import { ButtonBase, Container, Title } from "@/common/ui";
import Image from "next/image";
import CheckIcon from "./static/checkIconWhite.svg";

function BestOfAll() {
    return (
        <section className={"bg-black text-white"}>
            <Container>
                <div className={"py-16 md:py-20 lg:pt-24 text-center"}>
                    <Title component={"h3"} className="mb-8 md:text-[55px]">
                        Best of all it is free for 3 Months!
                    </Title>
                    <div
                        className={
                            "flex flex-col md:flex-row items-start md:items-center justify-between gap-x-6 gap-y-3 max-w-[180px] md:max-w-[585px] m-auto mb-12 md:16 lg:mb-[74px]"
                        }>
                        <div className={"flex gap-1 items-center"}>
                            <Image src={CheckIcon} alt={"Check Icon"} />
                            <span>No binding period</span>
                        </div>
                        <div className={"flex gap-1 items-center"}>
                            <Image src={CheckIcon} alt={"Check Icon"} />
                            <span>3 months for free</span>
                        </div>
                        <div className={"flex gap-1 items-center"}>
                            <Image src={CheckIcon} alt={"Check Icon"} />
                            <span>No card needed</span>
                        </div>
                    </div>
                    <ButtonBase
                        className={{
                            button: "font-bold text-sm py-4 px-6 w-full sm:w-auto sm:px-12 rounded-lg bg-mainBlue-500 text-white hover:text-black transition-colors",
                        }}>
                        Start my 3 Months free trial
                    </ButtonBase>
                </div>{" "}
            </Container>
        </section>
    );
}

export default BestOfAll;
