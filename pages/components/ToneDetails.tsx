import { Dispatch, SetStateAction, use, useEffect, useState } from "react";
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
    const [tone1, setTone1] = useState<boolean[]>([
        casualTone,
        professionalTone,
        noTone1,
    ]);
    const [tone2, setTone2] = useState<boolean[]>([
        funnyTone,
        seriousTone,
        noTone2,
    ]);
    const [tone3, setTone3] = useState<boolean[]>([
        enthusiasticTone,
        informativeTone,
        noTone3,
    ]);

    useEffect(() => {
        const tone1HasSelection = tone1.some((option) => option);
        const tone2HasSelection = tone2.some((option) => option);
        const tone3HasSelection = tone3.some((option) => option);
        setToneStageCompleted(
            tone1HasSelection && tone2HasSelection && tone3HasSelection
        );
    }, [tone1, tone2, tone3, setToneStageCompleted]);

    return (
        <FormWrapper title="your" lastWord="style">
            <label>Select the tones that best suit your copy</label>

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
                    className={`btn-selectItems ${noTone1 ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            noTone1: true,
                            casualTone: false,
                            professionalTone: false,
                        })
                    }>
                    Neutral
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
                    Formal
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
                    className={`btn-selectItems ${noTone2 ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            noTone2: true,
                            funnyTone: false,
                            seriousTone: false,
                        })
                    }>
                    Neutral
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
                    className={`btn-selectItems ${noTone3 ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            noTone3: true,
                            enthusiasticTone: false,
                            informativeTone: false,
                        })
                    }>
                    Neutral
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
            </div>
        </FormWrapper>
    );
}

export default ToneDetails;
