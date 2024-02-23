"use client";
import confetti from "canvas-confetti";

export default function Page() {
  return (
    <div>
      <button
        type="button"
        onClick={(_) => {
          confetti({
            particleCount: 500,
            spread: 200,
          });
        }}
      >
        Trigger Confetti
      </button>
    </div>
  );
}
