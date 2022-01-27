import { Component } from 'react';

import { TownItemProps } from '../../interfaces/props/list/TownItemProps';

export default class TownItem extends Component<TownItemProps> {
  render() {
    return (
      <div className="li">
        <div className="government">
          <a href={'/towns/' + this.props.townName}>
            {this.props.townName}{' '}
            <span className="material-icons material-icons-outlined">
              launch
            </span>
          </a>

          <div className="info">
            <span className="material-icons material-icons-outlined">flag</span>
            <p>{this.props.townNation}</p>
            <span className="material-icons material-icons-outlined">
              person
            </span>
            <p>{this.props.townMayor}</p>
          </div>
        </div>
      </div>
    );
  }
}
