import React, { useCallback } from 'react'
import ChocoAvailable from './choco-available';
import Navbar from './navbar';
import url from './url'

var SoaMessage = `<?xml version='1.0' encoding='UTF-8'?>
<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    <S:Body>
        <ns2:getChocoAvail xmlns:ns2="http://codejava.net/">
        </ns2:getChocoAvail>
    </S:Body>
</S:Envelope>`

var urlChoc = url.url +"choco-avail";

export default class ChocoGrid extends React.Component{
    constructor(props){
      super(props);
      this.state={messages:[]}
    }
    componentDidMount(){
      console.log("hello")
      var request = new XMLHttpRequest();
      request.open("POST",urlChoc,true);
      request.onreadystatechange = function(res){
          if (request.readyState===4){
              res = request.responseXML;
              console.log(res);
                res = res.getElementsByTagName("return")[0].childNodes[0];
              console.log(res);
              var res2;
              res2 = request.responseXML;
              console.log(res2);
              res = res2.getElementsByTagName("return")[0].childNodes[0].nodeValue;
              this.setState({message: res});
              var obj = JSON.parse(res)
              console.log(obj.chocs)
            this.setState({messages: obj.chocs});
          }
      }.bind(this);
      console.log(this.state.message);
      request.setRequestHeader("Content-type","text/xml")
      console.log("1");
      request.send(SoaMessage);
      // console.log(res);
    }

    render(){
        // if(this.state.messages)
        const chocolateAvailable = this.state.messages.map(
            message => <ChocoAvailable key={message._id} message={message} />
          )
      
          return(
            
            <div>
              <header>
                <Navbar/>
              </header>
                    <div className="container">
                    <div className= "row">
                        {chocolateAvailable}
                    </div>
                    </div>
            </div>
            
          )
    }
}

