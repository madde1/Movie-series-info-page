import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <div>      
            <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                
                    <ul className="nav navbar-nav d-inline-block mr-auto">
                        <li className="ml-5 nav-item d-inline-block active">
                            <Link className="nav-link" to="/"><i id="home-logo" class="fas fa-home "></i><span className="sr-only">(current)</span></Link>
                        </li>   
                                        
                        <li className="nav-item d-inline-block dropdown">
                            <p className="nav-link dropdown-toggle font-weight-normal text-dark"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Projekt
                            </p>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/movie-tvseries-search/">Movie Tv Series Search</Link>
                            <Link className="dropdown-item" to="/social-media-app/">Social media app</Link>
                            {/* <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a> */}
                        </div>
                        </li>
                    </ul>
                  
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                                <li className="nav-item d-inline-block mr-2">
                                <i className="fab fa-github-square fa-2x" id="github-logo"></i>
                                </li>
                                <li className="nav-item d-inline-block mr-2">
                                <i class="fab fa-linkedin fa-2x" id="github-logo"></i>
                                </li>
                                <li className="nav-item d-inline-block mr-2">
                                    <i className="fab fa-react fa-2x" id="react-logo"/>
                                </li>

                                
                    </ul>
             </nav>
        </div>
    )
}
export default Navbar