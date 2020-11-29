import React, { Component } from 'react';
import {Modal, Col, Button, Row, Container} from 'react-bootstrap';
 
class BuyPage extends Component{
    constructor(){
        super();
        this.state = {
            amount : 0,
            buysuc : false
        }
    }
    amountPlusHandle (){
        this.setState({
            amount : this.state.amount + 1
        })
    }
    amountMinHandle (){
        if(this.state.amount>0){
        this.setState({
            amount : this.state.amount - 1
        })
    }
    }
    handleHide(){
        return this.props.onHide;
    }

    handleSuc(){
        this.setState({buysuc:false});
        this.handleHide();
    }
    handleBuy(event){ 
        fetch('http://localhost:3001/api/beli', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body: JSON.stringify([{
          "nambahan" : this.props.namaproduk,
          "amount" : this.state.amount,
          "saldo" : 1000000
         }])
        });
        this.setState({buysuc:true});
       };

  render() {
      if(!this.state.buysuc){
            return (
                <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Beli Bahan {this.props.namaproduk}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                    <Row>
                        <Col xs={12} md={8}>
                        
                        </Col>
                        <Col xs={6} md={4}>
                        
                        </Col>
                    </Row>
            
                    <Row>
                        <Col xs={6} md={4}>
                        <Button variant = 'danger' onClick = {()=>this.amountMinHandle()}>-</Button>
                        </Col>
                        <Col xs={6} md={4}>
                        {this.state.amount}
                        </Col>
                        <Col xs={6} md={4}>
                        <Button variant = 'success' onClick = {()=>this.amountPlusHandle()}>+</Button>
                        </Col>
                    </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=> this.handleBuy()}> Beli </Button>
                </Modal.Footer>
                </Modal>
            );
      }else{
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Beli Bahan {this.props.namaproduk}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="show-grid">
                <Container>
                  <Row>
                    <Col xs={12} md={12}>
                      <h2>Pemeblian Berhasil</h2>
                    </Col>
                  </Row>
        
                  <Row>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={()=> this.handleSuc()}> Beli Lagi</Button>
              </Modal.Footer>
            </Modal>
          );
      }
  }
};
 
export default BuyPage;