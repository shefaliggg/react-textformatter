import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg`} style={props.mode}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Text Formatter</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to ="/pnpm run buildrivacy">Privacy </Link>
            
            </li>
          
        </ul>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" onChange={props.togglemode} name="radiobtn" id="inlineRadio1" value="default" />
          <label className={`form-check-label text-${props.mode.nav=='dark'?'light':'dark'}`} htmlFor="inlineRadio1">Default Mode</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" onChange={props.togglemode} name="radiobtn" id="inlineRadio1" value="dark" />
          <label className={`form-check-label text-${props.mode.nav=='dark'?'light':'dark'}`} htmlFor="inlineRadio1">Dark Mode</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" onChange={props.togglemode} name="radiobtn" id="inlineRadio2" value="vibrant" />
          <label className={`form-check-label text-${props.mode.nav=='dark'?'light':'dark'}`} htmlFor="inlineRadio2">Vibrant Mode</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" onChange={props.togglemode} name="radiobtn" id="inlineRadio3" value="monochrome"/>
          <label className={`form-check-label text-${props.mode.nav=='dark'?'light':'dark'}`} htmlFor="inlineRadio3">Monochrome Mode</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" onChange={props.togglemode} name="radiobtn" id="inlineRadio3" value="gradient"/>
          <label className={`form-check-label text-${props.mode.nav=='dark'?'light':'dark'}`} htmlFor="inlineRadio3">Gradient Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string}

Navbar.defaultProps = {
    title: 'Text Formatter', about: 'Privacy'
}