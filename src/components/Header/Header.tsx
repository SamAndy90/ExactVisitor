"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ButtonBase, Container } from "@/common/ui";

import Burger from "./static/Burger";
import CrissCross from "./static/Criss-cross";
import Logo from "./static/Logo.svg";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.overflow = menuIsOpen ? "hidden" : "";
  }, [menuIsOpen]);

  return (
    <header
      className={
        "fixed z-50 w-full overflow-visible border-b border-b-[#E3E3E3] bg-white py-3"
      }
    >
      <Container className={"max-w-screen-xl+"}>
        <div className={"flex items-center justify-between"}>
          <div className={"flex basis-1/2 items-center justify-between gap-16"}>
            <Link href={"/"} className={"flex-shrink-0"}>
              <Image src={Logo} alt={"Logo"} />
            </Link>
            <nav
              className={
                "hidden items-center justify-between gap-11 text-sm text-[#222] lg:flex"
              }
            >
              <Link
                href={"#features"}
                className={"transition-colors hover:text-mainBlue-500"}
              >
                Features
              </Link>
              <Link
                href={"#customers"}
                className={"transition-colors hover:text-mainBlue-500"}
              >
                Customers
              </Link>
              <Link
                href={"#pricing"}
                className={"transition-colors hover:text-mainBlue-500"}
              >
                Pricing
              </Link>
              <Link
                href={"#integrations"}
                className={"transition-colors hover:text-mainBlue-500"}
              >
                Integrations
              </Link>
            </nav>
          </div>
          <div className={"flex items-center justify-end"}>
            <div className={"hidden items-center justify-end gap-6 lg:flex"}>
              <ButtonBase
                className={{
                  button:
                    "rounded-lg border border-[#E0E0E0] px-5 py-3 text-xs text-[#222] transition-colors hover:border-[#222] hover:text-blue-600",
                }}
              >
                Login
              </ButtonBase>
              <ButtonBase
                className={{
                  button:
                    "rounded-lg bg-mainBlue-500 px-2.5 py-3 text-xs text-white transition-colors hover:bg-blue-600",
                }}
              >
                Try Exact
                <span className={"font-bold"}>visitor</span>
              </ButtonBase>
            </div>
            <div className={"flex items-center justify-between gap-12"}>
              <div
                className={clsx(
                  "fixed bottom-0 right-0 top-0 z-[100] min-h-screen min-w-[200px] bg-white p-4 pt-14 shadow-[0_0_10px_#EFEFEF] transition-transform",
                  {
                    "translate-x-full": !menuIsOpen,
                  },
                )}
              >
                <ButtonBase
                  className={{
                    button:
                      "absolute right-3 top-4 appearance-none text-black transition-all duration-200 hover:text-blue-500 lg:hidden",
                  }}
                  title={"Close mobile menu"}
                  onClick={() => setMenuIsOpen(false)}
                >
                  <CrissCross className={"h-7 w-7"} />
                </ButtonBase>

                <nav
                  className={
                    "mb-10 flex flex-col items-start justify-between gap-8 text-lg text-[#222]"
                  }
                >
                  <Link
                    onClick={() => setMenuIsOpen(false)}
                    href={"#features"}
                    className={"transition-colors hover:text-mainBlue-500"}
                  >
                    Features
                  </Link>
                  <Link
                    onClick={() => setMenuIsOpen(false)}
                    href={"#customers"}
                    className={"transition-colors hover:text-mainBlue-500"}
                  >
                    Customers
                  </Link>
                  <Link
                    onClick={() => setMenuIsOpen(false)}
                    href={"#pricing"}
                    className={"transition-colors hover:text-mainBlue-500"}
                  >
                    Pricing
                  </Link>
                  <Link
                    onClick={() => setMenuIsOpen(false)}
                    href={"#integrations"}
                    className={"transition-colors hover:text-mainBlue-500"}
                  >
                    Integrations
                  </Link>
                </nav>
                <div className={"flex flex-col gap-3 "}>
                  <ButtonBase
                    onClick={() => setMenuIsOpen(false)}
                    className={{
                      button:
                        "rounded-lg border border-[#E0E0E0] px-5 py-3 text-xs text-[#222] transition-colors hover:border-black hover:text-blue-600",
                    }}
                  >
                    Login
                  </ButtonBase>
                  <ButtonBase
                    onClick={() => setMenuIsOpen(false)}
                    className={{
                      button:
                        "rounded-lg bg-mainBlue-500 px-5 py-3 text-xs text-white transition-colors hover:bg-blue-600",
                    }}
                  >
                    Try Exact
                    <span className={"font-bold"}>visitor</span>
                  </ButtonBase>
                </div>
              </div>

              <ButtonBase
                className={{
                  button: "block appearance-none lg:hidden",
                }}
                onClick={() => setMenuIsOpen(true)}
                title={"Open mobile menu"}
              >
                <Burger
                  className={
                    "h-8 w-8 stroke-2 text-black transition-all duration-200 hover:text-blue-500"
                  }
                />
              </ButtonBase>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
