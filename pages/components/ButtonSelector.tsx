import { FC, Dispatch, SetStateAction, useEffect, useState } from "react";

type ButtonSelectorProps = {
  options: boolean[];
  setOptions: Dispatch<SetStateAction<boolean[]>>;
  optionLabels: string[];
  errorMessage?: string | null;
  fieldNames: string[];
  updateFields: (fields: Partial<Record<string, boolean>>) => void;
};

const ButtonSelector: FC<ButtonSelectorProps> = ({
  options: initialOptions,
  setOptions,
  optionLabels,
  errorMessage,
  fieldNames,
  updateFields,
}) => {
  const [options, setInternalOptions] = useState<boolean[]>(initialOptions);
  const [error, setError] = useState<string | null>(null);


  const handleOptionClick = (index: number) => {
    setInternalOptions((prevOptions) => {
      const updatedOptions = prevOptions.map((option, i) =>
        i === index ? !option : option // Toggle the option when clicked
      );
      return updatedOptions;
    });
  };

  useEffect(() => {
    // Call updateFields function to update the form data
    const fields: Partial<Record<string, boolean>> = {};
    fieldNames.forEach((fieldName, i) => {
      fields[fieldName] = options[i];
    });
    updateFields(fields);

    // Clear error message if any option is selected
    setError(null);

    // Check for errors and set the error message if no option is selected
    if (!options.some((option) => option)) {
        setError(errorMessage || "Please select at least one option.");
      } else {
        setError(null); // Clear error message if any option is selected
      }
    }, [options, fieldNames, updateFields, errorMessage]);

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {optionLabels.map((label, index) => (
          <button
            key={label}
            type="button"
            className={`btn-selectItems ${options[index] ? "clicked" : ""}`}
            onClick={() => handleOptionClick(index)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonSelector;
