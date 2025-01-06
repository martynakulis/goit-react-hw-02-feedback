import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options);

  return (
    <div>
      {optionsKeys.map((option, index) => {
        return (
          <button
            key={index}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            className={css.button}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
