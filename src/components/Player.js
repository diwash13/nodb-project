import React, { Component } from 'react'

export default class Player extends Component {
    constructor(props) {
        super ()

        this.state = {
            editing: false
        }
    }

    edit() {
        const { player } = this.props
        this.setState({
            editing: true
        })
        this.props.setEdit(player.name, player.position, player.number)
    }
    updatePlayer(id) {
        this.props.updatePlayer(id)
        this.setState({
            editing: false
        })
    }

    render() {
        const { player, removePlayer} = this.props
        return (
            <div>
                <h3>{player.name}</h3>
                <p>Position: {player.position}</p>
                <p>Number: {player.number}</p>
                <button onClick={() => removePlayer(player.id)} style={{
                    background: "#070D35",
                    border: "solid red 1px",
                    color: "white"

                }}>Remove</button>
                {this.state.editing ? (
                    <button onClick={() => this.updatePlayer(player.id)} style={{
                        background: "#070D35",
                        border: "solid red 1px",
                        color: "white",
                        marginRight: "15px"
    
                    }}>Make Changes</button>
                ) : (
                    <button onClick={() => this.edit()} 
                    style={{
                        background: "#070D35",
                        border: "solid red 1px",
                        color: "white",
                        marginLeft: "15px"
    
                    }}
                    >Edit</button>
                )}

            </div>
        )
    }
}