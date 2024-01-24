import type { NextApiRequest, NextApiResponse } from "next";
import { configuration } from "../../utils/constants";
import { FormData } from "../../hooks/useFormState";

const { OpenAIApi } = require("openai");

type SummaryProps = {
    formData: FormData;
};

//communicate with openAi Platform
const openai = new OpenAIApi(configuration);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ suggestion: string | null }>
) {
    const formData = req.body;

    const {
        nameOfBusiness,
        product,
        userInput,
        shortCopy,
        longCopy,
        casualTone,
        professionalTone,
        funnyTone,
        seriousTone,
        enthusiasticTone,
        informativeTone,
        instagram,
        facebook,
        twitter,
        linkedin,
        threads,
    } = formData;

    // form data options converted into strings
    const productOrService = product ? "product" : "service";
    const copyLength = shortCopy
        ? "120 characters"
        : longCopy
        ? "500 characters"
        : "240 characters";
    const toneSelection1 = casualTone
        ? "casual"
        : professionalTone
        ? "formal"
        : "a neutral tone of voice that is between casual or formal";
    const toneSelection2 = funnyTone
        ? "funny"
        : seriousTone
        ? "serious"
        : "a neutral tone of voice that is between funny or serious";
    const toneSelection3 = enthusiasticTone
        ? "enthusiastic"
        : informativeTone
        ? "informative"
        : "a neutral tone of voice that is between enthusiastic or informative";
    const socialPlatform = instagram
        ? "Instagram"
        : facebook
        ? "Facebook"
        : twitter
        ? "Twitter"
        : linkedin
        ? "LinkedIn"
        : threads
        ? "Threads"
        : "a website or general online marketing purposes";

    // consolidated form data options into a prompt for the API
    const rolePrompt = `You are a marketing expert and professional copywriter. You have been hired by a business called ${nameOfBusiness} to create compelling marketing copy for their ${productOrService}. Your task is to write engaging and persuasive copy that effectively promotes their ${productOrService} to their target audience. The copy should have a ${toneSelection1}, ${toneSelection2} and ${toneSelection3} tone of voice to resonate with their customers. It should be tailored for ${socialPlatform} and optimized for ${copyLength} in length. The business will provided information about their ${productOrService} in their message. Use the information they provide to craft compelling marketing copy that highlights the unique features and benefits of their ${productOrService}. Your goal is to create high-quality copy that captures the attention of potential customers, conveys the value of the ${productOrService}, and compels them to take action. Remember to pay attention to grammar, Australian spelling, and punctuation to deliver polished copy that reflects the value of the business. Please generate marketing copy that aligns with these requirements.`;

    const userPrompt = `Here are the details about my business' ${productOrService}: ${userInput}`;
    try {
        // OpenAI prompt
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: rolePrompt,
                },
                { role: "user", content: userPrompt },
            ],
            model: "gpt-3.5-turbo-1106",
            response_format: { type: "json_object" },
                        temperature: 0.85,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo", // Correct model name
            prompt: userPrompt,
            temperature: 0.85,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });

        // Extract the suggestion from the response
        const suggestion = response.data.choices[0].text.trim();

        if (!suggestion) {
            throw new Error("No suggestion found");
        }

        // API call
        res.status(200).json({ suggestion });
    } catch (error) {
        console.error(error);
        res.status(500).json({ suggestion: null });
    }
}
