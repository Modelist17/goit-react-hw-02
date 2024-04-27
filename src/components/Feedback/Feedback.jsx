import React from 'react';
import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  const feedbackStatus = Object.keys(feedback);

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
