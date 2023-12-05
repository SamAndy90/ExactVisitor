import { twMerge } from "tailwind-merge";

export type TitleProps = {
    children: React.ReactNode;
    component?: React.ElementType;
    className?: string;
};

export function Title(props: TitleProps) {
    const { children, component = "h2", className } = props;
    const Component = component;

    return (
        <Component
            className={twMerge(
                "text-5xl !leading-tight md:text-[65px]",
                className
            )}>
            {children}
        </Component>
    );
}
