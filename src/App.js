/* import './App.css';
import React, { useState , useEffect} from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) =>  setData(json))

    const url = 'https://robohash.org/set_set4/bgset_bg1/3.14159?size=300x300'

  fetch(url)
  .then((response) => response.json())
  .then((json) =>  console.log(json)) 

  },[data,setData])
  return (
    <div className="App">
          Kitten's {data.title}
    </div>
  );
}

export default App; */

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
