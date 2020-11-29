import React, { Component } from 'react';
import ReceiptView from './receipt-view';


class ReceiptList extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            messages:  []
        };
    }

    componentDidMount(){
        this.setState({messages: this.props.receipts})
    }

    render() {
      const receiptViews = this.state.messages.map(
        message => <ReceiptView key={message.name} message={message} />
      )
  
      return(
        <ul>
          {receiptViews}
        </ul>
      )
    }
  }

export default ReceiptList;