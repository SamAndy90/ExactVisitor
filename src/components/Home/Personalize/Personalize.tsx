import { Container, Title } from "@/common/ui";
import Image from "next/image";
import PersonalizeIMG from "./static/personalizeImage.jpg";

function Personalize() {
    return (
        <section>
            <Container>
                <div className={"text-center pt-6 pb-10 md:pb-16"}>
                    <Title
                        className={
                            "max-w-[600px] md:max-w-[820px] mx-auto mb-4 md:mb-9"
                        }>
                        Personalize your website to your visitor
                    </Title>
                    <p className={"mb-6 md:mb-14 md:text-lg text-[#707070]"}>
                        No coding editor to run experiments and personalize the
                        website to the visitor, it is instant and easy. Show
                        pricing to small companies, vs asking for a demo to
                        enterprise. Show integrations to the visitor that they
                        use not all they don’t need and so much more.
                    </p>
                    <div
                        className={
                            "rounded-[20px] px-2 py-4 md:px-4 md:py-8 bg-mainBlue-500"
                        }>
                        <div
                            className={
                                "mx-auto max-w-[890px] rounded-xl overflow-hidden"
                            }>
                            <Image
                                src={PersonalizeIMG}
                                alt={"Personalize Image"}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Personalize;
