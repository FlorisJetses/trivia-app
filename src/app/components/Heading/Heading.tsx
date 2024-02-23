import styles from "./heading.module.css";

export function Heading({ children }: React.PropsWithChildren) {
  return <h1 className={styles.heading}>{children}</h1>;
}
