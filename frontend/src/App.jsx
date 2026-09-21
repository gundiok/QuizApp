import { useState } from "react";
import {
  Button,
  Typography,
  Container,
  Box,
  Card,
  CardContent,
  List,
  ListItemButton,
} from "@mui/material";
import "./App.css";
import questionsService from "./services/questions";
import Timer from "./Timer";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  const handleStartClick = async () => {
    const data = await questionsService.getAll();
    setQuestions(data);
    setTimerRunning(true);
  };

  const currentQuestion = questions[questionIndex];
  const correctAnswer =
    questions.length >= 1 ? questions[questionIndex].correctAnswer : "";

  const handleSelectAnswer = (userAnswer) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(userAnswer);
    setUserAnswers((prev) => {
      return [...prev, userAnswer];
    });
    if (userAnswer === correctAnswer) {
      setScore((p) => p + 1);
    }
  };

  const handleNextQuestion = () => {
    setQuestionIndex((p) => p + 1);
    setSelectedAnswer(null);
  };

  return (
    <Container maxWidth="sm" className="app">
      <aside>{timerRunning && <Timer timerRunning={timerRunning} />}</aside>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: 500, color: "primary.main", mt: 4 }}
      >
        FullStack Quiz
      </Typography>
      {questions.length === 0 && (
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" onClick={handleStartClick}>
            Start
          </Button>
        </Box>
      )}
      {currentQuestion && !isQuizFinished && (
        <Card sx={{ mt: 10 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              <b>
                Question {questionIndex + 1} of {questions.length}
              </b>
              <p>{currentQuestion.question}</p>
            </Typography>

            <List>
              {currentQuestion.options.map((option) => {
                const isSelected = option === selectedAnswer;
                const isCorrect = option === correctAnswer;

                let bgColor;
                if (isSelected) {
                  bgColor = isCorrect ? "success.light" : "error.light";
                }
                return (
                  <ListItemButton
                    key={option}
                    onClick={() => handleSelectAnswer(option)}
                    disabled={selectedAnswer !== null}
                    sx={{
                      mb: 1,
                      borderRadius: 1,
                      bgcolor: bgColor,
                      "&.Mui-disabled": { opacity: 1 },
                    }}
                  >
                    {option}
                  </ListItemButton>
                );
              })}
            </List>

            <Box sx={{ textAlign: "right", mt: 2 }}>
              {questionIndex === questions.length - 1 ? (
                <Button
                  variant="outlined"
                  onClick={() => setIsQuizFinished(true)}
                >
                  Finish
                </Button>
              ) : (
                <Button variant="outlined" onClick={handleNextQuestion}>
                  Next
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      )}

      {isQuizFinished && (
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="h5">Quiz complete!</Typography>
          <Typography variant="body1">Score: {score}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default App;
