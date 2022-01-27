import { Component } from 'react';

import $ from 'cash-dom';

import IProps from '../interfaces/props/IProps';
import IState from '../interfaces/states/IState';

import '../styles/sidebar.scss';

import { isMobile } from 'react-device-detect';

// TODO RESPONSIVE
// ON MOBILE DO NOT START WITH THIS OPEN!!
class Sidebar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      visible: true,
    };

    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    if (!isMobile) {
      console.debug('[Resp] Showing sidebar because isMobile is false.');
      $(document).on('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          if (this.state.visible) this.close();
          else this.open();
        }
      });
      this.close();
    } else {
      console.debug('[Resp] Hiding sidebar because isMobile is true.');
    }
  }

  hoverOn(_event: any) {
    $('main').addClass('blurred');
  }

  hoverOff(_event: any) {
    $('main').removeClass('blurred');
  }

  open() {
    this.setState({ visible: true });

    console.debug('[Debug-Sidebar] Opening Sidebar.');

    $('.sidebar').removeClass('hidden');
    document.querySelector('main')!.style.marginLeft = '250px';
  }

  close() {
    this.setState({ visible: false });

    console.debug('[Debug-Sidebar] Closing sidebar.');

    $('.sidebar').addClass('hidden');
    document.querySelector('main')!.style.marginLeft = '0';

    $('main').removeClass('blurred');
  }

  render() {
    return (
      <aside>
        <div
          className="sidebar"
          onMouseOver={this.hoverOn}
          onMouseOut={this.hoverOff}
        >
          <div className="brand">
            <h2>TownyUI</h2>
          </div>
          <ul>
            <li>
              <span className="material-icons">person</span>
              <a href="/residents">Residents</a>
            </li>
            <li>
              <span className="material-icons">location_city</span>
              <a href="/towns">Towns</a>
            </li>
            <li>
              <span className="material-icons">flag</span>
              <a href="/nations">Nations</a>
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
