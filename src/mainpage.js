import React, { Component } from 'react';
import Navbar from './navbar';

class MainPage extends Component{
    constructor(props) {
      super(props);
      this.state = { 
        items:  [{text: 'Approval Pesanan', link:"#"},
                  {text: 'Daftar Pemesanan', link:"#"},
                  {text: 'Daftar Bahan', link:"#"},
                  {text: 'Daftar Harga Bahan Supplier', link:"#"},
                  {text: 'Beli Bahan Dari Supplier', link:"#"},
                  {text: 'Daftar Resep Coklat', link:"#"},
                  {text: 'Daftar Coklat Tersedia di Pabrik', link:"#"}]
      };
    }

    render(){
        return(
          <html>
            <body>
              <header>
                <Navbar/>
              </header>
              <Buttons items = {this.state.items} />
            </body>
          </html>
        );
    }
}

class Buttons extends Component{
  render() {
    return (
      <div class = "container p-3 my-3 bg-light text-white">
          {this.props.items.map(item => (
            <div class = "btn w-100 p-3 my-3 btn-info btn-lg" href={item.link}>
              {item.text}
            </div>
            ))}
      </div>
    );
  }
}

export default MainPage;