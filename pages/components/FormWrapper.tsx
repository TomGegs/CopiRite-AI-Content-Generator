import { ReactNode } from "react";

type FormWrapperProps = {
    title: string;
    lastWord: string;
    children: ReactNode;
};

export function FormWrapper({ title, lastWord, children }: FormWrapperProps) {
    return (
        <>
            <h2 className="max-[370px]:text-[2rem] text-[3rem] md:text-[5rem] mx-auto font-chicle rounded-lg w-full transition-[all_0.5_ease-in-out] mb-6 text-primary leading-tight font-bold text-center">
                {title} <span className="text-secondary ">{lastWord}</span>
            </h2>
            <div className="flex font-darkerGrotesque text-2xl font-semibold gap-4 flex-col text-foreground min-h-[76%] lg:min-h-[65%] lg:max-h-[700px] justify-start w-full grid-cols-[repeat(minmax(100px,500px))]">
                {children}
            </div>
        </>
    );
}
