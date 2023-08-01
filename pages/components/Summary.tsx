import { FC } from "react";
import { FormWrapper } from "./FormWrapper";
import { FormData } from "../../hooks/useFormState";
type SummaryProps = {
    formData: FormData;
};

const Summary: FC<SummaryProps> = ({ formData }) => {
    return (
        <FormWrapper title={"your"} lastWord={"stuff"}>
            <div className="p-2 md:p-4 text-lg md:text-2xl font-normal whitespace-normal break-words flex flex-col">
                <h2 className="font-bold text-2xl md:text-3xl ">
                    Here&apos;s what you&apos;ve told us so far:
                </h2>
                <div className="my-4 md:my-6 border border-secondary rounded-lg px-4 pb-4 pt-2 flex flex-col md:gap-2">
                    <p className="md:pb-2 font-bold">Your business info: </p>
                    <p>
                        Business name:
                        {/* Name of business */}
                        <span className="text-primary text-[1rem] font-semibold md:text-2xl">
                            {" "}
                            {formData?.nameOfBusiness}
                        </span>
                    </p>
                    <p>
                        Provides: {/* Product or Service */}
                        <span className="text-primary text-[1rem] font-semibold md:text-2xl">
                            {formData?.product ? "Product" : "Service"}
                        </span>
                    </p>
                    <p>
                        About your {formData?.product ? "product" : "service"}:
                        {/* explanation of product / service */}
                        <span className="text-primary text-[1.2rem] font-semibold md:text-2xl">
                            {" "}
                            {formData?.userInput}
                        </span>
                    </p>
                </div>
                <div className="mb-4 md:mb-6 border border-secondary rounded-lg px-4 pb-4 pt-2 flex flex-col md:gap-2">
                    <p className="md:pb-2 font-bold">Your copy style: </p>
                    <p>
                        Length:{" "}
                        <span className="text-primary text-[1rem] font-semibold md:text-2xl">
                            {formData?.shortCopy ? "Short" : null}
                            {formData?.mediumCopy ? "Medium" : null}
                            {formData?.longCopy ? "Long" : null}
                        </span>
                    </p>
                    <p>
                        Optimised for: {/* Social Platforms */}
                        <span className="text-primary text-[1rem] font-semibold md:text-2xl">
                            {formData?.instagram ? "Instagram" : null}
                            {formData?.facebook ? "Facebook" : null}
                            {formData?.twitter ? "Twitter" : null}
                            {formData?.linkedin ? "LinkedIn" : null}
                            {formData?.threads ? "Threads" : null}
                            {formData?.generalCopy
                                ? "Website or general use"
                                : null}
                        </span>
                    </p>
                    <p>
                        Tone of voice: {/* Tone of voice */}
                        <span className="text-primary text-[1rem] font-semibold md:text-2xl">
                            {formData?.casualTone ? "Casual" : null}
                            {formData?.professionalTone ? "Formal" : null}
                            {(!formData?.noTone1 && !formData?.noTone2) ||
                            (!formData?.noTone1 && !formData?.noTone3)
                                ? ", "
                                : null}
                            {formData?.funnyTone ? "Funny" : null}
                            {formData?.seriousTone ? "Serious" : null}
                            {!formData?.noTone2 && !formData?.noTone3
                                ? ", "
                                : null}
                            {formData?.enthusiasticTone ? "Enthusiastic" : null}
                            {formData?.informativeTone ? "Informative" : null}
                            {formData?.noTone1 &&
                            formData?.noTone2 &&
                            formData?.noTone3
                                ? "Neutral"
                                : formData?.noTone1 ||
                                  formData?.noTone2 ||
                                  formData?.noTone3
                                ? ", Neutral"
                                : null}
                        </span>
                        {/* Length of copy */}
                    </p>
                </div>
                <p>
                    The AI copi-bots are ready! Click the button below to
                    create your marketing copy.
                </p>
            </div>
        </FormWrapper>
    );
};

export default Summary;
