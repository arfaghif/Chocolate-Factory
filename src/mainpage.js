import React, {  Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

class MainPage extends Component{
    constructor(props) {
      super(props);
      this.state = { 
        items:  [{text: 'Approval Pesanan', link:"/approvetable"},
                  // {text: 'Daftar Pemesanan', link:"#"},
                  {text: 'Daftar Bahan', link:"./receipts"},
                  // {text: 'Daftar Harga Bahan Supplier', link:"#"},
                  // {text: 'Beli Bahan Dari Supplier', link:"#"},
                  {text: 'Daftar Resep Coklat', link:"/receipts/list"},
                  {text: 'Daftar Coklat Tersedia di Pabrik', link:"/choco/grid"}]
      };
    }

    render(){
        return(
            <div>
              <header>
                <Navbar/>
              </header>
              <Buttons items = {this.state.items} />
            </div>
        );
    }
}


class Buttons extends Component{
  render() {
    const items = this.props.items.map(item => (
      <Link to=  {item.link}>
      <div className = "btn w-100 p-3 my-3 btn-info btn-lg" >
        {item.text}
      </div>
      </Link>
    ))
    
    return (
      <div className = "container p-3 my-3 bg-light text-white">
          {items}
      </div>
    );
  }
}

export default MainPage;