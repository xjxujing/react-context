import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'


class Navbar extends Component {
  static contextType = ThemeContext

  render() {
    const { isLightTheme, light, dark } = this.context
    const theme = isLightTheme ? light : dark
    return (
      <ul className="bookList" style={{color: theme.syntax, backgroundColor: theme.bg}}>
        <li style={{ backgroundColor: theme.ui}}>冬牧场</li>
        <li style={{ backgroundColor: theme.ui}}>走夜路请放声歌唱</li>
        <li style={{ backgroundColor: theme.ui}}>阿勒泰的角落</li>
      </ul>
    )
  }
}

export default Navbar