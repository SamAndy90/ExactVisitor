import { Container, Title } from "@/common/ui";
import Image from "next/image";
import IMG1 from "./static/img1.jpg";
import IMG2 from "./static/img2.jpg";
import IMG3 from "./static/img3.jpg";
import IMG4 from "./static/img4.jpg";
import IMG5 from "./static/img5.jpg";

function Prospects() {
    return (
        <section>
            <Container>
                <div
                    className={
                        "bg-[#140303] rounded-[20px] text-white pt-6 md:pt-10 lg:pt-20 xl:pt-[110px] overflow-hidden"
                    }>
                    <Title
                        component={"h2"}
                        className={
                            "max-w-[480px] md:text-[35px] text-2xl mb-5 text-center md:text-left mx-auto md:mx-0 px-4"
                        }>
                        Know what your prospects actually want
                    </Title>
                    <p
                        className={
                            "max-w-[565px] text-[15px] text-center md:text-left mx-auto md:mx-0 px-4 mb-3"
                        }>
                        ExactVisitor helps you explore and analyze the most
                        meaningful actions taken by your website visitors. Gain
                        a deeper understanding of user behavior so you can
                        provide relevant and genuinely helpful content that
                        resonates with your audience.
                    </p>
                    <div className="h-32 sm:h-40 md:h-44 lg:h-[240px] xl:h-[270px] flex gap-4 min-w-[700px] mx-auto">
                        <div className={"-ml-5 pt-[8%]"}>
                            <Image
                                src={IMG1}
                                alt={"Image"}
                                className={"rounded-xl"}
                            />
                        </div>
                        <div
                            className={
                                "pt-[2.5%] flex flex-col gap-6 min-w-1/4"
                            }>
                            <Image
                                src={IMG2}
                                alt={"Image"}
                                className={"rounded-xl"}
                            />
                            <Image
                                src={IMG5}
                                alt={"Image"}
                                className={"rounded-xl"}
                            />
                        </div>
                        <div className={"min-w-1/4"}>
                            <Image
                                src={IMG3}
                                alt={"Image"}
                                className={"rounded-xl"}
                            />
                        </div>
                        <div className={"-mr-1.5 pt-[9.5%]"}>
                            <Image
                                src={IMG4}
                                alt={"Image"}
                                className={"rounded-tl-lg"}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Prospects;
