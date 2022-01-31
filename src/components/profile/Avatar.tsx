import { Component } from 'react';

export default class Avatar extends Component<AvatarProps> {
  render() {
    return <img src={this.props.provider + this.props.uuid}></img>;
  }
}

interface AvatarProps {
  provider: string;
  uuid: string;
}
