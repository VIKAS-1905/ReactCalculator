import styles from "./MyButton.module.css";

export default function MyButton({ btnArr, onButtonClick }) {
  return (
    <div className={styles.flex}>
      {btnArr.map((item, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={() => onButtonClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}