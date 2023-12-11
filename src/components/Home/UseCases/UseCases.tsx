import Image from "next/image";
import Link from "next/link";

import { Container, Title } from "@/common/ui";

import ArrowIcon from "./static/arrowIcon.svg";
import ClockIcon from "./static/clockIcon.svg";
import CompassIcon from "./static/compassIcon.svg";
import RatingIcon from "./static/ratingIcon.svg";

function UseCases() {
  return (
    <section>
      <Container>
        <div className={"py-11 font-inter"}>
          <Title
            component={"h4"}
            className={"mb-3 text-center text-xl sm:mb-6 md:mb-8 md:text-xl"}
          >
            Use cases
          </Title>
          <div
            className={
              "flex flex-col justify-center gap-3 md:gap-4 lg:flex-row lg:gap-6"
            }
          >
            <Link
              href={"#"}
              className={
                "mx-auto flex w-full max-w-md flex-1 items-center justify-between gap-7 rounded-xl border border-[#E5E7EB] py-4 pl-7 pr-6 transition-shadow hover:shadow-md"
              }
            >
              <Image src={CompassIcon} alt={"Compass Icon"} />
              <div className={"flex-1"}>
                <h6 className={"text-[15px] text-[#111827]"}>For Founders</h6>
                <p className={"text-sm text-[#6B7280]"}>
                  Find your winning GTM strategy
                </p>
              </div>
              <Image src={ArrowIcon} alt={"Arrow Icon"} />
            </Link>
            <Link
              href={"#"}
              className={
                "mx-auto flex w-full max-w-md flex-1 items-center justify-between gap-7 rounded-xl border border-[#E5E7EB] py-4 pl-7 pr-6 transition-shadow hover:shadow-md"
              }
            >
              <Image src={ClockIcon} alt={"Compass Icon"} />
              <div className={"flex-1"}>
                <h6 className={"text-[15px] text-[#111827]"}>
                  For Sales Teams
                </h6>
                <p className={"text-sm text-[#6B7280]"}>
                  Get a competitive edge
                </p>
              </div>
              <Image src={ArrowIcon} alt={"Arrow Icon"} />
            </Link>
            <Link
              href={"#"}
              className={
                "mx-auto flex w-full max-w-md flex-1 items-center justify-between gap-7 rounded-xl border border-[#E5E7EB] py-4 pl-7 pr-6 transition-shadow hover:shadow-md"
              }
            >
              <Image src={RatingIcon} alt={"Rating Icon"} />
              <div className={"flex-1"}>
                <h6 className={"text-[15px] text-[#111827]"}>
                  For Marketing Teams
                </h6>
                <p className={"text-sm text-[#6B7280]"}>
                  Convert content into pipeline
                </p>
              </div>
              <Image src={ArrowIcon} alt={"Arrow Icon"} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default UseCases;
