import { Container, Title } from "@/common/ui";
import Image from "next/image";
import Logo1 from "./static/logo1.jpg";
import Logo2 from "./static/logo2.jpg";
import Logo3 from "./static/logo3.jpg";
import Logo4 from "./static/logo4.jpg";
import Logo5 from "./static/logo5.jpg";
import Logo6 from "./static/logo6.jpg";
import Logo7 from "./static/logo7.jpg";
import Avatar1 from "./static/avatar1.png";
import Avatar2 from "./static/avatar2.png";
import Avatar3 from "./static/avatar3.png";
import Avatar4 from "./static/avatar4.png";

function Proposal() {
    return (
        <section>
            <Container>
                <div
                    className={
                        "flex flex-col md:flex-row pb-8 md:pb-16 lg:pb-28 pt-4"
                    }>
                    <div className={"flex-1 md:py-11 pt-4 pb-11 px-4"}>
                        <Title
                            component={"h4"}
                            className={
                                "max-w-[370px] md:text-[34px] text-2xl mb-5 text-center md:text-left mx-auto md:mx-0"
                            }>
                            Turn your website visitors into pipeline
                        </Title>
                        <p
                            className={
                                "max-w-[490px] mb-10 text-[#707070] text-center md:text-left mx-auto md:mx-0"
                            }>
                            80% of your visitors are not in your CRM yet! You
                            can increase your pipeline by 35%. Most importantly
                            your team saves 13 hours a month doing research on
                            accounts and visitors and uncover hidden
                            opportunities.
                        </p>
                        <div
                            className={
                                "flex mx-auto md:mx-0 justify-center md:justify-start max-w-[537px]"
                            }>
                            <div
                                className={
                                    "overflow-hidden w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] rounded-full bg-[rgba(23,215,145,.4)] border-2 sm:border-4 md:border-6 lg:border-8 border-white flex items-center"
                                }>
                                <Image
                                    src={Avatar1}
                                    alt={"Avatar Image"}
                                    className={"mx-auto w-[70%]"}
                                />
                            </div>
                            <div
                                className={
                                    "overflow-hidden w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] rounded-full bg-[rgba(255,82,82,.4)] border-2 sm:border-4 md:border-6 lg:border-8 border-white -ml-4 md:-ml-6 lg:-ml-9 flex items-center"
                                }>
                                <Image
                                    src={Avatar2}
                                    alt={"Avatar Image"}
                                    className={"mx-auto w-[70%]"}
                                />
                            </div>
                            <div
                                className={
                                    "overflow-hidden w-[80px] h-[80px] sm:w-[130px] sm:h-[130px]  md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] rounded-full bg-[rgba(23,215,145,.4)] border-2 sm:border-4 md:border-6 lg:border-8 border-white flex items-center -ml-4 md:-ml-6 lg:-ml-9"
                                }>
                                <Image
                                    src={Avatar3}
                                    alt={"Avatar Image"}
                                    className={"mx-auto w-[70%]"}
                                />
                            </div>
                            <div
                                className={
                                    "overflow-hidden w-[80px] h-[80px] sm:w-[130px] sm:h-[130px]  md:w-[110px] md:h-[110px] lg:w-[150px] lg:h-[150px] rounded-full bg-[rgba(255,171,0,.4)] border-2 sm:border-4 md:border-6 lg:border-8 border-white flex items-center -ml-4 md:-ml-6 lg:-ml-9"
                                }>
                                <Image
                                    src={Avatar4}
                                    alt={"Avatar Image"}
                                    className={"mx-auto w-[70%]"}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            "bg-[#1C1C1C] rounded-[20px] py-11 px-4 flex-1 text-white"
                        }>
                        <Title
                            component={"h4"}
                            className={
                                "md:text-[34px] text-2xl mb-5 text-center md:text-left mx-auto md:mx-0"
                            }>
                            Integrate your tools and automate visitor
                            identification.
                        </Title>
                        <p
                            className={
                                "max-w-[450px] mb-7 text-center md:text-left mx-auto md:mx-0"
                            }>
                            We are natively integrated with most CRMs and
                            Marketing Automation platforms + Slack for instant
                            notifications and Zapier.
                        </p>
                        <div
                            className={
                                "relative mx-auto w-[260px] h-[272px] flex justify-between before:absolute before:border before:border-white before:rounded-full before:w-[250px] before:h-[250px] before:top-[11px] before:left-1 before:z-0 after:absolute after:border after:border-white after:rounded-full after:w-[190px] after:h-[190px] after:top-[41px] after:left-[35px] after:z-0 mb-6"
                            }>
                            <div
                                className={"flex flex-col justify-evenly z-10"}>
                                <Image
                                    className={"rounded-xl"}
                                    src={Logo2}
                                    alt={"Logo Icon"}
                                    width={65}
                                />
                                <Image
                                    className={"rounded-xl"}
                                    src={Logo5}
                                    alt={"Logo Icon"}
                                    width={65}
                                />
                            </div>
                            <div
                                className={
                                    "flex flex-col justify-between z-10"
                                }>
                                <Image
                                    className={"rounded-xl"}
                                    src={Logo1}
                                    alt={"Logo Icon"}
                                    width={65}
                                />

                                <Image
                                    className={"rounded-xl"}
                                    src={Logo4}
                                    alt={"Logo Icon"}
                                    width={65}
                                />

                                <Image
                                    className={"rounded-xl"}
                                    src={Logo7}
                                    alt={"Logo Icon"}
                                    width={65}
                                />
                            </div>
                            <div
                                className={"flex flex-col justify-evenly z-10"}>
                                <Image
                                    className={"rounded-xl"}
                                    src={Logo3}
                                    alt={"Logo Icon"}
                                    width={65}
                                />
                                <Image
                                    className={"rounded-xl"}
                                    src={Logo6}
                                    alt={"Logo Icon"}
                                    width={65}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Proposal;
