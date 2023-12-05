import Image from "next/image";

import { Container, Title } from "@/common/ui";

import HubspotIcon from "./static/hubspotIcon.svg";
import HumanIcon from "./static/humanIcon.svg";
import RateIcon from "./static/rateIcon.svg";
import SegmentLogo from "./static/segmentLogo.svg";
import SeizeIcon from "./static/seizeIcon.png";
import SeizeImage from "./static/seizeReview.png";
import TeslaLogo from "./static/teslaLogo.svg";
import VirginLogo from "./static/virginLogo.svg";
import WebflowLogo from "./static/webflowLogo.svg";

function Strategic() {
  return (
    <section>
      <Container>
        <div className={"flex flex-col py-3 md:flex-row"}>
          <div className={"flex-1 py-4 md:px-4 md:py-6 lg:px-10 lg:py-11"}>
            <Title
              component={"h4"}
              className={
                "mx-auto mb-5 max-w-[520px] text-center text-2xl md:mx-0 md:text-left md:text-[34px]"
              }
            >
              Build strategic{" "}
              <span className={"text-mainBlue-500"}>account lists</span> you can
              act on, in real-time
            </Title>
            <p
              className={
                "mx-auto mb-6 max-w-[463px] text-center text-[#707070] md:mx-0 md:text-left lg:mb-10"
              }
            >
              Effortlessly segment leads by company attributes and people
              tracking you can count on! Reveal the real visitors and engage in
              closing more deals.
            </p>
            <div className={"mx-auto max-w-[351px] pb-4 md:pb-0 lg:pb-8"}>
              <div className={"mb-1.5 flex flex-wrap gap-x-3 gap-y-1.5"}>
                <span
                  className={
                    "inline-block rounded-lg border border-[#F6F6F6] px-1.5 py-2"
                  }
                >
                  <Image
                    src={HubspotIcon}
                    alt={"Hubspot Icon"}
                    className={"mr-[2px] inline"}
                  />
                  <span
                    className={
                      "mr-[2px] rounded-[4px] border border-[#DEDEDE] px-[2px]"
                    }
                  >
                    is
                  </span>
                  installed
                </span>
                <span
                  className={
                    "inline-block rounded-lg border border-[#F6F6F6] px-1.5 py-2"
                  }
                >
                  <span
                    className={
                      "mr-1.5 inline-block h-3 w-3 rounded-full bg-mainBlue-500"
                    }
                  ></span>
                  intent
                  <span
                    className={
                      "mx-[2px] rounded-[4px] border border-[#DEDEDE] px-[2px]"
                    }
                  >
                    is
                  </span>
                  high
                </span>
              </div>
              <div className={"mb-6"}>
                <span
                  className={
                    "inline-block rounded-lg border border-[#F6F6F6] px-1.5 py-2"
                  }
                >
                  <Image
                    src={HumanIcon}
                    alt={"Hubspot Icon"}
                    className={"mr-1.5 inline"}
                  />
                  Employees
                  <span
                    className={
                      "mx-[2px] rounded-[4px] border border-[#DEDEDE] px-[2px]"
                    }
                  >
                    is
                  </span>
                  51-200
                </span>
              </div>
              <div className={"flex flex-col gap-2 sm:px-2 md:px-0 lg:px-2"}>
                <div
                  className={
                    "flex max-w-[335px] items-center justify-between gap-1 rounded-xl border border-[#DEDEDE] py-2 pl-2 pr-2 sm:pl-4"
                  }
                >
                  <div
                    className={
                      "items center flex gap-2 sm:gap-3 md:gap-2 lg:gap-[14px]"
                    }
                  >
                    <Image src={SegmentLogo} alt={"Segment company Logo"} />
                    <div className={"text-[15px]"}>
                      <h6 className={"font-bold"}>Segment</h6>
                      <p className={"leading-none text-[#9E9898]"}>
                        segment.com
                      </p>
                    </div>
                  </div>
                  <div className={"flex items-end"}>
                    <Image src={RateIcon} alt={"Rate Icon"} />
                    <span
                      className={
                        "ml-1 whitespace-nowrap text-[11px] font-bold leading-none text-[#00CD5E]"
                      }
                    >
                      Very high intent
                    </span>
                  </div>
                </div>
                <div
                  className={
                    "flex max-w-[335px] items-center justify-between gap-1 rounded-xl border border-[#DEDEDE] py-2 pl-2 pr-2 sm:pl-4"
                  }
                >
                  <div
                    className={
                      "items center flex gap-2 sm:gap-3 md:gap-2 lg:gap-[14px]"
                    }
                  >
                    <Image src={VirginLogo} alt={"Segment company Logo"} />
                    <div className={"text-[15px]"}>
                      <h6 className={"font-bold"}>Virgin</h6>
                      <p className={"leading-none text-[#9E9898]"}>
                        virgin.com
                      </p>
                    </div>
                  </div>
                  <div className={"flex items-end"}>
                    <Image src={RateIcon} alt={"Rate Icon"} />
                    <span
                      className={
                        "ml-1 whitespace-nowrap text-[11px] font-bold leading-none text-[#00CD5E]"
                      }
                    >
                      Very high intent
                    </span>
                  </div>
                </div>
                <div
                  className={
                    "flex max-w-[335px] items-center justify-between gap-1 rounded-xl border border-[#DEDEDE] py-2 pl-2 pr-2 sm:pl-4"
                  }
                >
                  <div
                    className={
                      "items center flex gap-2 sm:gap-3 md:gap-2 lg:gap-[14px]"
                    }
                  >
                    <Image src={TeslaLogo} alt={"Segment company Logo"} />
                    <div className={"text-[15px]"}>
                      <h6 className={"font-bold"}>Tesla</h6>
                      <p className={"leading-none text-[#9E9898]"}>tesla.com</p>
                    </div>
                  </div>
                  <div className={"flex items-end"}>
                    <Image src={RateIcon} alt={"Rate Icon"} />
                    <span
                      className={
                        "ml-1 whitespace-nowrap text-[11px] font-bold leading-none text-[#00CD5E]"
                      }
                    >
                      Very high intent
                    </span>
                  </div>
                </div>
                <div
                  className={
                    "flex max-w-[335px] items-center justify-between gap-1 rounded-xl border border-[#DEDEDE] py-2 pl-2 pr-2 sm:pl-4"
                  }
                >
                  <div
                    className={
                      "items center flex gap-2 sm:gap-3 md:gap-2 lg:gap-[14px]"
                    }
                  >
                    <Image src={WebflowLogo} alt={"Segment company Logo"} />
                    <div className={"text-[15px]"}>
                      <h6 className={"font-bold"}>Webflow</h6>
                      <p className={"leading-none text-[#9E9898]"}>
                        webflow.com
                      </p>
                    </div>
                  </div>
                  <div className={"flex items-end"}>
                    <Image src={RateIcon} alt={"Rate Icon"} />
                    <span
                      className={
                        "ml-1 whitespace-nowrap text-[11px] font-bold leading-none text-[#00CD5E]"
                      }
                    >
                      Very high intent
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              "flex flex-1 flex-col rounded-[20px] bg-[#EA648C] px-2 py-4 text-white md:px-4 md:py-6 lg:px-10 lg:py-11"
            }
          >
            <Title
              component={"h4"}
              className={
                "relative mx-auto mb-5 max-w-[456px] text-center text-2xl md:mx-0 md:text-left md:text-[34px]"
              }
            >
              <span className={"text-mainBlue-500"}>Seize opportunities</span>{" "}
              at the moment of intent{" "}
              <span className={"relative inline-block w-[55px]"}>
                {" "}
                <Image
                  src={SeizeIcon}
                  alt={"Icon"}
                  className={
                    "absolute -bottom-4 right-0 hidden rotate-12 sm:block sm:w-10 md:hidden md:w-[55px] lg:-bottom-5 lg:-right-2 lg:block"
                  }
                />
              </span>
            </Title>
            <p
              className={
                "mx-auto mb-4 max-w-[460px] text-center sm:mb-7 md:mx-0 md:mb-0 md:text-left lg:mb-7"
              }
            >
              Increase flexibility for your staff by making shift swapping easy
              and accessible.
            </p>
            <div className={"relative h-full min-h-[250px] sm:min-h-[350px]"}>
              <Image
                src={SeizeImage}
                alt={"Review Image"}
                fill
                className={"!top-0 object-contain"}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Strategic;
