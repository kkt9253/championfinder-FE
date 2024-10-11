import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionItem from "../../components/QuestionItem";
import { fetchRecommendedChampion, Champion } from "./DailyChampionAPI";
import ProgressBar from "../../components/ProgressBar";
import "./DailyChampionQuestionPage.css";

const questions = [
  "당신은 팀플을 선호하십니까?",
  "당신은 난이도 있는 활동을 즐기십니까?",
  "당신이 팀프로젝트를 진행했을 때 본인의 우수함이 돋보이고 싶나요? 팀원의 우수함이 돋보이고 싶나요?",
  "당신은 게임을 플레이하며 공격적인 스타일을 선호하나요? 방어적인 스타일을 선호하나요?",
  "당신은 날렵하고 날쎈 것을 선호하나요? 듬직하고 우직한 것을 선호하나요?",
  "당신은 한방이 강한 캐릭터를 선호하나요? 지속전에서 강한 캐릭터를 선호하나요?",
  "당신은 싸우는 역할과 치유하고 보조하는 역할 중 어느 것을 선호하나요?",
  "당신은 1대1에 능하고 싶나요? 다대다에 능하고 싶나요?",
  "당신은 강한 타임을 한번만 가질 수 있다면 초반, 후반 중 언제가 중요하다고 생각하나요? (초반이 망가졌을 때 후반까지 가지못할 수도 있습니다.)",
  "당신은 전략적인 것을 즐기시나요?",
  "당신은 근접전에 능하고 싶나요? 원거리전에서 능하고 싶나요?"
];

const DailyChampionQuestionPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<(boolean | null)[]>(Array(questions.length).fill(null));
  const navigate = useNavigate();
  const [result, setResult] = useState<Champion | null>(null);

  const handleAnswer = async (answer: boolean) => {
    const updatedResponses = [...responses];
    updatedResponses[currentQuestionIndex] = answer;
    setResponses(updatedResponses);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      try {
        const filteredResponses = updatedResponses.map(response => response === true);
        const champion = await fetchRecommendedChampion(filteredResponses);
        setResult(champion);
        navigate("/dailychampionresult", { state: { result: champion } });
      } catch (error) {
        console.error("챔피언 추천 실패:", error);
        setResult(null);
      }
    }
  };

  return (
    <div className="question-page">
      {!result && <ProgressBar progress={((currentQuestionIndex + 1) / questions.length) * 100} />}
      <QuestionItem
        question={questions[currentQuestionIndex]}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default DailyChampionQuestionPage;
