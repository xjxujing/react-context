import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext'

class ThemeToggle extends Component {

  static contextType = ThemeContext

  render() {
    const { toggleTheme } = this.context
    return (
      <button onClick={toggleTheme}>更换</button>
    )
  }
}

export default ThemeToggle