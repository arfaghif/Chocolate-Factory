import React from "react";
import Client from './client';


export default class Numbers extends React.Component{
    constructor(props){
        super(props)
        this.client = new Client();
        this.state = {numbers:""};
        this.state = {numbers : this.client.numbers()};
    }
    
    render(){
        return(
            <section>{this.state.numbers}
            </section>
        )
    }
}