import { Component } from 'react';

export default class ResidentItem extends Component<ResidentItemProps> {
  render() {
    return (
      <div className="li">
        <div className="resident">
          <a href={'/residents/' + this.props.resName}>
            {this.props.resName}{' '}
            <span className="material-icons material-icons-outlined">
              launch
            </span>
          </a>
        </div>

        <div className="info">
          <span className="material-icons material-icons-outlined">
            location_city
          </span>
          <p>{this.props.resTown}</p>
        </div>
      </div>
    );
  }
}

interface ResidentItemProps {
  resName: string;
  resTown: string;
}
