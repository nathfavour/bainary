
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getResearchInsight = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a high-level research architect at Bainaryglobe. Respond with systemic, analytical insight to the following research inquiry. Focus on "Architecture of Necessity", "Systemic Resilience", and "Long-Horizon Impact". Provide a structured response.
      
      Query: ${query}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
        systemInstruction: "You are an AI research entity for a firm called Bainaryglobe. Your tone is professional, brutalist, academic, and focuses on systems theory and future infrastructure. Avoid conversational fluff."
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: System context retrieval failed. Ensure network integrity.";
  }
};
