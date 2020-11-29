// import React from 'react'
// var axios = require('axios');

// var SoaMessage = `<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
// <soapenv:Body>
//   <ns1:updateBalance xmlns:ns1="http://jaxwsservice.codejava.net/" xmlns:ns3="http://www.example.org/FactorySchema" xmlns:ns4="http://codejava.net">
//   <UpdateBalance>
//         </UpdateBalance>
//   </ns1:updateBalance>
// </soapenv:Body>
// </soapenv:Envelope>`;

// // var url = "http://localhost:8001/MyApp2/ws/hello?wsdl";

// var config = {
//     method: 'post',
//     url: "http://localhost:8001/MyApp2/ws/hello?wsdl",
//     headers: { 
//     //   'Content-MD5': 'text/xml', 
//       'Content-Type': 'text/xml',
//     //   "Access-Control-Allow-Origin": "*",
//     //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//     },
//     data : SoaMessage
//   };
// // var url = "http://localhost:8001/MyApp2/ws/hello?wsdl";

// export default class Client{
//     numbers(){
//         // let result = new Promise(()=>{
//             axios(config)
//             .then(function (response) {
//             console.log(JSON.stringify(response.data));
//             })
//             .catch(function (error) {
//             console.log(error);
//             });
//             // var request = new XMLHttpRequest();
//             // request.open("POST",url,true);
//             // console.log("2");
//             // request.onreadystatechange = () =>{
//             //     if (request.readyState===4){
//             //         var res = request.responseXML;
//             //         res = res.getElementsByTagName("return")[0].childNodes[0].data;
//             //         console.log(res);

//             //     }
//             //     console.log("failes");
//             //     // let raw = request.responseText;
//             //     // let objectified = JSON.parse(raw);
//             //     // resolve(objectified);
//             // }
//         //     console.log("3");
//         //     request.setRequestHeader("Access-Control-Allow-Origin", "*");
// 		// request.setRequestHeader("Access-Control-Allow-Credentials", "true");
// 		// request.setRequestHeader("Access-Control-Max-Age", "1800");
// 		// request.setRequestHeader("Access-Control-Allow-Headers", "content-type");
// 		// request.setRequestHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
//         //     request.send(SoaMessage);
//         // });
//     }
// }

import React from 'react'
var axios = require('axios');
// import {SOAPDataSource} from "apollo-datasource-soap";


var SoaMessage = `<?xml version='1.0' encoding='UTF-8'?>
<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    <S:Body>
        <ns2:bonjour xmlns:ns2="http://codejava.net/">
        <arg0>"Annisa"</arg0>
        <arg1>"Fat"</arg1>
        </ns2:bonjour>
    </S:Body>
</S:Envelope>`

var url = "http://localhost:8000/MyApp/ws/hello";

export default class Client extends React.Component{
    constructor(props){
      super(props);
      this.state={message:""}
    }
    componentDidMount(){
      console.log("hello")
      var request = new XMLHttpRequest();
      request.open("POST",url,true);
      request.onreadystatechange = function(res){
          if (request.readyState===4){
              res = request.responseXML;
              res = res.getElementsByTagName("return")[0].childNodes[0].childNodes[0];
              console.log(res);
          }
      }
      request.setRequestHeader("Content-type","text/xml")
      console.log("1");
      request.send(SoaMessage);
      // console.log(res);
    }

    render() {
    //     // YANG CAMCAM
    //     const FACTORY_BASE_URL = "http://localhost:8000/MyApp/ws";
    //     const FACTORY_HELLO = FACTORY_BASE_URL + "/hello?wsdl";
    //     const FACTORY_AUTH = FACTORY_BASE_URL + "/auth?wsdl";
    //     const FACTORY_MAIN = FACTORY_BASE_URL + "/factory?wsdl";
    //     const FACTORY_SALDO = FACTORY_BASE_URL + "/saldoakun?wsdl";

    //     const soapRequest = async (wsdl, functionName, args) =>
    //     (await new SOAPDataSource(wsdl).invoke(functionName, args)).return;

    //     const sayHello = async (args) =>
    //     soapRequest(FACTORY_HELLO, "bonjour", args);

    //     console.log(sayHello("Nopal"));
    //     return(<a>test</a>); 
    // }
    //numbers(){
        
        
        
        // YANG RARAS
        // var axios = require('axios');
        // var data = `<soapenv:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/'>
        // <soapenv:Body>
        //     <ns1:bonjour xmlns:ns1="http://codejava.net/">
        //     <name>"Annisa"</name>
        //     </ns1:bonjour>
        // </soapenv:Body>
        // </soapenv:Envelope>`;
        
        // // yellow highlight: method di FactoryWSImpl.java
        // // purple highlight: di method itu, liat webParamnya apa
        // // blue highlight: liat di xsd, buat type webparam ini parameternya apa aja
        
        // var config = {
        //     method: 'post',
        //     url: 'http://localhost:8000/MyApp/ws/hello?wsdl',
        //     headers: { 
        //         'Content-MD5': 'text/xml', 
        //         'Content-Type': 'text/xml',
        //     },
        //     data : data
        // };
        
        // axios(config)
        // .then(function (response) {
        // console.log(JSON.stringify(response.data));
        // })
        // .catch(function (error) {
        // console.log(error);
        // });
        // return <a>tes</a>
    //  YANG IBNU
        // let result = new Promise(()=>{

            // request.setRequestHeader("Access-Control-Allow-Origin" ,"http://localhost:3000");
            // request.setRequestHeader("Access-Control-Allow-Origin" ,"http://localhost:8080");
           
            
            return<a>res</a>;
            
            // var request = new XMLHttpRequest();
            // request.open("POST",url,true);
            // console.log("2");
            // request.onreadystatechange = () =>{
            //     if (request.readyState===4){
            //         var res = request.responseXML;
            //         res = res.getElementsByTagName("return")[0].childNodes[0].data;
            //         console.log(res);

            //     }
            //     console.log("failes");
            //     // let raw = request.responseText;
            //     // let objectified = JSON.parse(raw);
            //     // resolve(objectified);
            // }
        //     console.log("3");
        //     request.setRequestHeader("Access-Control-Allow-Origin", "*");
		// request.setRequestHeader("Access-Control-Allow-Credentials", "true");
		// request.setRequestHeader("Access-Control-Max-Age", "1800");
		// request.setRequestHeader("Access-Control-Allow-Headers", "content-type");
		// request.setRequestHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
        //     request.send(SoaMessage);
        // });
    }
}

