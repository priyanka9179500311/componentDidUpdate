//Import area
//Import something from 'somelibrary';

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//Create an Class Component
class Myclass extends Component{
    //1.Property
    state = { };
    //2.Constructor
    constructor(props){
        super(props);
        console.log('hello from constructor');
        //The role Constructor is to Initializing the Properties
        this.state = {myName:"Priyanka","surname":"yadav"};

    }
    componentDidMount(){
        console.log('Hello from componentDidMount');
        this.setState({ myName:"Mahima","surname":"Aarya"});
    }
    componentDidUpdate(){
        console.log('Hello from componentDidUpdate');
    }
    //3.Method
    //Every Method Must have render method
    render(){
        console.log('Hello from render Method');
        //Every render method return HTML
        return(
            <div>
                Hello {this.state.myName} {this.state.surname}
            </div>
        );
    }
}
//object.method();
ReactDOM.render(<Myclass />,document.getElementById('root'));//actual argument