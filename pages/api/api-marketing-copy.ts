// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { configuration } from "../../utils/constants";
import { FormData } from "../hooks/useFormState";

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
    ? "professional"
    : "general";
  const toneSelection2 = funnyTone
    ? "funny"
    : seriousTone
    ? "serious"
    : "general";
  const toneSelection3 = enthusiasticTone
    ? "enthusiastic"
    : informativeTone
    ? "informative"
    : "general";
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
  const userPrompt = `You are a marketing expert and professional copywriter. You have been hired by a business called ${nameOfBusiness} to create compelling marketing copy for their ${productOrService}. Your task is to write engaging and persuasive copy that effectively promotes their ${productOrService} to their target audience. The copy should have a ${toneSelection1}, ${toneSelection2} and ${toneSelection3} tone of voice to resonate with their customers. It should be tailored for ${socialPlatform} and optimized for ${copyLength} in length. The business has provided the following information about their ${productOrService}: ${userInput}. Use this information to craft compelling marketing copy that highlights the unique features and benefits of their ${productOrService}. Your goal is to create high-quality copy that captures the attention of potential customers, conveys the value of the ${productOrService}, and compels them to take action. Remember to pay attention to grammar, Australian spelling, and punctuation to deliver polished copy that reflects the value of the business. Please generate marketing copy that aligns with these requirements.`;

  try {
    // OpenAI prompt
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: userPrompt,
      temperature: 0.85,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    // Extract the suggestion from the response
    const suggestion = response.data.choices[0].text;

    if (suggestion === undefined) {
      throw new Error("No suggestion found");
    }

    // API call
    res.status(200).json({ suggestion });
  } catch (error) {
    console.log(error);
    res.status(500).json({ suggestion: null });
  }
}
