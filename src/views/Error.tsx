import { Component } from 'react';

import ErrorPageProps from '../interfaces/props/ErrorPageProps';

export default class Error extends Component<ErrorPageProps> {
  constructor(props: ErrorPageProps) {
    super(props);
  }

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
        <a onClick={history.back}>Go back</a>
      </div>
    );
  }
}
