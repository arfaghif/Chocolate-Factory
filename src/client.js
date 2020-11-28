import React from 'react'
var axios = require('axios');

var SoaMessage = `<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
<soapenv:Body>
  <ns1:updateBalance xmlns:ns1="http://jaxwsservice.codejava.net/" xmlns:ns3="http://www.example.org/FactorySchema" xmlns:ns4="http://codejava.net">
  <UpdateBalance>
        </UpdateBalance>
  </ns1:updateBalance>
</soapenv:Body>
</soapenv:Envelope>`;

// var url = "http://localhost:8001/MyApp2/ws/hello?wsdl";

var config = {
    method: 'post',
    url: "http://localhost:8001/MyApp2/ws/hello?wsdl",
    headers: { 
    //   'Content-MD5': 'text/xml', 
      'Content-Type': 'text/xml',
    //   "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
    data : SoaMessage
  };
// var url = "http://localhost:8001/MyApp2/ws/hello?wsdl";

export default class Client{
    numbers(){
        // let result = new Promise(()=>{
            axios(config)
            .then(function (response) {
            console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
            console.log(error);
            });
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