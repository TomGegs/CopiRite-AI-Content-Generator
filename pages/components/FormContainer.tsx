import { FC, FormEvent } from "react";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { PlatformDetails } from "./PlatformDetails";
import { ToneDetails } from "./ToneDetails";
import { ProductDetails } from "./ProductDetails";
import { Hero } from "./Hero";
import Summary from "./Summary";
import OpenAIOutput from "./OpenAIOutput";
import ProgressBar from "./ProgressBar";
import { PageTransition } from "./PageTransition";
import { useFormState, FormData } from "../../hooks/useFormState";

const FormContainer: FC = () => {
    const {
        formData,
        setFormData,
        characterLimitError,
        setCharacterLimitError,
        suggestion,
        setSuggestion,
        loading,
        setLoading,
        isGenerateClicked,
        setIsGenerateClicked,
        productStageButtonSelected,
        setProductStageButtonSelected,
        platformStageCompleted,
        setPlatformStageCompleted,
        toneStageCompleted,
        setToneStageCompleted,
        platformOptions,
        setPlatformOptions,
        copyLengthOptions,
        setCopyLengthOptions,
        nextButtonClicked,
        setNextButtonClicked,
    } = useFormState();

    function updateFields(fields: Partial<FormData>) {
        setFormData((prev) => {
            return { ...prev, ...fields };
        });
    }

    //handle the next button
    function handleNext() {
        // Prevent proceeding if stage is not completed
        if (
            currentStepIndex === 1 &&
            (characterLimitError ||
                !formData.nameOfBusiness ||
                !formData.userInput ||
                !productStageButtonSelected)
        ) {
            return;
        }
        if (currentStepIndex === 2 && !platformStageCompleted) {
            return;
        }

        if (currentStepIndex === 3 && !toneStageCompleted) {
            return;
        }

        // Set the nextButtonClicked state to true when the 'next' button is clicked
        // Proceed to next step if no error
        next();
    }

    async function submit() {
        setLoading(true);
        try {
            const res = await fetch("/api/api-marketing-copy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // Pass formData directly in the request body
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            const { suggestion } = data;
            setSuggestion(suggestion);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    //handle the submit button
    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!isGenerateStep) {
            handleNext();
        } else {
            setIsGenerateClicked(true);
            await Promise.all([
                sleep(2500),
                submit(),
                new Promise((resolve) => setTimeout(resolve, 1000)),
            ]);
            next();
        }
        // Reset the nextButtonClicked state after submitting the form
        setNextButtonClicked(false);
        setProductStageButtonSelected(
            !!formData.nameOfBusiness &&
                !!formData.userInput &&
                !!productStageButtonSelected
        );
    }

    //form stages
    const {
        steps,
        currentStepIndex,
        step,
        isFirstStep,
        isGenerateStep,
        isLastStep,
        back,
        next,
        restart,
        sleep,
    } = useMultistepForm([
        <Hero key="home" />,
        <ProductDetails
            key="business"
            {...formData}
            updateFields={updateFields}
            setCharacterLimitError={setCharacterLimitError}
            setProductStageButtonSelected={setProductStageButtonSelected}
            nextButtonClicked={nextButtonClicked}
        />,
        <PlatformDetails
            key="platform"
            {...formData}
            updateFields={updateFields}
            setPlatformStageCompleted={setPlatformStageCompleted}
        />,
        <ToneDetails
            key="style"
            {...formData}
            updateFields={updateFields}
            setToneStageCompleted={setToneStageCompleted}
        />,
        <Summary key="summary" formData={formData} />,
        <OpenAIOutput key="output" suggestion={suggestion} loading={loading} />,
    ]);

    return (
        <div className="relative rounded-lg flex flex-col">
            {/* Render Page transition when isGenerateClicked is true */}

            {isGenerateClicked && <PageTransition />}

            {/* container styling */}
            <form
                onSubmit={onSubmit}
                className="text-black h-[100dvh] w-screen lg:w-[1024px] p-6 font-big transition-[all_0.5_ease-in-out]">
                {step}
                <div className="mt-4 flex place-items-center gap-2 justify-center">
                    {/* Back Button */}
                    {!isFirstStep && !isLastStep && (
                        <button
                            className="btn-secondary"
                            type="button"
                            onClick={back}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-6 h-6 mx-auto">
                                <path
                                    fillRule="evenodd"
                                    d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    )}

                    {/* Progress Bar */}
                    {!isFirstStep && !isLastStep && (
                        <ProgressBar
                            currentStepIndex={currentStepIndex}
                            steps={steps}
                        />
                    )}

                    {/* Proceed Button (Next/Start/Create Copy) */}
                    {!isLastStep && (
                        <button
                            className={`${
                                isFirstStep
                                    ? "btn-firstPage"
                                    : isGenerateStep
                                    ? "btn-generate"
                                    : "btn-primary"
                            }`}
                            type="submit">
                            {isFirstStep ? (
                                "Get started"
                            ) : isGenerateStep ? (
                                "Create Copy"
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-6 h-6 mx-auto">
                                    <path
                                        fillRule="evenodd"
                                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
                    )}
                    {/* Restart Button */}
                    {isLastStep && (
                        <button
                            className="btn-generate"
                            type="button"
                            onClick={restart}>
                            Restart
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default FormContainer;
