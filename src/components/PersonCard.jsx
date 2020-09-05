import React,{Component} from 'react';

// class PersonCard extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             age : props.age
//         }
//         this.ageMatters = this.ageMatters.bind(this);
//     }
//     ageMatters = () =>{
//             this.setState({age: this.state.age+1});
//     }

//     render(){
//         const {name,age,color} = this.props;
//         return (
//             <div>
//                 <h3>{name}</h3>
//                 <p>Age: {this.state.age}</p>
//                 <p>Hair Color: {color}</p>
//                 <button onClick={this.ageMatters}>Age Matters</button>
//             </div>
//         )
//     }
// }




const PersonCard = props => {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}

export default PersonCard