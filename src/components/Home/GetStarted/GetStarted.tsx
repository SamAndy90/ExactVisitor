import Image from "next/image";
import Link from "next/link";

import { ButtonBase, Container, Title } from "@/common/ui";

import CheckIcon from "./static/checkIcon.svg";

function GetStarted() {
  return (
    <section className={"bg-mainBlue-500 text-white"}>
      <Container>
        <div className={"py-20 text-center md:py-28 lg:py-36"}>
          <Title className={"mb-12"}>
            Get started with
            <br />
            Exact
            <span className={"font-bold"}>Visitor</span>
          </Title>
          <ButtonBase
            className={{
              button:
                "mb-16 w-full rounded-lg bg-white px-6 py-4 text-sm font-bold text-mainBlue-500 transition-colors hover:text-black sm:w-auto sm:px-12",
            }}
          >
            <Link href={"#"}>Start my 3 Months free trial</Link>
          </ButtonBase>
          <div
            className={
              "m-auto flex max-w-[270px] flex-col items-start justify-between gap-x-6 gap-y-3 md:max-w-[820px] md:flex-row md:items-center "
            }
          >
            <div className={"flex items-center gap-1"}>
              <Image src={CheckIcon} alt={"Check Icon"} />
              <span>Non-binding trial period</span>
            </div>
            <div className={"flex items-center gap-1"}>
              <Image src={CheckIcon} alt={"Check Icon"} />
              <span>Free onboarding and support</span>
            </div>
            <div className={"flex items-center gap-1"}>
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
