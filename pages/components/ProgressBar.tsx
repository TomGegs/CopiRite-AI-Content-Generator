import React from "react";

type ProgressBarProps = {
    currentStepIndex: number;
    steps: any;
};

export function ProgressBar({ currentStepIndex, steps }: ProgressBarProps) {
    const totalSteps = steps.length - 2;
    //new array of total number of steps in form
    const dotsArray = Array.from({ length: totalSteps }, (_, index) => index);

    return (
        <>
            <div className="flex justify-between">
                {/* map through array and create a dot for each step */}
                {dotsArray.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full transition-[all_0.5_ease-in-out] ${
                            index === currentStepIndex - 1
                                ? "bg-primary w-4"
                                : "bg-foreground"
                        } m-2`}
                    />
                ))}
            </div>
        </>
    );
}

export default ProgressBar;