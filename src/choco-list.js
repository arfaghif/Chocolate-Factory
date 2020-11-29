import React, { Component } from 'react';
import ChocolateView from './chocolate-view';
import Navbar from './navbar';
import url from './url'
var SoaMessage = `<?xml version='1.0' encoding='UTF-8'?>
<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    <S:Body>
        <ns2:getChocoList xmlns:ns2="http://codejava.net/">
        </ns2:getChocoList>
    </S:Body>
</S:Envelope>`

var urlChoc = url.url + "choco-list";

class ChocoList extends Component {
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
        this.setState({messages: obj.list});
      }
    }.bind(this);
    console.log(this.state.message);
    request.setRequestHeader("Content-type","text/xml")
    console.log("1");
    request.send(SoaMessage);
    // console.log(res);
  }

  render() {
      const chocolateViews = this.state.messages.map(
        message => <ChocolateView key={message._id} message={message} />
      )
  
      return(
        <html>
            <body>
              <header>
                <Navbar/>
              </header>
                <div class="list-group">
                  <h4 class="px-3 pb-2 pt-4 ">List of chocolate</h4>
                  {chocolateViews}
                </div>
            </body>
          </html>
      )
    }
  }

export default ChocoList;