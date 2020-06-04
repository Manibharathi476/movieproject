import React from 'react';
import './style.css';

const Nav = () => {
    return (
  <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="">Movie Fact</a><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    
                </div>
            </div>
        </nav>
    )
}

export default Nav;