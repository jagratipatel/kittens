import './App.css';
import React, { Component } from 'react';
import Card from './components/card'
class App extends Component {
  state = {
    users:[]
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
      <div id="back">   
      {this.state.users.map(user=><Card key= {user.id} name={user.username} id={user.id}  />)} 
      </div>    
  )
}
}


 
export default App;
