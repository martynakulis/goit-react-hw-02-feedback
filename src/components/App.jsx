import React, { Component } from 'react';
import Statistics from './Feedback/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Feedback/Section';
import Notification from './Feedback/Notifications';

class App extends Component {
  static defaultProps = {
    step: 1,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = e => {
    const { name } = e.target;
    this.setState((state, props) => ({
      [name]: state[name] + props.step,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let sum = good + neutral + bad;
    return sum;
  };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    let sum = good + neutral + bad;
    let percentage = ((good / sum) * 100).toFixed();
    return percentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
