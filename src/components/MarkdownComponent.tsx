import { Component } from 'react';

import ReactMarkdown from 'react-markdown';

import MarkdownComponentProps from '../interfaces/props/MarkdownComponentProps';
import MarkdownComponentState from '../interfaces/states/MarkdownComponentState';

import Error from '../views/commonview/Error';

export default class MarkdownComponent extends Component<
  MarkdownComponentProps,
  MarkdownComponentState
> {
  constructor(props: MarkdownComponentProps) {
    super(props);

    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    fetch('/md/' + this.props.mdLink)
      .then((response: Response) => response.text())
      .then((content: string) => {
        this.setState({ data: content });
        console.debug('[DebugMarkdown] \n' + content);
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <ReactMarkdown children={this.state.data} />
      </div>
    );
  }
}
