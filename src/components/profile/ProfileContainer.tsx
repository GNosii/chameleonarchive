import { Component } from 'react';
import Avatar from './Avatar';

import Config from '../../chameleon.json';

var endpoint: string;

export default class ProfileContainer extends Component<
  ProfileProps,
  ProfileState
> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      data: null,
      isError: false,
    };
  }

  componentDidMount() {
    endpoint = this.props.endpoint.toLowerCase();
    console.debug('[Query] Endpoint = ', endpoint);
    this.queryEndpoint();
  }

  async queryEndpoint() {
    await fetch(endpoint)
      .then(async (res) => await res.json())
      .then((data) => {
        this.setState({
          data: data,
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
    if (this.state.data !== null) {
      switch (this.props.type) {
        case 'residents': {
          return (
            <div>
              <h1>{this.state.data.formattedName}</h1>
              <Avatar
                provider={Config.External.SkinProvider}
                uuid={this.state.data.uuid}
              />
            </div>
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

interface ProfileState {
  data: any;
  isError: boolean;
}

interface ProfileProps {
  name?: string;
  endpoint: string;
  type: string;
}
