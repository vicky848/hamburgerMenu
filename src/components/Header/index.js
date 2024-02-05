// Write your code here
import Popup from 'reactjs-popup'

import {withRouter, Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="navbar-header">
    <div className="navbar-contend">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          className="log"
          alt="website logo"
        />
      </Link>

      <Popup
        modal
        trigger={
          <button
            className="icon-button"
            type="button"
            data-testid="hamburgerIconButton"
            aria-label="Open Navigation Menu"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              aria-label="Close Popup"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="link-list">
              <li className="link-item">
                <Link className="navbar-link" to="/" onClick={() => close()}>
                  <AiFillHome size="35" />
                  <p className="nav-content">Home</p>
                </Link>
              </li>

              <li className="link-item">
                <Link
                  className="navbar-link"
                  to="/about"
                  onClick={() => close()}
                >
                  <BsInfoCircleFill size="33" />
                  <p className="nav-content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
