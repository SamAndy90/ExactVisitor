import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./src/app/**/*.{ts,tsx}",
        "./src/components/**/*.{ts,tsx}",
        "./src/common/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-montserrat)", ...fontFamily.sans],
                inter: ["var(--font-inter)", "sans-serif"],
            },
            colors: {
                mainBlue: {
                    500: "#2B8FEB",
                },
            },
            screens: {
                lgm: "460px",
                "lg+": "1170px",
                "xl+": "1460px",
            },
        },
    },
    plugins: [],
};
export default config;
