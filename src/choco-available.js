
import React from 'react';
import PropTypes from 'prop-types';
import ReceiptList from './receipt-list';

class ChocoAvailable extends React.Component {
  
  


  render() {
    const message = this.props.message;

    return(
    <div className = "py-5 px-2">
        <div className="col-md-40 bg-info text-white"  >

                <div className="card-body">
                <h5> {message.choco}</h5>
                <p className="card-text">Jumlah : {message.jumlah}</p>
             </div>
             </div>
    </div>
    )
  }
}


export default ChocoAvailable;