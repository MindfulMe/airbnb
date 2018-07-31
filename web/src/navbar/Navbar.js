import React, {Component} from 'react';

import { Link } from 'react-router'
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';
require('./navbar.component.scss');

import LoginModal from './login-modal.js'
import SignUp from './signup'
import Help from './help';

let RadiumLink = Radium(Link);

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '24px',
    height: '20px',
    left: '10px',
    top: '25px'
  },
  bmBurgerBars: {
    background: '#ff5a5f'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

//Code for the NavBar
class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <header className="header">
        <Menu styles={styles}>
          <a id="home" className="menu-item" href="/">Home</a>
          <RadiumLink className="menu-item" to="/host">Become a Host</RadiumLink>
          <a id="login" className="menu-item" href="/login">Sign In</a>
          <a id="login" className="menu-item" href="/login">Sign Up</a>
        </Menu>
        <a href="/" className="header_logo"><img className="air-logo" src="/assets/images/airbnb.png" /></a>
        <div className="menu">
          <Link to="/host"><span className="become-a-host">Become a Host</span></Link>
          <SignUp className="left-border-menu" />
          {/* <a href="/auth/facebook" className="left-border-menu">Login</a> */}
          {/* <a onClick={this.handleClick}><span className="left-border-menu">Login</span></a> */}
          <LoginModal className="left-border-menu" />
          <Help className="left-border-menu" />
        </div>
      </header>
    );
  }
};

export default Navbar;
