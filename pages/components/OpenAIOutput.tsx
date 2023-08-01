import { FC, useState } from "react";
import { FormWrapper } from "./FormWrapper";

interface OpenAIOutputProps {
  suggestion: string | null;
  loading: boolean;
}

const OpenAIOutput: FC<OpenAIOutputProps> = ({ suggestion, loading }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    if (suggestion) {
      navigator.clipboard.writeText(suggestion);
      setIsCopied(true); // Update the state when the text is copied
    }
  };

  return (
    <FormWrapper title="your copi" lastWord="right!">
      {suggestion !== null && (
        <div className="mt-6">
          <h3 className="text-foreground text-lg font-semibold pb-2">
            The AI wizards have wizarded this up for you:
          </h3>
          <div className="relative w-full border-4 border-primary rounded-md bg-gray-100 p-4 pb-8">
            <p className="text-base md:text-lg text-gray-700 select-all whitespace-normal break-words">
              {suggestion}
            </p>
            <button
              onClick={copyToClipboard}
              disabled={loading || isCopied}
              className={` absolute  p-2 rounded-lg right-0 bottom-0 ${
                loading || isCopied ? "opacity-50  cursor-not-allowed" : ""
              }`}
            >
              {isCopied ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="#181818"
                >
                  <path d="M448 384H256c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V320c0 35.3-28.7 64-64 64zM64 128h96v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H256c8.8 0 16-7.2 16-16V416h48v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="#b15cff"
                >
                  <path d="M448 384H256c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V320c0 35.3-28.7 64-64 64zM64 128h96v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H256c8.8 0 16-7.2 16-16V416h48v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </FormWrapper>
  );
};

export default OpenAIOutput;
