import { Component } from 'react';

import ErrorPageProps from '../../interfaces/props/views/ErrorPageProps';

import '../../styles/error.scss';

export default class Error extends Component<ErrorPageProps> {
  getContent() {
    switch (this.props.error) {
      case 404: {
        return (
          <div className="error">
            <span className="material-icons material-icons-outlined error-icon">
              report
            </span>
            <h2>Not Found</h2>
            <p>This page does not exist.</p>
          </div>
        );
      }
      case -1: {
        return (
          <div className="error">
            <span className="material-icons material-icons-outlined error-icon">
              report
            </span>
            <h2>Already Done</h2>
            <p>You already did this.</p>
          </div>
        );
      }
      default: {
        return (
          <div className="error">
            <span className="material-icons material-icons-outlined error-icon">
              report
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
  render() {
    return (
      <div className="error-container">
        {this.getContent()}
        <button onClick={this.goBack}>Go back</button>
      </div>
    );
  }
}
