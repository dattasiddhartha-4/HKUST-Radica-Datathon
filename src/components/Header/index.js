import React, { Component } from 'react';
import { Link } from 'react-router';

import './styles.sass';

var full;
var rank;
var category;

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    full = window.location.href.replace('http://localhost:8080/', '');
    this.previousWidth = 0;
    this.menuButton = (
      <button className="menuBtn"
        onClick={
          () => {
            document.querySelector(".menu").classList.toggle("open");
          }
        }
      >
        MENU
      </button>
    );

    this.loggedInMenu = (
      <div className="menu">
        <Link onlyActiveOnIndex={true} key={1} to="/" activeClassName="activeNavLink" className="navLink">
          Home
        </Link>
        <Link onlyActiveOnIndex={true} key={2} to="/top/male" activeClassName="activeNavLink" className="navLink">
          Top 50
        </Link>
      </div>
    );

    this.loggedOutMenu = (
      <div className="menu loginMenu">
        <Link onlyActiveOnIndex={true} key={5} activeClassName="activeNavLink" className="navLink">
          LogIn / Sign Up
        </Link>
      </div>
    );

    this.setNav();
    this.setMenuState(window.innerWidth);
    this.previousWidth = window.innerWidth;

  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setMenuState(window.innerWidth);
    });
  }

  setMenuState(width) {
    if (this.previousWidth !== width) {
      if (width > 768) {
        const menu = document.querySelector('div.menu');
        if(menu) {
          menu.classList.remove("open");
        }
        this.setState({menuActive: false});
      } else {
        this.setState({menuActive: true});
      }
      this.previousWidth = width;
    }
  }

  setNav() {
    // check for auth here
    const True = true;
    if (True) {
      this.setState({ nav: this.loggedInMenu });
    } else {
      this.setState({ nav: this.loggedOutMenu });
    }
  }

  render() {
    return (
      <header className="header">
        <h1>
          <Link onlyActiveOnIndex={true} to="/" className="logo">
            FASHISM
          </Link>
        </h1>
        {this.state.menuActive ? this.menuButton: ""}
        {this.state.nav}
      </header>
    );
  }
}

export default Header;
