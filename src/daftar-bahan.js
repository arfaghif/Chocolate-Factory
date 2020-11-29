import React, { Component } from 'react';
import {Button, Modal, Row, Col, Nav } from 'react-bootstrap';
import BuyPage from './buy-page';
import Navbar from './navbar';

class DaftarBahan extends Component{
  constructor (){
    super();
    this.state = {
      dataBahan :[]
    }
  }
        componentDidMount(){
          const urlFetch = fetch('http://localhost:3001/api/ingrid')
          urlFetch.then( res => {
             if(res.status === 200)
                return res.json()   
          }).then( resJson => {
             this.setState({
                 dataBahan: resJson
             })
          })
       }
    render(){
        return(
          <div>
            <Navbar/>
            <div class="table-responsive">          
            <table class="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Bahan</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                  {
                      this.state.dataBahan.map((y,index) => {
                          return (
                            <tr>
                            <td>{index+1}</td>
                            <td>{y.nama}</td>
                            <td>{y.price_unit}</td>
                            <td><ButtonBuy nama = {y.nama} idproduk = {y.harga}/></td>
                            </tr>
                          )
                      })
                  }
              </tbody>
            </table>
            </div>
            </div>
        )
    }
}
export default DaftarBahan;

class ButtonBuy extends Component{

  constructor(props) {
    super(props);
    this.state = {modalShow: false};
  }
  idproduk = this.props.idproduk;
  namaproduk = this.props.nama;
  render(){
    return (
      <div>
        <Button onClick={() => this.setState({modalShow : !this.state.modalShow})}>
          Beli
        </Button>

        <BuyPage show = {this.state.modalShow} onHide = {() => this.setState({modalShow : !this.state.modalShow})} idproduk = {this.idproduk} namaproduk = {this.namaproduk} />
      </div>
    );}
}