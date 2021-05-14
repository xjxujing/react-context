import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

class Navbar extends Component {
  // static contextType = ThemeContext

  render() {
    // console.log(this.context)
    return (
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context
        const theme = isLightTheme ? light : dark;

        return (
          <nav className="navBar" style={{ backgroundColor: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <ul className="navItems">
              <li>Home</li>
              <li>Home1</li>
              <li>Home2</li>
            </ul>
          </nav>
        )


      }
      }

      </ThemeContext.Consumer >

    )
  }
}

export default Navbar