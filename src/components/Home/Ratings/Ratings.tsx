import Image from "next/image";
import Link from "next/link";

import { CircleProgressBar } from "./CircleProgressBar";
import { Container, Title } from "@/common/ui";

import RatingIcon from "./static/ratingsIcon.png";

function Ratings() {
  return (
    <section className={"py-8 md:pb-16 md:pt-14"}>
      <Container>
        <div
          className={
            "rounded-[20px] border border-[#E5E5E5] px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:pb-14"
          }
        >
          <div className={"mb-12 flex items-end gap-6"}>
            <Image
              src={RatingIcon}
              alt={"Brand Icon"}
              width={55}
              className={"hidden sm:block"}
            />
            <div className={"mx-auto text-center sm:mx-0 sm:text-left"}>
              <Title
                component={"h2"}
                className={
                  "mx-auto text-center text-2xl md:mx-0 md:text-left md:text-[35px]"
                }
              >
                ExactVisitor user ratings
              </Title>
              <p className={"pl-1 text-sm text-[#686868]"}>
                Based on our{" "}
                <Link href={"#"} className={"inline text-[#3D7AFF]"}>
                  G2 ratings
                </Link>
              </p>
            </div>
          </div>
          <div
            className={
              "flex flex-col justify-between gap-x-1 gap-y-6 text-center sm:flex-row md:text-left"
            }
          >
            <div
              className={
                "flex flex-1 flex-col items-center gap-2 md:flex-row md:gap-4 lg:gap-7"
              }
            >
              <CircleProgressBar
                percentage={100}
                circleWidth={94}
                strokeWidth={3}
                text={"10"}
                textColor={"text-[#FF5252]"}
                color={"stroke-[#FF5252]"}
              />
              <div>
                <p className={"text-[22px] text-[#404040]"}>Ease of use</p>
                <p className={"text-sm text-[#686868]"}>Average: 10</p>
              </div>
            </div>
            <div
              className={
                "flex flex-1 flex-col items-center gap-2 md:flex-row md:gap-4 lg:gap-7"
              }
            >
              <CircleProgressBar
                percentage={98}
                circleWidth={94}
                strokeWidth={3}
                text={"9.8"}
                textColor={"text-[#4D3BF6]"}
                color={"stroke-[#4D3BF6]"}
              />
              <div>
                <p className={"text-[22px] text-[#404040]"}>
                  Quality of support
                </p>
                <p className={"text-sm text-[#686868]"}>Average: 9.8</p>
              </div>
            </div>
            <div
              className={
                "flex flex-1 flex-col items-center gap-2 md:flex-row md:gap-4 lg:gap-7"
              }
            >
              <CircleProgressBar
                percentage={97}
                circleWidth={94}
                strokeWidth={3}
                text={"9.7"}
                textColor={"text-[#3AC5CF]"}
                color={"stroke-[#3AC5CF]"}
              />
              <div>
                <p className={"text-[22px] text-[#404040]"}>Ease of setup</p>
                <p className={"text-sm text-[#686868]"}>Average: 9.7</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Ratings;
