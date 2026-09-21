import { useEffect, useRef, useState } from "react";
import { Typography, Box } from "@mui/material";

const Timer = ({ timerRunning }) => {
  const [timeRemaining, setTimeRemaining] = useState(1800000);
  const startTimeRef = useRef(0);

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, [timerRunning]);

  useEffect(() => {
    const timerId = setInterval(() => {
      const elapsedTime = Date.now() - startTimeRef.current;
      setTimeRemaining(1800000 - elapsedTime);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [timerRunning]);

  const formattedTime = () => {
    const minutes = Math.floor(timeRemaining / 60000);
    const seconds = String(Math.floor((timeRemaining % 60000) / 1000)).padStart(
      2,
      "0",
    );
    return `${minutes}:${seconds}`;
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 16,
        right: 16,
        bgcolor: "background.paper",
        px: 2,
        py: 1,
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, color: "text.secondary" }}
      >
        {formattedTime()}
      </Typography>
    </Box>
  );
};

export default Timer;
