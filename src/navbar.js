import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div className="navbar navbar-dark bg-dark box-shadow" >
                <div className="container d-flex justify-content-between">
                    <a href="/Home" className="navbar-brand d-flex align-items-center">
                        <strong>Willy Wangky Factory</strong>
                    </a>
                    <nav className="text-white">
                        <strong>Saldo</strong>
                        <Link to=  "/login">
                            <button className="btn-primary ml-3" type="button" >
                            logout
                            </button>
                        </Link>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;