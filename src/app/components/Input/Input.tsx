import styles from "./input.module.css";

export function Input(props: any) {
  return (
    <input
      className={`${styles.input}`}
      type="text"
      name="color name"
      placeholder="Color name..."
      {...props}
    />
  );
}
