import styles from "./notification.module.css";

export function Notification({ isCorrect }: { isCorrect?: boolean }) {
  const onPlayAgainClick = () => {
    window.location.reload();
  };
  if (typeof isCorrect === "undefined") {
    return <div className={styles.notification} />;
  }
  return (
    <div className={styles.notification}>
      {isCorrect && (
        <>
          <p>YES! Thats correct!!</p>
          <button onClick={onPlayAgainClick}>Play again!</button>
        </>
      )}
      {!isCorrect && (
        <>
          <p style={{ color: "red" }}>Wrooooong!</p>
          <button onClick={onPlayAgainClick}>Play again!</button>
        </>
      )}
    </div>
  );
}
