import { Component } from 'react';

import IProps from '../interfaces/props/IProps';
import IState from '../interfaces/states/IState';

class Sidebar extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            visible: true
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.actuallyClose = this.actuallyClose.bind(this);
    }

    componentDidMount() {
        document.addEventListener(('keydown'), (event) => {
            if (event.key === "Escape") {
                if (this.state.visible) this.actuallyClose()
                else this.open();
            }
        })
        this.open();
    }

    open() {
        this.setState({ visible: true });

        console.debug("Opening Sidebar.");
        document.querySelector<HTMLElement>(".sidenav")!.style.width = "250px";
        document.querySelector("main")!.style.marginLeft = "250px";

        document.querySelector(".items")!.classList.remove("hiding");
        document.querySelector("main")!.classList.add("blurred");
    }


    close(event: any) {
        console.log(event);
        this.actuallyClose();
    }

    actuallyClose() {
        this.setState({ visible: false });

        console.debug("Closing sidebar.");
        document.querySelector<HTMLElement>(".sidenav")!.style.width = "0";
        document.querySelector("main")!.style.marginLeft = "0";

        document.querySelector(".items")!.classList.add("hiding");
        document.querySelector("main")!.classList.remove("blurred");
    }

    render() {
        return (
            <aside>
                <div className="sidenav">
                    <button className="close" onClick={this.close}>
                        <span className="material-icons">close</span>
                    </button>
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
