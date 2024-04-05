import { useState } from "react";

const Questions = ({ data }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = data[currentQuestionIndex];
  return (
    // <div>
    //   {data.map((item, index) => (
    //     <div key={index}>
    //       <h3>Question: {item.Question}</h3>
    //       <p>Option A: {item["Option A"]}</p>
    //       <p>Option B: {item["Option B"]}</p>
    //       <p>Option C: {item["Option C"]}</p>
    //       <p>Correct Answer: {item["Correct Answer"]}</p>
    //     </div>
    //   ))}
    // </div>
    <div>
      <h3>Question: {currentQuestion.Question}</h3>
      <p>Option A: {currentQuestion["Option A"]}</p>
      <p>Option B: {currentQuestion["Option B"]}</p>
      <p>Option C: {currentQuestion["Option C"]}</p>
      <p>Correct Answer: {currentQuestion["Correct Answer"]}</p>
      <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={currentQuestionIndex === data.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Questions;
