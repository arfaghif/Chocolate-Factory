
import React from 'react';
import PropTypes from 'prop-types';

class ChocolateView extends React.Component {
  render() {
    const message = this.props.message;

    return(
      <div class="container p-1 my-3 bg-white text-primary">
        <div className="field">
          <span className="label">From: </span>
          <span className="value">{message.from}</span>
        </div>
        <div class="container p-1 my-3 bg-white text-primary">
          <span className="label">Status: </span>
          <span className="value">{message.status}</span>
        </div>
        <div class="container p-1 my-3 bg-white text-pimary">
          <span className="label">Message: </span>
          <span className="value">{message.content}</span>
        </div>
      </div>
    )
  }
}


export default ChocolateView;