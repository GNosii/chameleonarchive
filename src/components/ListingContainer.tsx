import $ from 'cash-dom';

import { Component } from 'react';
import { read_cookie } from 'sfcookies';

import ListProps from '../interfaces/props/ListProps';
import ListState from '../interfaces/states/ListState';

import TownItem from '../components/list/TownItem';

import '../styles/lists.scss';

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
    console.debug(this.state.data);
    if (this.state.data !== null) {
      switch (this.props.type) {
        case 'towns': {
          return (
            <ul className="listing">
              {this.state.data.map((object: any) => (
                <TownItem
                  townName={object.name}
                  townNation={object.nation}
                  townMayor={object.mayor}
                />
              ))}
            </ul>
          );
        }
      }
    } else {
      return (
        <div>
          <h2>Please wait...</h2>
          <code id="error"></code>
        </div>
      );
    }
  }
}
