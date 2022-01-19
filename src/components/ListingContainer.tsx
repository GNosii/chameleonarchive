import { Component } from 'react';

import ListProps from '../interfaces/props/ListProps';
import ListState from '../interfaces/states/ListState';
//import ListItem from './ListItem';

export default class ListingContainer extends Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);

    this.state = {
      data: null,
    };

    this.queryEndpoint();
  }

  async queryEndpoint() {
    await fetch(this.props.endpoint)
      .then(async (res) => await res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data.list });
      })
      .catch((reason: PromiseRejectionEvent) => {
        console.error('Promise rejected > ' + reason);
      });
  }

  render() {
    if (this.state.data !== null)
      return <ul className="listing">{this.state.data}</ul>;
    else
      return (
        <div>
          <h2>
            Could not load <code>{this.props.endpoint}</code>
          </h2>
          <p>Check your DevTools console for more information.</p>
        </div>
      );
  }
}
