import React, { Component } from 'react';
import ChocoAvailable from './choco-available';
import Navbar from './navbar';
class ChocoGrid extends React.Component{
    state = {
        messages:  [
          {
            _id: '1',
            choco: 'Choco 1',
            jumlah: '5',
          },
          {
            _id: '2',
            choco: 'Choco 2',
            jumlah: '4',
          },
          {
            _id: '3',
            choco: 'Choco 3',
            jumlah: '7',
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
    render(){
        const chocolateAvailable = this.state.messages.map(
            message => <ChocoAvailable key={message._id} message={message} />
          )
      
          return(
            <html>
            <body>
              <header>
                <Navbar/>
              </header>
                    <div class="container">
                    <div class= "row">
                        {chocolateAvailable}
                    </div>
                    </div>
            </body>
            </html>
          )
    }
}

export default ChocoGrid