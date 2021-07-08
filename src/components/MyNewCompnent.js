import React,{Component} from 'react';

class MynewComponent extends Component{
    render(){
        return(
            <div>
               <h1>{this.props.firstName}</h1> 
               <h2>Age : {this.props.lastName}</h2>
               <h2>Hair Color: {this.props.hairColor}</h2>
            </div>
        )
    }
}

export default MynewComponent;