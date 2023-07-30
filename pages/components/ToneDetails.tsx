import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FormWrapper } from "./FormWrapper";
type ToneData = {
    casualTone: boolean;
    professionalTone: boolean;
    funnyTone: boolean;
    seriousTone: boolean;
    enthusiasticTone: boolean;
    informativeTone: boolean;
    noTone1: boolean;
    noTone2: boolean;
    noTone3: boolean;
    setToneStageCompleted: Dispatch<SetStateAction<boolean>>;
};

type ToneDetailsProps = ToneData & {
    updateFields: (fields: Partial<ToneData>) => void;
};
export function ToneDetails({
    casualTone,
    professionalTone,
    funnyTone,
    seriousTone,
    enthusiasticTone,
    informativeTone,
    noTone1,
    noTone2,
    noTone3,
    updateFields,
    setToneStageCompleted,
}: ToneDetailsProps) {
    const [firstToneSelected, setFirstToneSelected] = useState(false);
    const [secondToneSelected, setSecondToneSelected] = useState(false);
    const [thirdToneSelected, setThirdToneSelected] = useState(false);

    useEffect(() => {
        // Set the copyStageCompleted when firstToneSelected or secondToneSelected or thirdToneSelected changes
        if (firstToneSelected && secondToneSelected && thirdToneSelected) {
            setToneStageCompleted(true);
        } else {
            setToneStageCompleted(false);
        }
    });

    useEffect(() => {
        // Set the firstToneSelected when at least one tone is selected
        setFirstToneSelected(casualTone || professionalTone || noTone1);
    }, [casualTone, professionalTone, noTone1]);

    useEffect(() => {
        // Set the secondToneSelected when at least one tone is selected
        setSecondToneSelected(funnyTone || seriousTone || noTone2);
    }, [funnyTone, seriousTone, noTone2]);

    useEffect(() => {
        // Set the thirdToneSelected when at least one tone is selected
        setThirdToneSelected(enthusiasticTone || informativeTone || noTone3);
    }, [enthusiasticTone, informativeTone, noTone3]);

    return (
        <FormWrapper title="your" lastWord="style">
            <label>Brand tone of voice</label>

            {/* Tone of voice group 1 */}
            <p>Tone 1</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                <button
                    type="button"
                    className={`btn-selectItems col-span-1 md:col-span-2 ${
                        casualTone ? "clicked" : ""
                    }`}
                    onClick={(e) =>
                        updateFields({
                            casualTone: true,
                            professionalTone: false,
                            noTone1: false,
                        })
                    }>
                    Casual
                </button>
                <button
                    type="button"
                    className={`btn-selectItems col-span-1 md:col-span-2 ${
                        professionalTone ? "clicked" : ""
                    }`}
                    onClick={(e) =>
                        updateFields({
                            professionalTone: true,
                            casualTone: false,
                            noTone1: false,
                        })
                    }>
                    Professional
                </button>
                <button
                    type="button"
                    className={`btn-selectItems ${noTone1 ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            noTone1: true,
                            casualTone: false,
                            professionalTone: false,
                        })
                    }>
                    N/A
                </button>
            </div>

            {/* Tone of voice group 2 */}
            <p>Tone 2</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                <button
                    type="button"
                    className={`btn-selectItems col-span-1 md:col-span-2 ${
                        funnyTone ? "clicked" : ""
                    }`}
                    onClick={(e) =>
                        updateFields({
                            funnyTone: true,
                            seriousTone: false,
                            noTone2: false,
                        })
                    }>
                    Funny
                </button>
                <button
                    type="button"
                    className={`btn-selectItems col-span-1 md:col-span-2 ${
                        seriousTone ? "clicked" : ""
                    }`}
                    onClick={(e) =>
                        updateFields({
                            seriousTone: true,
                            funnyTone: false,
                            noTone2: false,
                        })
                    }>
                    Serious
                </button>
                <button
                    type="button"
                    className={`btn-selectItems ${noTone2 ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            noTone2: true,
                            funnyTone: false,
                            seriousTone: false,
                        })
                    }>
                    N/A
                </button>
            </div>

            {/* Tone of voice group 3 */}
            <p>Tone 3</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                <button
                    type="button"
                    className={`md:col-span-2 btn-selectItems ${
                        enthusiasticTone ? "clicked" : ""
                    }`}
                    onClick={(e) =>
                        updateFields({
                            enthusiasticTone: true,
                            informativeTone: false,
                            noTone3: false,
                        })
                    }>
                    Enthusiastic
                </button>
                <button
                    type="button"
                    className={`btn-selectItems col-span-1 md:col-span-2 ${
                        informativeTone ? "clicked" : ""
                    }`}
                    onClick={(e) =>
                        updateFields({
                            informativeTone: true,
                            enthusiasticTone: false,
                            noTone3: false,
                        })
                    }>
                    Informative
                </button>
                <button
                    type="button"
                    className={`btn-selectItems ${noTone3 ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            noTone3: true,
                            enthusiasticTone: false,
                            informativeTone: false,
                        })
                    }>
                    N/A
                </button>
            </div>
        </FormWrapper>
    );
}
