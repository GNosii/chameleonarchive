import { Component } from 'react';

import ErrorPageProps from '../interfaces/props/ErrorPageProps';

export default class Error extends Component<ErrorPageProps> {
  getContent() {
    switch (this.props.error) {
      case 404: {
        return (
          <>
            <span className="material-icons material-icons-outlined">
              report
            </span>
            <h2>Not Found</h2>
            <p>This page does not exist.</p>
          </>
        );
      }
    }
  }

  goBack(_event: any) {
    window.history.back();
  }
  render() {
    return (
      <div>
        {this.getContent()}
        <button onClick={this.goBack}>Go back</button>
      </div>
    );
  }
}
