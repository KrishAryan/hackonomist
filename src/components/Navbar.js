import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode==="light"?"light":"dark"} bg-${props.mode==="light"?"gray":"dark"}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
      <li className="nav-item">
          <Link className={`nav-link text-${props.mode==="light"?"dark":"light"}`} to="/about">{props.about}</Link>
      </li>
      <li className="nav-item">
        <div className={`form-check form-switch my-2 text-${props.mode==="light"?"dark":"light"}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable dark mode 🌙</label>
        </div>
      </li>
      
      </ul>
      <h4> <div className="hdrLgnRgsIn ">
                <div className="usercard">
                  Hi User !
                </div>
              </div></h4>
             
           
      
    </div>
  </div>
</nav></>
  )
}
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}
Navbar.defaultProps={
    title: "Set title here",
    about: "Set about here"
}
