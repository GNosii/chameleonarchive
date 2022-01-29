import { Component } from 'react';
import { read_cookie } from 'sfcookies';

import ListProps from '../interfaces/props/list/ListProps';
import ListState from '../interfaces/states/ListState';

import TownItem from '../components/list/TownItem';
import ResidentItem from '../components/list/ResidentItem';
import NationItem from '../components/list/NationItem';

import '../styles/lists.scss';

var endpoint: string;

export default class ListingContainer extends Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    this.state = {
      data: null,
      isError: false,
    };
  }

  componentDidMount() {
    endpoint = read_cookie('base') + this.props.endpoint.toLowerCase();
    console.debug('[Query] Endpoint = ', endpoint);
    this.queryEndpoint();
  }

  async queryEndpoint() {
    await fetch(endpoint)
      .then(async (res) => await res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data.list,
          isError: false,
        });
      })
      .catch((reason: PromiseRejectionEvent) => {
        console.error('[Promise Rejected] ' + reason);
        this.setState({
          data: null,
          isError: true,
        });
      });
  }

  render() {
    console.debug('[Debug] Rendering ListingContainer');
    if (this.state.data !== null) {
      switch (this.props.type) {
        case 'towns': {
          return (
            <ul className="listing">
              {this.state.data.map((object: any, index: number) => (
                <TownItem
                  key={index}
                  townName={object.name}
                  townNation={object.nation}
                  townMayor={object.mayor}
                />
              ))}
            </ul>
          );
        }
        case 'residents': {
          return (
            <ul className="listing">
              {this.state.data.map((object: any, index: number) => (
                <ResidentItem
                  key={index}
                  resName={object.name}
                  resTown={object.town}
                />
              ))}
            </ul>
          );
        }

        case 'nations': {
          return (
            <ul className="listing">
              {this.state.data.map((object: any, index: number) => (
                <NationItem
                  key={index}
                  nationName={object.name}
                  nationKing={object.king}
                  nationCapital={object.town}
                />
              ))}
            </ul>
          );
        }
      }
    } else {
      if (!this.state.isError) {
        return (
          <div>
            <i>Getting the info...</i>
          </div>
        );
      } else {
        return (
          <div>
            <i>Could not get data.</i>
            <br />
            <i>
              Check your <b>DevTools console</b> for more details.
            </i>
          </div>
        );
      }
    }
  }
}
