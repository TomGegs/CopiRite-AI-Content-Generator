import { useState } from "react";

export type FormData = {
  nameOfBusiness: string;
  product: boolean;
  service: boolean;
  userInput: string;
  facebook: boolean;
  twitter: boolean;
  instagram: boolean;
  linkedin: boolean;
  threads: boolean;
  generalCopy: boolean;
  shortCopy: boolean;
  mediumCopy: boolean;
  longCopy: boolean;
  casualTone: boolean;
  professionalTone: boolean;
  funnyTone: boolean;
  seriousTone: boolean;
  enthusiasticTone: boolean;
  informativeTone: boolean;
  noTone1: boolean;
  noTone2: boolean;
  noTone3: boolean;
};

const INITIAL_DATA: FormData = {
  nameOfBusiness: "",
  product: false,
  service: false,
  userInput: "",
  facebook: false,
  twitter: false,
  instagram: false,
  linkedin: false,
  threads: false,
  generalCopy: false,
  shortCopy: false,
  mediumCopy: false,
  longCopy: false,
  casualTone: false,
  professionalTone: false,
  funnyTone: false,
  seriousTone: false,
  enthusiasticTone: false,
  informativeTone: false,
  noTone1: false,
  noTone2: false,
  noTone3: false,
};

export const useFormState = () => {
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [nextButtonClicked, setNextButtonClicked] = useState(false);
  const [isGenerateClicked, setIsGenerateClicked] = useState(false);

  const [characterLimitError, setCharacterLimitError] = useState(false);
  const [productStageButtonSelected, setProductStageButtonSelected] =
    useState(false);
  const [platformStageCompleted, setPlatformStageCompleted] = useState(false);
  const [toneStageCompleted, setToneStageCompleted] = useState(false);

  const [platformOptions, setPlatformOptions] = useState<boolean[]>([
    false, // facebook
    false, // instagram
    false, // twitter
    false, // linkedin
    false, // threads
    false, // generalCopy
  ]);

  const [copyLengthOptions, setCopyLengthOptions] = useState<boolean[]>([
    false, // shortCopy
    false, // mediumCopy
    false, // longCopy
  ]);

  return {
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
  };
};

export default useFormState;
