import React, { Component } from 'react';
import ChocolateView from './chocolate-view';


class ChocoList extends Component {
    state = {
      messages:  [
        {
          _id: '1',
          from: 'John',
          content: 'The event will start next week',
          status: 'unread'
        },
        {
          _id: '2',
          from: 'Martha',
          content: 'I will be traveling soon',
          status: 'read'
        },
        {
          _id: '3',
          from: 'Jacob',
          content: 'Talk later. Have a great day!',
          status: 'read'
        }
      ]
    }
  
    render() {
      const chocolateViews = this.state.messages.map(
        message => <ChocolateView key={message._id} message={message} />
      )
  
      return(
        <div class="container p-3 my-3 bg-primary text-white">
          <h1>List of chocolate</h1>
          {chocolateViews}
        </div>
      )
    }
  }

export default ChocoList;