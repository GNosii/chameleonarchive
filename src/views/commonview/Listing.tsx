import { Component } from 'react';

import ListingContainer from '../../components/ListingContainer';
import ListingViewProps from '../../interfaces/props/views/ListingViewProps';

export default class Listing extends Component<ListingViewProps> {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ListingContainer
          type={this.props.type}
          endpoint={'' + this.props.name}
        />
      </div>
    );
  }
}
