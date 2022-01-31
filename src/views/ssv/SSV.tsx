import { Component } from 'react';
import { bake_cookie } from 'sfcookies';

import { createToast } from '../../scripts/Globals';

import '../../styles/form.scss';

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
    else return 'Copy & paste the API server URL';
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="url"
            id="baseUrl"
            defaultValue={this.getUrl()}
            required
          />
          <label htmlFor="baseUrl">Base API Url you were given</label>

          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

interface SSVViewProps {
  urlTo: string;
}
