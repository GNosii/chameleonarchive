import { Component } from 'react';

import AvatarProps from '../../interfaces/props/profile/AvatarProps';

import { External } from '../../../chameleon.json';

export default class Avatar extends Component<AvatarProps> {
  render() {
    return <img src={External.SkinProvider + this.props.uuid}></img>;
  }
}
