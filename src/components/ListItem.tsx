import { Component } from 'react';

import ListItemProps from '../interfaces/props/ListItemProps';

export default class ListItem extends Component<ListItemProps> {
    constructor(props: ListItemProps) {
        super(props);
    }

    render() {
        return(
            <li>
                {this.props.title}
                {this.props.link_to}
            </li>
        );
    }
}
