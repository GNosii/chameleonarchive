import { Component } from 'react';

import ErrorPageProps from '../interfaces/props/ErrorPageProps';

export default class Error extends Component<ErrorPageProps> {
  getContent() {
    switch (this.props.error) {
      case 404: {
        return (
          <>
            <span className="material-icons-outlined">report</span>
            <h2>Not Found</h2>
            <p>This page does not exist.</p>
          </>
        );
      }
    }
  }

  render() {
    return (
      <div>
        {this.getContent()}
        <button onClick={window.history.back}>Go back</button>
      </div>
    );
  }
}
