import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  url from "./url";

var SoaMessage = `<?xml version='1.0' encoding='UTF-8'?>
<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    <S:Body>
        <ns2:getSaldo xmlns:ns2="http://codejava.net/">
        </ns2:getSaldo>
    </S:Body>
</S:Envelope>`


var urlSaldo = url.url + "saldo";
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={message:"0"}
      }
      componentDidMount(){
        console.log("hello")
        var request = new XMLHttpRequest();
        request.open("POST",urlSaldo,true);
        request.onreadystatechange = function(res){
            if (request.readyState===4){
                res = request.responseXML;
                  res = res.getElementsByTagName("return")[0].childNodes[0];
                console.log(res);
                var res2;
                res2 = request.responseXML;
                console.log(res2);
                res = res2.getElementsByTagName("return")[0].childNodes[0].nodeValue;
                this.setState({message: res});
            }
        }.bind(this);
        console.log(this.state.message);
        request.setRequestHeader("Content-type","text/xml")
        console.log("1");
        request.send(SoaMessage);
        // console.log(res);
      }

    render(){
        return(
            <div className="navbar navbar-dark bg-dark box-shadow" >
                <div className="container d-flex justify-content-between">
                    <a href="/Home" className="navbar-brand d-flex align-items-center">
                        <strong>Willy Wangky Factory</strong>
                    </a>
                    <nav className="text-white">
        <strong>Rp {this.state.message}</strong>
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