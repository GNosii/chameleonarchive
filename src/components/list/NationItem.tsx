import { Component } from 'react';

export default class TownItem extends Component<NationItemProps> {
  render() {
    return (
      <div className="li">
        <div className="government">
          <a href={'/nations/' + this.props.nationName}>
            {this.props.nationName}{' '}
            <span className="material-icons material-icons-outlined">
              launch
            </span>
          </a>
        </div>

        <div className="info">
          <span className="material-icons material-icons-outlined">
            location_city
          </span>
          <p>{this.props.nationCapital}</p>
          <span className="material-icons material-icons-outlined">person</span>
          <p>{this.props.nationKing}</p>
        </div>
      </div>
    );
  }
}

interface NationItemProps {
  nationName: string;
  nationKing: string;
  nationCapital: string;
}
