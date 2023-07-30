import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FormWrapper } from "./FormWrapper";

type PlatformData = {
    facebook: boolean;
    instagram: boolean;
    twitter: boolean;
    linkedin: boolean;
    threads: boolean;
    generalCopy: boolean;
    shortCopy: boolean;
    mediumCopy: boolean;
    longCopy: boolean;
    setPlatformStageCompleted: Dispatch<SetStateAction<boolean>>;
};

type PlatformDetailsProps = PlatformData & {
    updateFields: (fields: Partial<PlatformData>) => void;
};

export function PlatformDetails({
    facebook,
    instagram,
    twitter,
    linkedin,
    threads,
    generalCopy,
    shortCopy,
    mediumCopy,
    longCopy,
    updateFields,
    setPlatformStageCompleted,
}: PlatformDetailsProps) {
    const [platformSelected, setPlatformSelected] = useState<boolean[]>([
        facebook,
        twitter,
        instagram,
        linkedin,
        threads,
        generalCopy,
    ]);

    const [copyLengthSelected, setCopyLengthSelected] = useState<boolean>(
        shortCopy || mediumCopy || longCopy
    );

    // Set the platformStageCompleted when platformSelected or copyLengthSelected changes
    useEffect(() => {
        const platformHasSelection = platformSelected.some((option) => option);
        setPlatformStageCompleted(platformHasSelection && copyLengthSelected);
    }, [platformSelected, copyLengthSelected, setPlatformStageCompleted]);

    useEffect(() => {
        // Set the platformSelected when at least one social media is selected
        setPlatformSelected([
            facebook,
            twitter,
            instagram,
            linkedin,
            threads,
            generalCopy,
        ]);
    }, [facebook, twitter, instagram, linkedin, threads, generalCopy]);

    useEffect(() => {
        // Set the copyLengthSelected when at least one copy length option is selected
        setCopyLengthSelected(shortCopy || mediumCopy || longCopy);
    }, [shortCopy, mediumCopy, longCopy]);

    return (
        <FormWrapper title="your" lastWord="platform">
            <label>Target platform</label>
            <div className="grid grid-cols-2 gap-3 ">
                <button
                    type="button"
                    className={`btn-selectItems ${facebook ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            facebook: true,
                            twitter: false,
                            instagram: false,
                            linkedin: false,
                            threads: false,
                            generalCopy: false,
                        })
                    }>
                    Facebook
                </button>
                <button
                    type="button"
                    className={`btn-selectItems ${twitter ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            twitter: true,
                            facebook: false,
                            instagram: false,
                            linkedin: false,
                            threads: false,
                            generalCopy: false,
                        })
                    }>
                    Twitter
                </button>
                <button
                    type="button"
                    className={`btn-selectItems ${instagram ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            instagram: true,
                            facebook: false,
                            twitter: false,
                            linkedin: false,
                            threads: false,
                            generalCopy: false,
                        })
                    }>
                    Instagram
                </button>
                <button
                    type="button"
                    className={`btn-selectItems ${linkedin ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            linkedin: true,
                            facebook: false,
                            twitter: false,
                            instagram: false,
                            threads: false,
                            generalCopy: false,
                        })
                    }>
                    LinkedIn
                </button>
                <button
                    type="button"
                    className={`btn-selectItems ${threads ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            threads: true,
                            facebook: false,
                            twitter: false,
                            instagram: false,
                            linkedin: false,
                            generalCopy: false,
                        })
                    }>
                    Threads
                </button>
                <button
                    type="button"
                    className={`btn-selectItems ${
                        generalCopy ? "clicked" : ""
                    }`}
                    onClick={(e) =>
                        updateFields({
                            generalCopy: true,
                            facebook: false,
                            twitter: false,
                            instagram: false,
                            linkedin: false,
                            threads: false,
                        })
                    }>
                    General
                </button>
            </div>
            <label>Character length</label>
            <div className="grid grid-cols-3 gap-3">
                <button
                    type="button"
                    className={`btn-selectItems ${shortCopy ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            shortCopy: true,
                            mediumCopy: false,
                            longCopy: false,
                        })
                    }>
                    Short <br /> (140 char)
                </button>
                <button
                    type="button"
                    className={`btn-selectItems ${mediumCopy ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            mediumCopy: true,
                            shortCopy: false,
                            longCopy: false,
                        })
                    }>
                    Medium
                    <br />
                    (280 char)
                </button>
                <button
                    type="button"
                    className={`btn-selectItems ${longCopy ? "clicked" : ""}`}
                    onClick={(e) =>
                        updateFields({
                            longCopy: true,
                            shortCopy: false,
                            mediumCopy: false,
                        })
                    }>
                    Long <br />
                    (500 char)
                </button>
            </div>
        </FormWrapper>
    );
}

export default PlatformDetails;
