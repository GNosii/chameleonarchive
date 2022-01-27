import { Component } from 'react';
import { bake_cookie } from 'sfcookies';

import SSVViewProps from '../../interfaces/props/views/SSVViewProps';
import { createToast } from '../../scripts/Globals';

export default class SSV extends Component<SSVViewProps> {
  handleSubmit(event: any) {
    event.preventDefault();

    const object: HTMLInputElement = event.target[0];

    console.debug('[DebugForm] Try to set API Base to ' + object.value);

    // for now, we don't need to validate the url since it is an type="url" input object.
    // browser will check for validity before submitting.
    createToast('Done.');

    bake_cookie('base', object.value);

    window.location.href = '/';

    console.debug('api base is valid.');
  }

  getUrl(): string {
    const params: URLSearchParams = new URLSearchParams(window.location.search);
    console.debug('[DebugParams] Params are ' + params);

    if (params.has('api')) return String(params.get('api'));
    else return 'https://sometownyserver.com/api/';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="url">What API base should we use?</label>
          <input type="url" id="url" defaultValue={this.getUrl()}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}
