import React from "react";
import "../styles/TestCard.css";  // 스타일은 별도 파일에 추가

interface TestCardProps {
  name: string;
  description: string;
  imgUrl: string;
  onClick: () => void;
}

const TestCard: React.FC<TestCardProps> = ({ name, description, imgUrl, onClick }) => {
  return (
    <div className="test-card-container">
      <div className="test-card" onClick={onClick}>
        <h3 className="test-title">{name}</h3>
        <img src={`http://localhost:8080${imgUrl}`} alt={name} className="test-image" />
        <p className="test-description">{description}</p>
      </div>
    </div>
  );
};

export default TestCard;
