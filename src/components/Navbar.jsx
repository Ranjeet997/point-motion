import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className=''>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item"> */}
                <Link to='/' className="nav-link active navbar-brand">Home</Link>
                {/* </li> */}
                {/* <li className="nav-item"> */}
                <Link to='item' className="nav-link active navbar-brand">Manage Products</Link>
                {/* </li> */}
            </ul>
        </div>
        </nav>
    </div>
  )
}
