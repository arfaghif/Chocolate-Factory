import React from 'react'


var SoaMessage = `<?xml version='1.0' encoding='UTF-8'?>
<S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
    <S:Body>
        <ns2:bonjour xmlns:ns2="http://codejava.net/">
        </ns2:bonjour>
    </S:Body>
</S:Envelope>`

var url = "http://localhost:8000/MyApp2/ws/hello?wsdl";

export default class Client{
    numbers(){
        // let result = new Promise(()=>{
            var request = new XMLHttpRequest();
            request.open("POST",url,true);
            request.onreadystatechange = function(){
                if (request.readyState===4){
                    var res = request.responseXML;
                    res = res.getElementsByTagName("return")[0].childNodes[0].data;
                    console.log(res);
                    return("xx");

                }
            }
            request.setRequestHeader("Content-type","text/xml")
            request.setRequestHeader("Access-Control-Allow-Origin" ,"http://localhost:3000");
            request.setRequestHeader("Access-Control-Allow-Origin" ,"http://localhost:8000");
            console.log("1");
            request.send(SoaMessage);
            
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