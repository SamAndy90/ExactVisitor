import { ButtonBase, Container, Title } from "@/common/ui";
import CheckIcon from "./static/checkIcon.svg";
import Image from "next/image";

function GetStarted() {
    return (
        <section className={"bg-mainBlue-500 text-white"}>
            <Container>
                <div className={"py-20 md:py-28 lg:py-36 text-center"}>
                    <Title className={"mb-12"}>
                        Get started with
                        <br />
                        Exact
                        <span className={"font-bold"}>Visitor</span>
                    </Title>
                    <ButtonBase
                        className={{
                            button: "font-bold text-sm py-4 px-6 w-full sm:w-auto sm:px-12 rounded-lg bg-white text-mainBlue-500 mb-16 hover:text-black transition-colors",
                        }}>
                        Start my 3 Months free trial
                    </ButtonBase>
                    <div
                        className={
                            "flex flex-col md:flex-row items-start md:items-center justify-between gap-x-6 gap-y-3 max-w-[270px] md:max-w-[820px] m-auto "
                        }>
                        <div className={"flex gap-1 items-center"}>
                            <Image src={CheckIcon} alt={"Check Icon"} />
                            <span>Non-binding trial period</span>
                        </div>
                        <div className={"flex gap-1 items-center"}>
                            <Image src={CheckIcon} alt={"Check Icon"} />
                            <span>Free onboarding and support</span>
                        </div>
                        <div className={"flex gap-1 items-center"}>
                            <Image src={CheckIcon} alt={"Check Icon"} />
                            <span>No credit card needed</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default GetStarted;
