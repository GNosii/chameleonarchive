import $ from 'cash-dom';

import { Component } from 'react';
import { read_cookie } from 'sfcookies';

import ListProps from '../interfaces/props/ListProps';
import ListState from '../interfaces/states/ListState';
//import ListItem from './ListItem';

var endpoint: string;

export default class ListingContainer extends Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);

    endpoint = read_cookie('base') + this.props.endpoint.toLowerCase();
    console.debug('endpoint = ', endpoint);

    this.state = {
      data: null,
    };

    this.queryEndpoint();
  }

  async queryEndpoint() {
    await fetch(endpoint)
      .then(async (res) => await res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data: data.list });
      })
      .catch((reason: PromiseRejectionEvent) => {
        console.error('Promise rejected');
        $('#error').text = reason.reason;
      });
  }

  render() {
    if (this.state.data !== null)
      return <ul className="listing">{this.state.data}</ul>;
    else
      return (
        <div>
          <h2>
            Could not load <code>{endpoint}</code>
          </h2>
          <p>Check your DevTools console for more information.</p>
          <code id="error"></code>
        </div>
      );
  }
}
