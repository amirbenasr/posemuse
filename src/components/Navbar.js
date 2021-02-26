import React from 'react'
import logo from '../posemuse.png'
//import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
    return (

        <div className="div">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">

                    <a className="navbar-brand" href="#"><img src={logo} alt="" className="logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <FontAwesomeIcon icon={faBars} style={{color:'white'}} ></FontAwesomeIcon>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Activity <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gig-centers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Jobs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Producers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Singers</a>
                            </li>

                        </ul>

                    </div>
                </div>


            </nav>

        </div>





    )
}

export default Navbar
