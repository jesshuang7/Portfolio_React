import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

function Header () {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pb-2">
    <a className="navbar-brand" href="index.html" id="myname" >Tzu-Nu (Jessica) Huang</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        {/* <Link to = "/contact" style={{ textDecoration: 'none' }} >Contact</Link> */}
        <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/portfolio">
            <Nav.Link>Portfolio</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/">
            <Nav.Link>About</Nav.Link>
        </LinkContainer>
        {/* <a className="nav-link active" href="/contact">Contact <span className="sr-only">(current)</span></a>
        <a className="nav-link" href="/portfolio">Portfolio </a>
        <a className="nav-link" href="/">About </a> */}
      </div>
    </div>
</nav>  
)
}

export default Header
