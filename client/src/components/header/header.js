import React from "react";
import "./style.css";

function Header () {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light pb-2">
    <a className="navbar-brand" href="index.html" id="myname" >Tzu-Nu (Jessica) Huang</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        <a className="nav-link active" href="contact.html">Contact <span className="sr-only">(current)</span></a>
        <a className="nav-link" href="portfolio.html">Portfolio </a>
        <a className="nav-link" href="index.html">About </a>
      </div>
    </div>
</nav>  
)
}

export default Header
