import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'


class Navbar extends Component {
  // static contextType = ThemeContext

  render() {
    // console.log(this.context)
    return (
      <AuthContext.Consumer>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const { isAuthenticated, toggleAuth } = authContext

          const { isLightTheme, light, dark } = themeContext
          const theme = isLightTheme ? light : dark;

          return (
            <nav className="navBar" style={{ backgroundColor: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <div onClick={toggleAuth}>{isAuthenticated ? 'true' : 'false'}</div>
              <ul className="navItems">
                <li>Home</li>
                <li>Home1</li>
                <li>Home2</li>
              </ul>
            </nav>
          )

        }}

        </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    )
  }
}

export default Navbar