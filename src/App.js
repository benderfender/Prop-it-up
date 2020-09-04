import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: []
    };
  }


  render() {
    return (
          
          <div>
          <PersonCard 
            name="Doe, Jane"
            age={45}
            color="Black"
          />
          <PersonCard 
            name="Smith, John"
            age={88}
            color="Brown"
          />
          <PersonCard 
            name="Fillmore, Millard"
            age={50}
            color="Brown"
          />
          <PersonCard 
            name="Smith, Maria"
            age={62}
            color="Brown"
          />
          </div>
      );
  }
}

export default App;
