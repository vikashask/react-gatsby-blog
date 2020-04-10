import React from "react"
import logo from "./logo.svg"
import { Link } from "gatsby"
import "./style.css"

class Header extends React.Component {
  render() {
    return (
      <div className="header-main">
        <Link className="logo-link" to={`/`}>
          <img src={logo} alt="22 Boxes logo" className="logo-img" />
        </Link>

        <div className="header-nav">
          <ul className="nav-ul">
            <li className="nav-li">
              <h1 className="li-h1">
                <Link className="li-link" to={`/`}>
                  Blog
                </Link>
              </h1>
            </li>
            <li className="nav-li">
              <h1 className="li-h1">
                <Link className="li-link" to={`/work`}>
                  Work
                </Link>
              </h1>
            </li>
            <li
              style={{
                float: "left",
              }}
            >
              <h1 className="li-h1">
                <Link className="li-link" to={`/about`}>
                  About
                </Link>
              </h1>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
