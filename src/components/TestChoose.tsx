import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/TestChoose.css";
import NavBar from "./NavBar";

const TestChoose: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 클릭한 테스트의 정보를 전달받음
  const { name, imgUrl, description } = location.state || {};

  const handleStartTest = () => {
    // 사용자가 실행하기를 눌렀을 때 테스트 페이지로 이동
    navigate("/dailychampiontest", { state: { name, imgUrl, description } });
  };

  return (
    <div className="test-thumbnail-page">
      <div className="header"></div>
      <h2 className="test-name">{name}</h2>
      <img src={`http://localhost:8080${imgUrl}`} alt="test-thumbnail" className="test-thumbnail-image" />
      <p className="test-description">{description}</p>
      <button onClick={handleStartTest} className="start-test-button">
        시작하기
      </button>
    </div>
  );
};

export default TestChoose;
