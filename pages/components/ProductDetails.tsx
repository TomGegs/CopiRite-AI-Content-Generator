import Image from "next/image";
import { FormWrapper } from "./FormWrapper";
import {
    useState,
    useEffect,
    ChangeEvent,
    Dispatch,
    SetStateAction,
} from "react";

type ProductData = {
    nameOfBusiness: string;
    product: boolean;
    service: boolean;
    userInput: string;
};

type ProductDetailsProps = ProductData & {
    updateFields: (fields: Partial<ProductData>) => void;
    setCharacterLimitError: (error: boolean) => void;
    setProductStageButtonSelected: Dispatch<SetStateAction<boolean>>;
    nextButtonClicked: boolean;
};

export function ProductDetails({
    nameOfBusiness,
    product,
    service,
    userInput,
    updateFields,
    setCharacterLimitError,
    setProductStageButtonSelected,
    nextButtonClicked,
}: ProductDetailsProps) {
    const [userInputLength, setUserInputLength] = useState(userInput?.length);
    const [buttonError, setButtonError] = useState(false);

    useEffect(() => {
        setUserInputLength(userInput?.length);
        if (userInput?.length > 160) {
            setCharacterLimitError(true);
        } else {
            setCharacterLimitError(false);
        }
    }, [userInput, setCharacterLimitError]);

    const handleUserInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const input = e.target.value;
        setUserInputLength(input?.length);
        updateFields({ userInput: input });
    };

    useEffect(() => {
        if (!product && !service) {
            setButtonError(true);
            return;
        }
        setButtonError(false);
    }, [product, service]);

    const error = userInputLength > 160;

    useEffect(() => {
        // Set the productStageButtonSelected to true when product or service buttons is selected
        setProductStageButtonSelected(product || service);
    }, [product, service, setProductStageButtonSelected]);

    return (
        <FormWrapper title="your" lastWord="business">
            <label>Business name</label>
            <input
                className="textInput"
                autoFocus
                required
                placeholder="Enter your business name"
                type="text"
                value={nameOfBusiness}
                onChange={(e) =>
                    updateFields({ nameOfBusiness: e.target.value })
                }
            />

            <label>Product or Service</label>
            {!product && !service && nextButtonClicked && (
                <span className="text-red-500 text-base">
                    Please select Product or Service
                </span>
            )}
            <div className="grid grid-cols-2 gap-3">
                <button
                    type="button"
                    className={`btn-selectItems py-4 ${
                        product ? "clicked" : ""
                    }`}
                    onClick={() =>
                        updateFields({ product: true, service: false })
                    }>
                    <Image
                        src={"/product.png"}
                        alt="service"
                        width={40}
                        height={40}
                        className={`${product ? "opacity-100" : "opacity-20"}`}
                    />
                    Product
                </button>

                <button
                    type="button"
                    className={`btn-selectItems py-4 ${
                        service ? "clicked" : ""
                    }`}
                    onClick={() =>
                        updateFields({ product: false, service: true })
                    }>
                    <Image
                        src={"/service.png"}
                        alt="service"
                        width={50}
                        height={50}
                        className={`${service ? "opacity-100" : "opacity-20"}`}
                    />
                    Service
                </button>
            </div>

            <label>Tell us about your {product ? "product" : "service"}</label>
            <div className="relative">
                {error && (
                    <span className="text-red-500 text-base">
                        Character limit exceeded
                    </span>
                )}
                <textarea
                    rows={5}
                    required
                    onChange={handleUserInput}
                    value={userInput}
                    className="textInput w-full resize-none text-sm  "
                    placeholder={`Write a short description of your ${
                        product ? "product" : "service"
                    }`}
                />
                <div
                    className={`absolute bottom-4 right-4 ${
                        error ? "text-red-500" : "text-foreground"
                    } p-1 tracking-wider text-sm`}>
                    <span>{userInputLength}</span>/160
                </div>
            </div>
        </FormWrapper>
    );
}

export default ProductDetails;
