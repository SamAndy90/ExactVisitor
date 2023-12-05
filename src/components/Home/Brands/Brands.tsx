import { Container, Title } from "@/common/ui";
import Image from "next/image";
import BrandsIMG from "./static/brandsImage.jpg";

function Brands() {
    return (
        <section>
            <Container>
                <div className={"py-4"}>
                    <Title
                        component={"h4"}
                        className={
                            "font-inter text-base sm:text-lg md:text-xl text-center mb-3 sm:mb-6 md:mb-9"
                        }>
                        Trusted by world-class sales teams
                    </Title>
                    <div className={"max-w-[916px] mx-auto"}>
                        <Image src={BrandsIMG} alt={"Brands Image"} />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Brands;
