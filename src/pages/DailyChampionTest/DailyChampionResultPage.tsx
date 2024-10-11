import React from "react";
import { useLocation } from "react-router-dom";
import { Champion } from "./DailyChampionAPI";
import "./DailyChampionResultPage.css";

interface ResultPageProps {
  result?: Champion;
}

const DailyChampionResultPage: React.FC<ResultPageProps> = () => {
  const location = useLocation();
  const result = location.state?.result;

  if (!result) {
    return <div>결과를 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <div className="result-page">
      <div className="result-box">
        <h1 className="champion-name">추천된 챔피언: {result.name}</h1>
        <img src={result.img} alt={result.name} className="champion-image" />
        <p className="champion-description">설명: {result.description}</p>
      </div>
    </div>
  );
};

export default DailyChampionResultPage;
