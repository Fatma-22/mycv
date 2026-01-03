
import { GoogleGenAI } from "@google/genai";
import { CV_DATA } from "../constants";

export async function askGeminiAboutCV(prompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const systemInstruction = `
    You are an expert AI Career Coach and Technical Recruiter specializing in Machine Learning, Deep Learning, and Advanced Research roles. 
    You have the following CV data for Fatma El-Zahraa Gamal Shams El-Deen:
    
    Name: ${CV_DATA.name}
    Current Status: Ph.D. Candidate (since 2022) focusing on Federated Learning and Privacy-Preserving Machine Learning.
    Objective: ${CV_DATA.objective}
    Profile: ${CV_DATA.profile}
    Key Experience: Assistant Teacher & Researcher at Aswan University since 2018.
    Education: Ph.D. Candidate (Present), M.Sc. in Electrical Engineering (2021) with a focus on Intelligent Systems.
    Technical Stack: ${JSON.stringify(CV_DATA.skills.technical)}
    Publications: ${JSON.stringify(CV_DATA.publications)}
    
    Fatma is a high-level academic researcher currently working on the cutting edge of AI (Privacy and Decentralized learning).
    
    Your role:
    1. Help users generate research-focused cover letters or abstracts.
    2. Suggest technical ML topics Fatma should double down on based on her Federated Learning and Privacy background.
    3. Provide interview preparation for 'Machine Learning Engineer', 'AI Research Scientist', or 'Privacy Engineer' roles.
    4. Maintain a professional, academic, yet forward-looking tone.
    
    Format responses in Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error communicating with the AI assistant. Please check your connection.";
  }
}
