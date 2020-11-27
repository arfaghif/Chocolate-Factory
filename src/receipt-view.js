import React from 'react';

class ReceptView extends React.Component {
    render() {
      const message = this.props.message;
  
      return(
        <li>
            {message}
        </li>
        

      )
    }
  }

  export default ReceptView;