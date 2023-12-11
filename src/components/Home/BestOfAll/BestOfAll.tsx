import Image from "next/image";

import { ButtonBase, Container, Title } from "@/common/ui";

import CheckIcon from "./static/checkIconWhite.svg";

function BestOfAll() {
  return (
    <section className={"bg-black text-white"}>
      <Container>
        <div className={"py-16 text-center md:py-20 lg:pt-24"}>
          <Title component={"h3"} className={"mb-8 md:text-[55px]"}>
            Best of all it is free for 3 Months!
          </Title>
          <div
            className={
              "md:16 m-auto mb-12 flex max-w-[180px] flex-col items-start justify-between gap-x-6 gap-y-3 md:max-w-[585px] md:flex-row md:items-center lg:mb-[74px]"
            }
          >
            <div className={"flex items-center gap-1"}>
              <Image src={CheckIcon} alt={"Check Icon"} />
              <span>No binding period</span>
            </div>
            <div className={"flex items-center gap-1"}>
              <Image src={CheckIcon} alt={"Check Icon"} />
              <span>3 months for free</span>
            </div>
            <div className={"flex items-center gap-1"}>
              <Image src={CheckIcon} alt={"Check Icon"} />
              <span>No card needed</span>
            </div>
          </div>
          <ButtonBase
            className={{
              button:
                "w-full rounded-lg bg-mainBlue-500 px-6 py-4 text-sm font-bold text-white transition-colors duration-300 hover:text-black sm:w-auto sm:px-12",
            }}
          >
            Start my 3 Months free trial
          </ButtonBase>
        </div>{" "}
      </Container>
    </section>
  );
}

export default BestOfAll;
