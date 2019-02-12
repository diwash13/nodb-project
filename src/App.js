import React, { Component } from 'react';
import Player from './components/Player';
import axios from 'axios';
import Header from './components/Header';
import News from './components/News';
import Body from './components/Body';
import Video from './components/Video';

import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      players: [],
      name: '',
      position: '',
      number: '',
      search: ''
    }
    this.removePlayer = this.removePlayer.bind(this)
    this.updatePlayer = this.updatePlayer.bind(this)
    this.setEdit = this.setEdit.bind(this)
  }

  handleChangeSearch = (val) => {
    console.log(val)
    this.setState({
      search: val
    })
  }

  handleChangeName(val) {
    this.setState({
      name: val
    })
  }

  handleChangePosition(val) {
    this.setState({
      position: val
    })
  }

  handleChangeNumber(val) {
    this.setState({
      number: val
    })
  }

  componentDidMount() {
    axios.get('/api/players').then(res => {
      this.setState({
        players: res.data
      })
    })
  }

  createPlayer(name, position, number) {
    axios.post('/api/player', { name, position, number}).then(res => {
      this.setState({
        players: res.data,
        name: '',
        position: '',
        number: ''
      })
    })
  }

  removePlayer(id) {
    axios.delete(`/api/player/${id}`).then(res => {
      this.setState({
        players: res.data
      })
    })
  }

  setEdit(name, position, number) {
    this.setState({
      name,
      position,
      number
    })
  }

  updatePlayer(id) {
    const { name, position, number } = this.state
    axios.put(`/api/player/${id}`, { name, position, number }).then(res => {
      this.setState({
        players: res.data,
        name: '',
        position: '',
        number: ''
      })
    })
  }
    

  render() {
    const { name, position, number } = this.state
    const myPlayers = this.state.players.filter((player) => player.name.includes(this.state.search) ).map(player => {
      return (
        <Player
        key={player.id}
        player={player}
        removePlayer={this.removePlayer}
        updatePlayer={this.updatePlayer}
        setEdit={this.setEdit}
        />
      )
    })
    return (
      <div className="App">
      
      < Video />
       <Header />
       <div className="Content-wrapper">
       <News className="News"/>
       <div>
         
       </div>
         <div className="Predict" style={{border:"solid", marginLeft: "15px", width: "90%"}}>
       <h2 style={{background: "#070D35"
       }}>Predict Your Starting XI</h2>

       <input
        type="text"
        placeholder="Player Name"
        onChange={e => this.handleChangeName(e.target.value)}
        value={this.state.name}
        />

       <input
        type="text"
        placeholder="Position"
        onChange={e => this.handleChangePosition(e.target.value)}
        value={this.state.position} style={{margin: "0 10px 10px 10px"}}
       />

       <input
        type="text"
        placeholder="Jersey Number"
        onChange={e => this.handleChangeNumber(e.target.value)}
        value={this.state.number}
       />
       <button onClick={() => this.createPlayer(name, position, number)} style={{
                    background: "#070D35",
                    color: "white",
                    border: "solid red 1px",
                    height: "30px",
                    width: "100px",
                    marginBottom: "20px",
                    marginTop: "15px",
                    marginRight: "45px"
                }}>Predict</button>
       <button style={{
                    background: "#070D35",
                    color: "white",
                    border: "solid red 1px",
                    height: "30px",
                    width: "100px"

                }}>Submit</button>
       < Body 
          searchByPlayer= {this.handleChangeSearch}
       />    
        {myPlayers}
        
      </div>
       
      </div>

      </div>
    )
  }
}

export default App;
