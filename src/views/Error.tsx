import { Component } from 'react';

import '../styles/error.scss';

export default class Error extends Component<ErrorPageProps> {
  getContent() {
    switch (this.props.error) {
      case 404: {
        return (
          <div className="error">
            <span className="material-icons material-icons-outlined error-icon">
              follow_the_signs
            </span>
            <h2>Not Found</h2>
            <p>This page does not exist.</p>
            {this.button()}
          </div>
        );
      }
      case -1: {
        return (
          <div className="error">
            <span className="material-icons material-icons-outlined error-icon">
              report_problem
            </span>
            <h2>Already Done</h2>
            <p>You already did this.</p>
            {this.button()}
          </div>
        );
      }
      case -2: {
        return (
          <div className="error">
            <span className="material-icons material-icons-outlined error-icon">
              sentiment_very_dissatisfied
            </span>
            <h2>Cookies?</h2>
            <p>
              Your browser <b>does not</b> allow cookie usage.
            </p>
          </div>
        );
      }
      default: {
        return (
          <div className="error">
            <span className="material-icons material-icons-outlined error-icon">
              report_problem
            </span>
            <h2>Whoops</h2>
            <p>An unknown error ocurred.</p>
          </div>
        );
      }
    }
  }

  goBack(_event: any) {
    window.history.back();
  }

  button() {
    return <button onClick={this.goBack}>Go back</button>;
  }

  render() {
    return <div className="error-container">{this.getContent()}</div>;
  }
}

interface ErrorPageProps {
  error: number;
}
