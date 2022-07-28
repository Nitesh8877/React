import { Component } from "react";

export default class Counter extends Component{
    constructor(props){
        console.log("constructor is invoked")
        super(props);
        this.state={
            counter:0,
        }
        this.increment=()=>{
            this.setState({counter: this.state.counter+1})
        }
        this.decrement=()=>{
            this.setState({counter: this.state.counter-1})
        }
    }
    componentDidMount(){
        console.log("component did mount")
console.log("---------------------------------")
    }
    render(){
        console.log("render method is invoked");
        return (
            <div>
                <h1>Counter: {this.state.counter}</h1>

                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}