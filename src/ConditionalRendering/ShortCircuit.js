import React,{Component} from "react";

class ShortCircuit extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:true,
        }
    }
    render(){
        return this.state.isLoggedIn && <div>Welcome John</div>
    }
}

export default ShortCircuit;