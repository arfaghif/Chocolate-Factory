import React, { Component } from 'react';
import Navbar from './navbar';

class ApproveTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header: ["#","coklat", "jumlah", "status", "edit"],
      table: [
        {row: ["x","coklat1", "jumlah1", "status1"], id:"edit1"},
        {row: ["x","coklat2", "jumlah2", "status2"], id:"edit2"},
        {row: ["x","coklat3", "jumlah3", "status3"], id:"edit3"}
      ]
        

      //servletPostResponse: '';
    };
    //this.sendHttpPostRequest = this.sendHttpPostRequest.bind(this);
    
  }
  sendHttpPostRequest() {
    var self = this;
    var urlEndPoint = ''
  }

  render(){
    return(
      <html>
        <body>
          <header>
            <Navbar/>
          </header>
          <div class="table-responsive p-3">
                <RequestTable header={this.state.header} table={this.state.table}/>
            </div>
            </body>
          </html>
    );
    }
}

class RequestTable extends Component {
  render() {
    return (
      <table class="table w-80 table-striped table-sm">
          <thead>
            <tr>
            {this.props.header.map(headers => (
              <th>
                {headers}
              </th>
              ))}
            </tr>
          </thead>
          <tbody>
              {this.props.table.map(tables =>(
                <tr>
                {tables.row.map(rows =>(
                  <td>{rows}</td>
                ))}
                <button type="button" id={tables.id} class="btn btn-indigo btn-sm m-0">Button-{tables.id}</button>
                </tr>
              ))}
          </tbody>
      </table>
    );
  }
}



export default ApproveTable;

// https://blog.logrocket.com/complete-guide-building-smart-data-table-react/
// https://dev.to/abdulbasit313/learn-how-to-create-react-js-table-with-hooks-that-has-delete-functionality-too-2jjb
// https://dev.to/abdulbasit313/learn-how-to-create-react-js-table-with-hooks-that-has-delete-functionality-too-2jjb
//{this.props.table.map(tables =>(
//   <tr>
//     <td>{tables.col1}</td>
//     <td>{tables.col2}</td>
//     <td>{tables.col3}</td>
//     <td>{tables.col4}</td>
//     <td>{tables.col5}</td>
//   </tr>
// ))}