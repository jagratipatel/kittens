import './App.css';
import React, { Component } from 'react';
import Card from './components/card'
class App extends Component {
  constructor() {

    super();

    this.state = {
      users:[]
    };
  }
  componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) =>  this.setState({
    users : json
  })) 
  }
  
render(){
  console.log(this.state.users)
  return(
    <div className="container" >
      <div className="head">KITTEN's</div>
        <div className="cards" > 
        {this.state.users.map(user=><Card key= {user.id} name={user.username} id={user.id}  />)} 
        </div>
      </div>
  )
}
}


 
export default App;
