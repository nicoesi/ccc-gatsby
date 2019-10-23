import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo-large.svg"
import menuIcon from "../../images/menu.svg"

class Header extends Component {
  openSidebar() {
    document.getElementById("sidebar").style.display = "block"
  }

  closeSidebar() {
    document.getElementById("sidebar").style.display = "none"
  }
  render() {
    let page = this.props.page
    return this.props.smallScreen ? (
      <div className="sidebar">
        <button onClick={this.openSidebar} className="sidebar-button-off">
          <img src={menuIcon} alt="Menu" className="menu-icon"></img>
        </button>
        <div
          className="sidebar-inner"
          style={{ display: "none" }}
          id="sidebar"
          onClick={this.closeSidebar}
        >
          <button className="sidebar-button-on">
            <img src={menuIcon} alt="Menu" className="menu-icon"></img>
          </button>
          <Link to="/" className="sidebar-link">
            <button className="sidebar-item">
              <img
                src="https://static1.squarespace.com/static/5ca5029a8dfc8c6c248320ad/t/5ca6a3f17817f7bd461bbaa8/1570580989800/?format=1500w"
                alt="Crafty Logo"
                className="logo"
              ></img>
            </button>
          </Link>
          <Link to="/work" className="sidebar-link">
            <button className="sidebar-item">SHOP</button>
          </Link>
          {/* <Link to="/about" className="sidebar-link">
            <button className="sidebar-item">ABOUT</button>
          </Link> */}
          <Link to="/contact" className="sidebar-link">
            <button className="sidebar-item">CONTACT</button>
          </Link>
        </div>
      </div>
    ) : (
      <header className="header">
        <Link to="/">
          <button className={page === "home" ? "button" : "button"}>
            <img
              src="https://static1.squarespace.com/static/5ca5029a8dfc8c6c248320ad/t/5ca6a3f17817f7bd461bbaa8/1570580989800/?format=1500w"
              alt="Crafty Logo"
              className="logo"
            ></img>
          </button>
        </Link>
        <Link to="/collection/shop">
          <button className={page === "collection/shop" ? "button" : "button"}>
            Shop
          </button>
        </Link>

        <Link to="/contact">
          <button className={page === "contact" ? "button" : "button"}>
            Contact
          </button>
        </Link>
        <button className={page === "profile" ? "button login-cart" : "button login login-cart"}>
          <div id="c7-login"></div>
        </button>
        <button className={page === "cart" ? "button login-cart" : "button login-cart"}>
          <div id="c7-cart"></div>
        </button>
      </header>
    )
  }
}
export default Header
