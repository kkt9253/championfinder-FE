import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import TestCard from "../../components/TestCard";
import { fetchAllTests, Test } from "./TestListAPI";

const HomePage: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 테스트 데이터를 가져오는 API 호출
    const getTests = async () => {
      try {
        const response = await fetchAllTests();
        setTests(response);
      } catch (error) {
        console.error("테스트 데이터를 가져오는 중 오류 발생:", error);
      }
    };

    getTests();
  }, []);

  const handleTestClick = (test: Test) => {
    navigate("/testchoose", { state: { name: test.name, imgUrl: test.thumbnailUrl, description: test.description } });
  };

  return (
    <div className="home-page">
      <h2 className="testlist-top">Tak의 인기 테스트</h2>
      {tests.length > 0 && (
        <TestCard
          name={tests[0].name}
          description={tests[0].description}
          imgUrl={tests[0].thumbnailUrl}
          onClick={() => handleTestClick(tests[0])}
        />
      )}

      <h2>Tak의 최신 테스트</h2>
      <div className="latest-tests">
        {tests.slice(1).map(test => (
          <TestCard
            key={test.id}
            name={test.name}
            description={test.description}
            imgUrl={test.thumbnailUrl}
            onClick={() => handleTestClick(test)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
