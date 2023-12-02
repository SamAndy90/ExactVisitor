// import Facebook from "./static/Facebook";
// import Instagram from "./static/Instagram";
// import Telegram from "./static/Telegram";
// import Tiktok from "./static/Tiktok";
import { Container, Title } from "@/common/ui";
import Image from "next/image";
import Link from "next/link";
import FBIcon from "./static/facebookIcon.svg";
import InstaIcon from "./static/instagramIcon.svg";
import LinkedInIcon from "./static/linkedInIcon.svg";
import YouTubeIcon from "./static/youtubeIcon.svg";

function Footer() {
    return (
        <footer className={"text-[#D4D7E1] bg-[#000212]"}>
            <Container>
                <div className={"flex flex-col"}>
                    <div
                        className={
                            "flex flex-col lg:flex-row justify-between gap-y-8 gap-x-4 text-sm py-8 md:py-12 lg:py-16 xl:pt-[120px] xl:pb-[76px]"
                        }>
                        <div
                            className={
                                "basis-1/3 flex flex-col lgm:flex-row lg:flex-col gap-6 lgm:gap-x-4 md:gap-x-2"
                            }>
                            <div className={"lgm:basis-1/2 lg:basis-0"}>
                                <h4 className={"text-base text-[#F5F5F5]"}>
                                    Contact
                                </h4>
                                <a
                                    href={"mailto:info@exactvisitor.com"}
                                    className={
                                        "hover:text-white transition-colors"
                                    }>
                                    info@exactvisitor.com
                                </a>
                            </div>
                            <div>
                                <h4 className={"text-base text-[#F5F5F5]"}>
                                    Address
                                </h4>
                                <p className={"max-w-[210px]"}>
                                    71-75 Shelton Street, London - United
                                    Kingdom
                                </p>
                            </div>
                        </div>
                        <div
                            className={
                                "flex flex-col lgm:flex-row lgm:flex-wrap md:flex-nowrap flex-1 gap-y-8 gap-x-4"
                            }>
                            <div className={"lgm:basis-1/2 md:flex-1"}>
                                <h4
                                    className={
                                        "text-base text-[#F5F5F5] mb-2 whitespace-nowrap"
                                    }>
                                    Demand Group
                                </h4>
                                <ul className={"flex flex-col gap-y-2"}>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link href={"#"}>About</Link>
                                    </li>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link href={"#"}>Careers</Link>
                                    </li>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link href={"#"}>Contact</Link>
                                    </li>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link
                                            href={"#"}
                                            className={"whitespace-nowrap"}>
                                            Contact sales
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link href={"#"}>Customers</Link>
                                    </li>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link
                                            href={"#"}
                                            className={"whitespace-nowrap"}>
                                            Referral program
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={"lgm:basis-5/12 md:flex-1"}>
                                <h4 className={"text-base text-[#F5F5F5] mb-2"}>
                                    Product
                                </h4>
                                <ul className={"flex flex-col gap-y-2"}>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link
                                            href={"#"}
                                            className={"whitespace-nowrap"}>
                                            All features
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link href={"#"}>Integrations</Link>
                                    </li>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link href={"#"}>Login</Link>
                                    </li>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link
                                            href={"#"}
                                            className={"whitespace-nowrap"}>
                                            Slack Notifications
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link href={"#"}>Sign up</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={"lgm:basis-1/2 md:flex-1"}>
                                <h4 className={"text-base text-[#F5F5F5] mb-2"}>
                                    Features
                                </h4>
                                <ul className={"flex flex-col gap-y-2"}>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link
                                            href={"#"}
                                            className={"whitespace-nowrap"}>
                                            Slack Notifications
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link
                                            href={"#"}
                                            className={"whitespace-nowrap"}>
                                            Identify Companies
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link
                                            href={"#"}
                                            className={"whitespace-nowrap"}>
                                            Identify People
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link
                                            href={"#"}
                                            className={"whitespace-nowrap"}>
                                            Website Personalization
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            "hover:text-white transition-colors"
                                        }>
                                        <Link href={"#"}>Dashboard</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={"lgm:basis-5/12 md:flex-1"}>
                                <div>
                                    <h4
                                        className={
                                            "text-base text-[#F5F5F5] mb-2"
                                        }>
                                        Resources
                                    </h4>
                                    <ul
                                        className={
                                            "flex flex-col gap-y-2 mb-8"
                                        }>
                                        <li
                                            className={
                                                "hover:text-white transition-colors"
                                            }>
                                            <Link href={"#"}>Blog</Link>
                                        </li>
                                        <li
                                            className={
                                                "hover:text-white transition-colors"
                                            }>
                                            <Link
                                                href={"#"}
                                                className={"whitespace-nowrap"}>
                                                Help center
                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                "hover:text-white transition-colors"
                                            }>
                                            <Link
                                                href={"#"}
                                                className={"whitespace-nowrap"}>
                                                Video guides
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h4
                                        className={
                                            "text-base text-[#F5F5F5] mb-2"
                                        }>
                                        Templates
                                    </h4>
                                    <ul className={"flex flex-col gap-y-2"}>
                                        <li
                                            className={
                                                "hover:text-white transition-colors"
                                            }>
                                            <Link href={"#"}>Playbooks</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            "flex flex-col-reverse gap-4 md:flex-row items-center justify-between text-xs pt-5 pb-11 border-t border-t-[#E0E0E0]"
                        }>
                        <div
                            className={
                                "flex flex-col-reverse gap-4 md:flex-row items-center justify-between basis-1/2"
                            }>
                            <p className={"whitespace-nowrap"}>
                                Copyright © 2014-2023 Demand Group
                            </p>
                            <div
                                className={
                                    "flex items-center justify-end gap-2"
                                }>
                                <Link
                                    href={"#"}
                                    className={
                                        "hover:text-white transition-colors whitespace-nowrap"
                                    }>
                                    Terms of Service
                                </Link>
                                <span
                                    className={
                                        "w-[1px] bg-[#D4D7E1] self-stretch"
                                    }></span>
                                <Link
                                    href={"#"}
                                    className={
                                        "hover:text-white transition-colors whitespace-nowrap"
                                    }>
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                        <div className={"flex items-center justify-end gap-5"}>
                            <Link
                                href={"#"}
                                className={
                                    "hover:-translate-y-1 transition-transform"
                                }>
                                <Image src={FBIcon} alt={"Facebook"} />
                            </Link>
                            <Link
                                href={"#"}
                                className={
                                    "hover:-translate-y-1 transition-transform"
                                }>
                                <Image src={InstaIcon} alt={"Instagram"} />
                            </Link>
                            <Link
                                href={"#"}
                                className={
                                    "hover:-translate-y-1 transition-transform"
                                }>
                                <Image src={LinkedInIcon} alt={"LinkedIn"} />
                            </Link>
                            <Link
                                href={"#"}
                                className={
                                    "hover:-translate-y-1 transition-transform"
                                }>
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
