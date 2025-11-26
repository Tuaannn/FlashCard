import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is not set in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

/**
 * Generates a short, encouraging summary of what the user will learn in the selected course.
 */
export const getCoursePreview = async (courseTitle: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) {
    return "Vui lòng cấu hình API Key để sử dụng tính năng AI.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Hãy đóng vai một giáo viên tin học nhiệt tình. Viết 3 gạch đầu dòng ngắn gọn (dưới 50 từ) về những lợi ích cốt lõi nhất khi học môn "${courseTitle}". Văn phong hấp dẫn, khuyến khích người học.`,
      config: {
        temperature: 0.7,
      }
    });
    
    return response.text || "Không thể tải nội dung lúc này.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đã xảy ra lỗi khi kết nối với trợ lý AI.";
  }
};