
import React from 'react';
import PropTypes from 'prop-types';
import ReceiptList from './receipt-list';

class ChocoAvailable extends React.Component {
  
  


  render() {
    const message = this.props.message;

    return(
    <div className = "pt-1 px-2">
        <div className="container m-5  bg-info text-white"  >

                <div style={ {textAlign:"center"}}>
                <h5 className="pt-5 px-7 "> {message.choco}</h5>
                <p className ="pb-5 pt-2 px-7 " >Jumlah : {message.jumlah}</p>
                </div>
             </div>
    </div>
    )
  }
}


export default ChocoAvailable;