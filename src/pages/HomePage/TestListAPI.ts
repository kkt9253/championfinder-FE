import axios from "axios";

export interface Test {
  id: number;
  name: string;
  description: string;
  thumbnailUrl: string;
}

// 모든 테스트를 가져오는 API 호출 함수
export const fetchAllTests = async (): Promise<Test[]> => {
  try {
    const response = await axios.get<Test[]>("http://localhost:8080/test/");
    return response.data;
  } catch (error) {
    console.error("전체 테스트 목록을 불러오는 중 오류 발생:", error);
    throw error;
  }
};

/*
export const fetchTestById = async (id: number): Promise<Test> => {
  try {
    const response = await axios.get<Test>(`http://localhost:8080/test/${id}`);
    return response.data;
  } catch (error) {
    console.error(`ID ${id}에 해당하는 테스트를 불러오는 중 오류 발생:`, error);
    throw error;
  }
};
*/