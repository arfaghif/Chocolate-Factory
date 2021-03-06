
import React from 'react';
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
      <div class = "px-2 py-1">
      <a href="#" onClick={this.handleClick} class="list-group-item list-group-item-action flex-column align-items-star bg-info text-white " >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1"> {message.choco} </h5>
        
      </div>
      <p class="mb-1">Jumlah : {message.jumlah}</p>
      
      {this.state.list?  "List Receipts" : "Tap for view receipts" }
      <div style = {{display :  this.state.list ? '' : 'none'}}>
      <ReceiptList receipts = {message.receipts}/>
      </div>
      
    </a>
    </div>
    )
  }
}


export default ChocolateView;