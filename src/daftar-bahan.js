import React, { Component } from 'react';
import {Button, Modal, Row, Col, Nav } from 'react-bootstrap';
import BuyPage from './buy-page';
import Navbar from './navbar';

class DaftarBahan extends Component{
    daftarBahan = [
        {nama: "Buah1", jumlah: "100", harga: "100.000"},
        {nama: "Buah2", jumlah: "100", harga: "100.000"},
        {nama: "Buah3", jumlah: "100", harga: "100.000"},
        {nama: "Buah4", jumlah: "100", harga: "100.000"},
        {nama: "Buah5", jumlah: "100", harga: "100.000"},
        {nama: "Buah6", jumlah: "100", harga: "100.000"},
        {nama: "Buah7", jumlah: "100", harga: "100.000"}
        ]
    render(){
        return(
          <div>
            <Navbar/>
            <div class="table-responsive">          
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Bahan</th>
                  <th>Amount</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                  {
                      this.daftarBahan.map((y) => {
                          return (
                            <tr>
                            <td>1</td>
                            <td>{y.nama}</td>
                            <td>{y.jumlah}</td>
                            <td>{y.harga}</td>
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

        <BuyPage show = {this.state.modalShow} onHide = {() => this.setState({modalShow : !this.state.modalShow})} idproduk = {this.idproduk} namaproduk = {this.namaproduk}/>
      </div>
    );}
}