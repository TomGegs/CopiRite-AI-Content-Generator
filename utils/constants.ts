import OpenAI from "openai";

export const openAiConstant = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    organization: "org-A7fKbkj4Fgp4Hf8aSRCuzNe0",
});
