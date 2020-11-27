import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return(
            <div class="navbar navbar-dark bg-dark box-shadow" >
                <div class="container d-flex justify-content-between">
                    <a href="#" class="navbar-brand d-flex align-items-center">
                        <strong>Willy Wangky Factory</strong>
                    </a>
                    <nav class="text-white">
                        <strong>Saldo</strong>
                        <button class="btn-primary ml-3" type="button" href="#">
                            logout
                        </button>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;