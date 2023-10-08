import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../NoFeedback/Notification';
import { Section } from '../Section/Section';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    this.setState(prevState => ({ [event]: prevState[event] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const state = this.state;

    return (
      <>
        <Section title={`Please leave feedback`}>
          <FeedbackOptions 
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title={`Statistics`}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </>
    );
  }
}
