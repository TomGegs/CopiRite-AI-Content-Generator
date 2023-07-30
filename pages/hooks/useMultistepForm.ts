import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    //move to next step
    function next() {
        setCurrentStepIndex((current) => {
            if (current >= steps.length - 1) return current;
            return current + 1;
        });
    }

    //move to previous step
    function back() {
        setCurrentStepIndex((current) => {
            if (current <= 0) return current;
            return current - 1;
        });
    }

    //move to first step
    function restart() {
        window.location.href = window.location.href;
    }

    //go to specific step
    function goToStep(stepIndex: number) {
        setCurrentStepIndex(stepIndex);
    }

    //sleep function for generate step (fake loading)
   async function sleep(time: number) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        isGenerateStep: currentStepIndex === steps.length - 2,
        next,
        back,
        goToStep,
        restart,
        sleep,
    };
}
