import React, { Component } from 'react';
import ChocolateView from './chocolate-view';


class ChocoList extends Component {
    state = {
      messages:  [
        {
          _id: '1',
          choco: 'Choco 1',
          jumlah: '5',
          receipts : [
             "ayam",
             "telur",
           "coklat",
          ]
        },
        {
          _id: '2',
          choco: 'Choco 2',
          jumlah: '4',
          receipts : [
             "ayam",
             "waffle",
           "coklat",
          ]
        },
        {
          _id: '3',
          choco: 'Choco 3',
          jumlah: '7',
          receipts : [
             "bebek",
             "gula",
           "merica",
          ]
        },
        // {
        //   _id: '2',
        //   choco: 'Choco 2',
        //   jumlah: '10',
        //   receipts : [
        //     {name : "ayam"},
        //     {name : "telur"},
        //     {name :"coklat"},
        //   ]
        // },
        // {
        //   _id: '3',
        //   choco: 'Choco 3',
        //   jumlah: '5',
        //   receipts : [
        //     {name : "ayam"},
        //     {name : "telur"},
        //     {name :"coklat"},
        //   ]
        // }
      ]
    }
  
    render() {
      const chocolateViews = this.state.messages.map(
        message => <ChocolateView key={message._id} message={message} />
      )
  
      return(
        <div class="list-group">
          <h1 class="px-3">List of chocolate</h1>
          {chocolateViews}
        </div>
      )
    }
  }

export default ChocoList;