import React ,{Component} from "react";

class ElementVariable extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedin:false,
        }
    }
    render(){
        let message
        if(this.state.isLoggedin){
            message=<div>Welcome John</div>
        }else{
            message=<div>Welcome Guest</div>
        }
        return <div>{message}</div>
    }
}
export default ElementVariable;