import { ReactNode } from "react";
import { ColorBox } from "../ColorBox/ColorBox";
import "./split-screen.css";

export const SplitScreen = ({
  children,
  guessColor,
  answerColor,
}: {
  children: ReactNode;
  guessColor: string;
  answerColor: string;
}) => {
  return (
    <>
      <div className="split-screen">
        <div className="grid-item">
          <ColorBox color={answerColor} />
        </div>
        <div
          className="grid-item"
          style={{ backgroundColor: guessColor, width: '40vw' }}
        ></div>
      </div>
      <div className="form">{children}</div>
    </>
  );
};
