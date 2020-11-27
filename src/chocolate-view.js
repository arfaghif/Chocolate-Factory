
import React from 'react';
import PropTypes from 'prop-types';
import ReceiptList from './receipt-list';

class ChocolateView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list : false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      list: !prevState.list
    }));
  }
  


  render() {
    const message = this.props.message;

    return(
      <div class = "py-1">
      <a href="#" onClick={this.handleClick} class="list-group-item list-group-item-action flex-column align-items-star  " style={{backgroundColor:"cornsilk"}}>
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">From:{message.choco} </h5>
        
      </div>
      <p class="mb-1">Jumlah : {message.jumlah}</p>
      
      {this.state.list?  "List Receipts" : "Tap for view recept" }
      <div style = {{display :  this.state.list ? '' : 'none'}}>
      <ReceiptList receipts = {message.receipts}/>
      </div>
      
    </a>
    </div>
    )
  }
}


export default ChocolateView;