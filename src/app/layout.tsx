import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-inter",
});
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "ExactVisitor",
    description: "ExactVisitor description",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} ${inter.variable} text-black font-sans`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
