
import React from 'react';
import PropTypes from 'prop-types';
import ReceiptList from './receipt-list';
import pict from "./logo.svg";

class ChocoAvailable extends React.Component {
  
  


  render() {
    const message = this.props.message;

    return(
    <div class = "py-5 px-2">
        <div class="col-md-40 bg-info text-white"  >

                <div class="card-body">
                <h5> {message.choco}</h5>
                <p class="card-text">Jumlah : {message.jumlah}</p>
             </div>
             </div>
    </div>
    )
  }
}


export default ChocoAvailable;