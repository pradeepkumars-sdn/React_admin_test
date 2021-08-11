import React from 'react'
import propTypes from 'prop-types'


export default function header(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Admin</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.title}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        {props.pricing ? <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>: <a className="nav-link" href="#">Please Fill</a>}
        
      </ul>
    </div>
  </div>
</nav> 
        </div>
    )
}

header.defaultProps = {
    title :"You miss to enter the title"
}

header.propTypes = {

    title: propTypes.string
}
