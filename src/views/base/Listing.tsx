import { Component } from 'react';

import ListingContainer from '../../components/ListingContainer';
import ListingViewProps from '../../interfaces/props/ListingViewProps';

export default class Listing extends Component<ListingViewProps> {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ListingContainer endpoint={'' + this.props.name} />
      </div>
    );
  }
}
