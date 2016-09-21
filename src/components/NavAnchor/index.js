import React, { Component } from 'react'
import { push } from 'react-router-redux'
import Anchor from 'grommet/components/Anchor'

export class NavAnchor extends Component {

  constructor () {
    this.onClick = this.onClick.bind(this)
  }

  onClick (event) {
    event.preventDefault();
    this.props.dispatch(push(this.props.path))
  }

  render () {
    const path = this.props.path
    return (
      <Anchor
        {...this.props} href={path}
        onClick={this.onClick}
      />
    )
  }
}

export default connect(select)(NavAnchor)
