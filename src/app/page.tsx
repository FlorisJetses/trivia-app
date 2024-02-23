"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import styles from "./page.module.css";
import { Input } from "./components/Input/Input";
import { SplitScreen } from "./components/SplitScreen/SplitScreen";
import { Heading } from "./components/Heading/Heading";
import { Notification } from "./components/Notification/Notification";
import "./shake.css";

export default function Home() {
  const [colorName, setColorName] = useState("");
  const [inputValue, setValue] = useState("");
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean>();

  useEffect(() => {
    const getRandomColor = async () => {
      try {
        const res = await fetch("/api/colors");
        const color = await res.json();
        console.log(color);
        setAnswer(color.answer);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomColor();
  }, []);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    setColorName(inputValue);
    if (!inputValue) return;
    if (inputValue?.trim() !== answer) {
      setValue("");
      setIsCorrect(false);
      document.body.classList.add("animate");

      setTimeout(() => {
        document.body.classList.remove("animate");
      }, 500);
    } else {
      setIsCorrect(true);
      confetti({
        particleCount: 500,
        spread: 200,
      });
    }
  };

  return (
    <main className={styles.main}>
      <SplitScreen guessColor={colorName} answerColor={answer}>
        <Heading>Guess the color name</Heading>
        <form onSubmit={onSubmitHandler}>
          <Input
            value={inputValue}
            onChange={(e: any) => setValue(e.target.value)}
          />
        </form>
        <Notification isCorrect={isCorrect} />
      </SplitScreen>
    </main>
  );
}
