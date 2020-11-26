import React, { Component } from 'react'

class Saldo extends Component{
  constructor(props) {
    super(props);
    this.state = {cur_saldo : 10000000};
  }
  render(){
        return(
            <div class = "container bg-primary">
              cur_saldo : {this.state.cur_saldo}
            </div>
          )

    }
} 

export default Saldo