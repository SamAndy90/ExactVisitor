import Image from "next/image";
import Link from "next/link";

import { Container } from "@/common/ui";

import FBIcon from "./static/facebookIcon.svg";
import InstaIcon from "./static/instagramIcon.svg";
import LinkedInIcon from "./static/linkedInIcon.svg";
import YouTubeIcon from "./static/youtubeIcon.svg";

function Footer() {
  return (
    <footer className={"bg-[#000212] text-[#D4D7E1]"}>
      <Container>
        <div className={"flex flex-col"}>
          <div
            className={
              "flex flex-col justify-between gap-x-4 gap-y-8 py-8 text-sm md:py-12 lg:flex-row lg:py-16 xl:pb-[76px] xl:pt-[120px]"
            }
          >
            <div
              className={
                "flex basis-1/3 flex-col gap-6 lgm:flex-row lgm:gap-x-4 md:gap-x-2 lg:flex-col"
              }
            >
              <div className={"lgm:basis-1/2 lg:basis-0"}>
                <h4 className={"text-base text-[#F5F5F5]"}>Contact</h4>
                <a
                  href={"mailto:info@exactvisitor.com"}
                  className={"transition-colors hover:text-white"}
                >
                  info@exactvisitor.com
                </a>
              </div>
              <div>
                <h4 className={"text-base text-[#F5F5F5]"}>Address</h4>
                <p className={"max-w-[210px]"}>
                  71-75 Shelton Street, London - United Kingdom
                </p>
              </div>
            </div>
            <div
              className={
                "flex flex-1 flex-col gap-x-4 gap-y-8 lgm:flex-row lgm:flex-wrap md:flex-nowrap"
              }
            >
              <div className={"lgm:basis-1/2 md:flex-1"}>
                <h4
                  className={"mb-2 whitespace-nowrap text-base text-[#F5F5F5]"}
                >
                  Demand Group
                </h4>
                <ul className={"flex flex-col gap-y-2"}>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"}>About</Link>
                  </li>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"}>Careers</Link>
                  </li>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"}>Contact</Link>
                  </li>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"} className={"whitespace-nowrap"}>
                      Contact sales
                    </Link>
                  </li>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"}>Customers</Link>
                  </li>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"} className={"whitespace-nowrap"}>
                      Referral program
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={"lgm:basis-5/12 md:flex-1"}>
                <h4 className={"mb-2 text-base text-[#F5F5F5]"}>Product</h4>
                <ul className={"flex flex-col gap-y-2"}>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"} className={"whitespace-nowrap"}>
                      All features
                    </Link>
                  </li>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"}>Integrations</Link>
                  </li>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"}>Login</Link>
                  </li>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"} className={"whitespace-nowrap"}>
                      Slack Notifications
                    </Link>
                  </li>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"}>Sign up</Link>
                  </li>
                </ul>
              </div>
              <div className={"lgm:basis-1/2 md:flex-1"}>
                <h4 className={"mb-2 text-base text-[#F5F5F5]"}>Features</h4>
                <ul className={"flex flex-col gap-y-2"}>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"} className={"whitespace-nowrap"}>
                      Slack Notifications
                    </Link>
                  </li>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"} className={"whitespace-nowrap"}>
                      Identify Companies
                    </Link>
                  </li>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"} className={"whitespace-nowrap"}>
                      Identify People
                    </Link>
                  </li>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"} className={"whitespace-nowrap"}>
                      Website Personalization
                    </Link>
                  </li>
                  <li className={"transition-colors hover:text-white"}>
                    <Link href={"#"}>Dashboard</Link>
                  </li>
                </ul>
              </div>
              <div className={"lgm:basis-5/12 md:flex-1"}>
                <div>
                  <h4 className={"mb-2 text-base text-[#F5F5F5]"}>Resources</h4>
                  <ul className={"mb-8 flex flex-col gap-y-2"}>
                    <li className={"transition-colors hover:text-white"}>
                      <Link href={"#"}>Blog</Link>
                    </li>
                    <li className={"transition-colors hover:text-white"}>
                      <Link href={"#"} className={"whitespace-nowrap"}>
                        Help center
                      </Link>
                    </li>
                    <li className={"transition-colors hover:text-white"}>
                      <Link href={"#"} className={"whitespace-nowrap"}>
                        Video guides
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className={"mb-2 text-base text-[#F5F5F5]"}>Templates</h4>
                  <ul className={"flex flex-col gap-y-2"}>
                    <li className={"transition-colors hover:text-white"}>
                      <Link href={"#"}>Playbooks</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              "flex flex-col-reverse items-center justify-between gap-4 border-t border-t-[#E0E0E0] pb-11 pt-5 text-xs md:flex-row"
            }
          >
            <div
              className={
                "flex basis-1/2 flex-col-reverse items-center justify-between gap-4 md:flex-row"
              }
            >
              <p className={"whitespace-nowrap"}>
                Copyright © 2014-2023 Demand Group
              </p>
              <div className={"flex items-center justify-end gap-2"}>
                <Link
                  href={"#"}
                  target={"_blank"}
                  className={
                    "whitespace-nowrap transition-colors hover:text-white"
                  }
                >
                  Terms of Service
                </Link>
                <span className={"w-[1px] self-stretch bg-[#D4D7E1]"}></span>
                <Link
                  href={"#"}
                  target={"_blank"}
                  className={
                    "whitespace-nowrap transition-colors hover:text-white"
                  }
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className={"flex items-center justify-end gap-5"}>
              <Link
                target={"_blank"}
                href={"#"}
                className={"transition-transform hover:-translate-y-1"}
              >
                <Image src={FBIcon} alt={"Facebook"} />
              </Link>
              <Link
                target={"_blank"}
                href={"#"}
                className={"transition-transform hover:-translate-y-1"}
              >
                <Image src={InstaIcon} alt={"Instagram"} />
              </Link>
              <Link
                target={"_blank"}
                href={"#"}
                className={"transition-transform hover:-translate-y-1"}
              >
                <Image src={LinkedInIcon} alt={"LinkedIn"} />
              </Link>
              <Link
                target={"_blank"}
                href={"#"}
                className={"transition-transform hover:-translate-y-1"}
              >
                <Image src={YouTubeIcon} alt={"YouTube"} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
