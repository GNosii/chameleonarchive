import { Component } from 'react';

import $ from 'cash-dom';

import IProps from '../interfaces/props/IProps';
import IState from '../interfaces/states/IState';

import '../styles/sidebar.scss';

class Sidebar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      visible: true,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.actuallyClose = this.actuallyClose.bind(this);
  }

  componentDidMount() {
    $(document).on('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (this.state.visible) this.actuallyClose();
        else this.open();
      }
    });
    this.open();
  }

  open() {
    this.setState({ visible: true });

    console.debug('Opening Sidebar.');

    $('.sidebar').removeClass('hidden');
    document.querySelector('main')!.style.marginLeft = '250px';

    $('main').addClass('blurred');
  }

  close(event: any) {
    console.log(event);
    this.actuallyClose();
  }

  actuallyClose() {
    this.setState({ visible: false });

    console.debug('Closing sidebar.');

    $('.sidebar').addClass('hidden');
    document.querySelector('main')!.style.marginLeft = '0';

    $('main').removeClass('blurred');
  }

  render() {
    return (
      <aside>
        <div className="sidebar">
          <h2>TownyUI</h2>
          <div className="items">
            <div className="item">
              <span className="material-icons">face</span>
              <a href="/residents"> Residents</a>
            </div>
            <div className="item">
              <span className="material-icons">location_city</span>
              <a href="/towns"> Towns</a>
            </div>
            <div className="item">
              <span className="material-icons">flag</span>
              <a href="/nations"> Nations</a>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
