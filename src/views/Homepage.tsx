import { Component } from 'react';
import MarkdownComponent from '../components/MarkdownComponent';

export default class Homepage extends Component {
  render() {
    return <MarkdownComponent mdLink="homepage.md" />;
  }
}
