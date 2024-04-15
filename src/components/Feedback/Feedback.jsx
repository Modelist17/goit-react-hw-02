import React from 'react';
import css from './Feedback.module.css';

const Feedback = ({ feedback }) => {
  const feedbackStatus = Object.keys(feedback);
  const totalFeedback = Object.values(feedback).reduce((acc, curr) => acc + curr, 0);
  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className={css.field}>
      {feedbackStatus.map(item => (
        <p className={css.title} key={item}>
          {item}: {feedback[item]}
        </p>
      ))}
      {totalFeedback > 0 && <p className={css.title}>Total: {totalFeedback}</p>}
      {totalFeedback > 0 && <p className={css.title}>Positive: {positiveFeedback}%</p>}
    </div>
  );
};

export default Feedback;
