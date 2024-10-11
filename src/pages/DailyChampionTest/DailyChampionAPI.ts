import axios from "axios";

export interface Champion {
  id: number;
  name: string;
  img: string;
  description: string;
}

// 챔피언 추천 API 호출 함수
export const fetchRecommendedChampion = async (responses: boolean[]): Promise<Champion> => {
  try {
    const response = await axios.post<Champion>(
      "http://localhost:8080/champion/recommendation/novice",  // 백엔드 주소
      responses
    );
    return response.data; // 추천된 챔피언 데이터를 반환
  } catch (error) {
    console.error("일상 챔피언 추천 API 호출 중 오류 발생:", error);
    throw error;
  }
};
