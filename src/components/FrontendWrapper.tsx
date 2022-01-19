import { Component } from 'react'

export default class FrontendWrapper extends Component {
  render() {
    return <main role="main">{this.props.children}</main>
  }
}
