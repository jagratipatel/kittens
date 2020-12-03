import './App.css';
import React, { Component } from 'react';
import Card from './components/card'
class App extends Component {
  constructor() {

    super();

    this.mediaQuery = {
      desktop: 1200,
      tablet: 768,
      phone: 576,
    };

    this.state = {
      windowWidth: null,
      users:[]
    };
  }
  componentDidMount(){
    window.addEventListener('resize', () => {
      this.setState({windowWidth: document.body.clientWidth})
    });
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) =>  this.setState({
    users : json
  })) 
  }
  
render(){
  console.log(this.state.users)
  return(
    <div id="container" style={{
      width: this.state.windowWidth > this.mediaQuery.phone
        ? '50%'
        : '100%',
      //more styling :)
    }}>
      <div id="head">KITTEN's</div>
        <div id="cards" > 
        {this.state.users.map(user=><Card key= {user.id} name={user.username} id={user.id} windowWidth={this.state.windowWidth} mediaQuery={this.mediaQuery.phone} />)} 
        </div>
      </div>
  )
}
}


 
export default App;
