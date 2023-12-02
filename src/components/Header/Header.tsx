"use client";

import Burger from "./static/Burger";
import CrissCross from "./static/Criss-cross";
import Logo from "./static/Logo.svg";
import { ButtonBase, Container } from "@/common/ui";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
                "fixed z-50 w-full overflow-visible py-3 bg-white border-b border-b-[#E3E3E3]"
            }>
            <Container className="max-w-screen-xl+">
                <div className={"flex items-center justify-between"}>
                    <div
                        className={
                            "flex items-center justify-between basis-1/2 gap-16"
                        }>
                        <Link href={"/"} className={"flex-shrink-0"}>
                            <Image src={Logo} alt={"Logo"} />
                        </Link>
                        <nav
                            className={
                                "hidden lg:flex items-center justify-between gap-11 text-sm text-[#222]"
                            }>
                            <Link
                                href={"#features"}
                                className={
                                    "hover:text-mainBlue-500 transition-colors"
                                }>
                                Features
                            </Link>
                            <Link
                                href={"#customers"}
                                className={
                                    "hover:text-mainBlue-500 transition-colors"
                                }>
                                Customers
                            </Link>
                            <Link
                                href={"#pricing"}
                                className={
                                    "hover:text-mainBlue-500 transition-colors"
                                }>
                                Pricing
                            </Link>
                            <Link
                                href={"#integrations"}
                                className={
                                    "hover:text-mainBlue-500 transition-colors"
                                }>
                                Integrations
                            </Link>
                        </nav>
                    </div>
                    <div className={"flex items-center justify-end"}>
                        <div className="hidden lg:flex items-center justify-end gap-6">
                            <ButtonBase
                                className={{
                                    button: "text-xs text-[#222] py-3 px-5 border border-[#E0E0E0] rounded-lg hover:text-blue-600 transition-colors hover:border-[#222]",
                                }}>
                                Login
                            </ButtonBase>
                            <ButtonBase
                                className={{
                                    button: "text-xs text-white py-3 px-5 bg-mainBlue-500 rounded-lg hover:bg-blue-600 transition-colors",
                                }}>
                                Try Exact
                                <span className={"font-bold"}>visitor</span>
                            </ButtonBase>
                        </div>
                        <div
                            className={
                                "flex items-center justify-between gap-12"
                            }>
                            <div
                                className={clsx(
                                    "fixed bottom-0 right-0 top-0 z-[100] min-h-screen min-w-[200px] bg-white p-4 pt-14 shadow-[0_0_10px_#EFEFEF] transition-transform",
                                    {
                                        "translate-x-full": !menuIsOpen,
                                    }
                                )}>
                                <ButtonBase
                                    className={{
                                        button: "absolute right-3 top-4 appearance-none text-black transition-all duration-200 hover:text-blue-500 lg:hidden",
                                    }}
                                    title={"Close mobile menu"}
                                    onClick={() => setMenuIsOpen(false)}>
                                    <CrissCross className={"h-7 w-7"} />
                                </ButtonBase>

                                <nav
                                    className={
                                        "flex flex-col items-start justify-between gap-8 text-lg text-[#222] mb-10"
                                    }>
                                    <Link
                                        href={"#features"}
                                        className={
                                            "hover:text-mainBlue-500 transition-colors"
                                        }>
                                        Features
                                    </Link>
                                    <Link
                                        href={"#customers"}
                                        className={
                                            "hover:text-mainBlue-500 transition-colors"
                                        }>
                                        Customers
                                    </Link>
                                    <Link
                                        href={"#pricing"}
                                        className={
                                            "hover:text-mainBlue-500 transition-colors"
                                        }>
                                        Pricing
                                    </Link>
                                    <Link
                                        href={"#integrations"}
                                        className={
                                            "hover:text-mainBlue-500 transition-colors"
                                        }>
                                        Integrations
                                    </Link>
                                </nav>
                                <div className={"flex flex-col gap-3 "}>
                                    <ButtonBase
                                        className={{
                                            button: "text-xs text-[#222] py-3 px-5 border border-[#E0E0E0] rounded-lg hover:text-blue-600 transition-colors hover:border-black",
                                        }}>
                                        Login
                                    </ButtonBase>
                                    <ButtonBase
                                        className={{
                                            button: "text-xs text-white py-3 px-5 bg-mainBlue-500 rounded-lg hover:bg-blue-600 transition-colors",
                                        }}>
                                        Try Exact
                                        <span className={"font-bold"}>
                                            visitor
                                        </span>
                                    </ButtonBase>
                                </div>
                            </div>

                            <ButtonBase
                                className={{
                                    button: "block appearance-none lg:hidden",
                                }}
                                onClick={() => setMenuIsOpen(true)}
                                title={"Open mobile menu"}>
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
