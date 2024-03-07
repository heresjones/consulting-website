import React, { useState } from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

const questions = [
  {
    question: "Which Game of Thrones house do you belong to?",
    answers: [
      { text: "Stark", value: 1 },
      { text: "Lannister", value: 2 },
      { text: "Targaryen", value: 3 },
      { text: "Baratheon", value: 4 },
    ],
  },
  {
    question: "Weapon of Choice?",
    answers: [
      { text: "Blade", value: 1 },
      { text: "Needle", value: 2 },
      { text: "Bow and Arrow", value: 3 },
      { text: "Axe", value: 4 },
    ],
  },
  // Add more questions as needed
];

export default function GameOfThronesQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswerClick = (value: number) => {
    // Update the score based on the answer value
    setScore(score + value);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz is finished
      console.log("Quiz completed. Score:", score);
      setIsQuizFinished(true);
    }
  };

  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          {isQuizFinished ? (
            <Typography variant="h5" component="div">
              Quiz completed. Your score: {score}
            </Typography>
          ) : (
            <>
              <Typography variant="h5" component="div">
                {questions[currentQuestion].question}
              </Typography>
              {questions[currentQuestion].answers.map((answer, index) => (
                <Button
                  key={index}
                  variant="contained"
                  onClick={() => handleAnswerClick(answer.value)}
                  sx={{ margin: 1 }}
                >
                  {answer.text}
                </Button>
              ))}
            </>
          )}
        </CardContent>
      </Card>
      {/* Placeholder for Google Ad */}
      <Box sx={{ marginTop: 2, textAlign: "center" }}>
        {/* Integrate Google Ads here */}
        <Typography>Google Ad Placeholder</Typography>
      </Box>
    </Box>
  );
}
