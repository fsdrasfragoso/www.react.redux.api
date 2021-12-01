import logo from './logo.svg';
import './App.css';
import User from './User';
import photo from './perfil.jpeg'; 
import { Component } from 'react';
import List from './List';
class App extends Component
{
  constructor(props)
  {
    super(props)
      this.state = {
        name: "Esdras",
        email:"esdrasfragoso@gmail.com"
      }
      this.changeState = this.changeState.bind(this)
      this.resetState = this.resetState.bind(this)
      this.changeInput = this.changeInput.bind(this)
  }
  
  changeState()
  {
     this.setState({
       name:"Esdras Fragoso"
     })
  }

  resetState()
  {
     this.setState({
       name:"Esdras"
     })
  }
  changeInput(event)
  {
    let target = event.target;
    let index = target.name
    this.setState({
      [index]:target.value
    })
  }

  render() 
  {
    return (
      <div className="App">
        <div>
          <form>
            <label>
              Nome
              <input 
                type="text" 
                name="name"
                value={this.state.name}
                onChange={this.changeInput}
              ></input>
            </label>
            <label>
              Email
              <input 
                type="text" 
                name="email"
                value={this.state.email}
                onChange={this.changeInput}
              ></input>
            </label>
          </form>
          {this.state.name} - {this.state.email}
        </div>
        <button onClick={this.changeState}> Mudar estado</button>
        <button onClick={this.resetState}> Resetar Estado</button>
        
      </div>
    );
  }

}


export default App;
