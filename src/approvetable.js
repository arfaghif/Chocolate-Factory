import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Navbar from './navbar';
import url from './url';


var SoaMessage = `<?xml version='1.0' encoding='UTF-8'?>
<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    <S:Body>
        <ns2:getReqChoc xmlns:ns2="http://codejava.net/">
        </ns2:getReqChoc>
    </S:Body>
</S:Envelope>`
var urlApp = url.url+"req-choc";



class ApproveTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header: ["ID","Coklat", "Jumlah", "Status", "Edit"],
      table: [
          {
            idreq:-1,
            nama:"nama",
            qty:-1,
            status:"status"
          }
        ]
    };
  }
  componentDidMount(){
    console.log("hello")
    var request = new XMLHttpRequest();
    request.open("POST",urlApp,true);
    request.onreadystatechange = function(res){
        if (request.readyState===4){
            res = request.responseXML;
            console.log(res);
            res = res.getElementsByTagName("return")[0].childNodes[0].nodeValue;
            console.log(res);
            this.stateSet(res);
        }
    }.bind(this);
    
    request.setRequestHeader("Content-type","text/xml")
    
    request.send(SoaMessage);
  }

  stateSet(text) {
    var parsed = JSON.parse(text);
    parsed = parsed.RequestData;
    console.log(parsed);
    this.setState(
      {table: parsed}
    ) 
  }

  render(){
    return(
      <html>
        <body>
          <header>
            <Navbar/>
          </header>
          <div class="container d-flex justify-content-between">
          <div class="table-responsive p-3">
                <RequestTable header={this.state.header} table={this.state.table}/>
            </div>
            </div>
            </body>
          </html>
    );
    }
}

class RequestTable extends Component {
  render() {
    return (
      <table class="table table-striped table-sm">
          <thead>
            <tr>
            {this.props.header.map(headers => (
              <th>
                {headers}
              </th>
              ))}
            </tr>
          </thead>
          <tbody>
              {this.props.table.map(row =>(
                <tr>
                  <td>{row.idreq}</td>
                  <td>{row.nama}</td>
                  <td>{row.qty}</td>
                  <td>{row.status}</td>
                <EditButton id={row.idreq} status={row.status}/>
                </tr>
              ))}
          </tbody>
      </table>
    );
  }
}

class EditButton extends Component{
  constructor(props) {
    super(props);
    var isApproved;
    if (this.props.status==="approved") {
      isApproved=true;
    }
    this.state = {
      showModal: false,
      showButton: !isApproved
    }
  }
  render(){
    console.log(this.state.showButton)
    if (this.state.showButton) {
      return (
        <div>
          <button onClick={() => this.setState({showModal: !this.state.showModal})} type="button" class="btn btn-info btn-xs m-2">Approve</button>
          <ApproveModal show ={this.state.showModal} onHide = {() => this.setState({showModal : !this.state.showModal})} id={this.props.id}/>
        </div>
        );
    }
    else{
      return(<td></td>)
    }
 }
}

class ApproveModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      id:-1
    }
  }
    handleApprove(id) {
      //handle approval
      return this.props.onHide;    
    }

    hide() {
      return this.props.onHide;
    }

    render() {
      return(
        <Modal show={this.props.show}>
          <Modal.Header>
            <Modal.Title>Request Approval</Modal.Title>
          </Modal.Header>
      <Modal.Body>Approve request with id = {this.props.id}?</Modal.Body>
          <Modal.Footer>
            <button onClick={this.hide()} type="button" class="btn btn-danger btn-xs">Cancel</button>
            <button onClick={this.handleApprove(this.props.id)} class="btn btn-success btn-xs">Approve</button>
          </Modal.Footer>
        </Modal>
    );
    }

}


export default ApproveTable;