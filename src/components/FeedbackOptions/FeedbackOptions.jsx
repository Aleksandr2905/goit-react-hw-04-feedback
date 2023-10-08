import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.wrap}>
      {options.map(options => (
        <button
          className={styles.btn}
          key={options}
          type="button"
          onClick={() => {
            onLeaveFeedback(options);
          }}
        >
          {options}
        </button>
      ))}
    </div>
  );
};
