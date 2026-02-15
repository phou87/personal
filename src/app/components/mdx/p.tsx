import styles from './p.module.css';

interface Props {
  children: React.ReactNode;
}

export function P(props: Props) {
  return <p className={styles.paragraph}>{props.children}</p>;
}
