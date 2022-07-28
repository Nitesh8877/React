import React, {Component} from "react";

class TernanryOperator extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggeIn:false,
        }
    }
    render(){
        return (
        this.state.isLoggeIn?(
            <div>Welcome John</div>
        ):(
            <div>welcome Guest</div>
        ))
    }
}

export default TernanryOperator;