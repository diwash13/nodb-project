import React, {Component} from 'react';


export default class Body extends Component {
    constructor() {
        super();
        this.state = {
            searchPlayer: '',
        }
    }

    handleChangeSearch(val) {
        this.setState({
            searchPlayer: val
        })
    }
    

    render() {
        console.log(this.state)
        return (
            <div >

           
                <input 
                type='text'
                placeholder="Search"
                onChange={e => this.handleChangeSearch(e.target.value)}
                value={this.state.searchPlayer}
                />
                <button onClick={() => this.props.searchByPlayer(this.state.searchPlayer)} style={{
                    background: "#070D35",
                    color: "white",
                    border: "solid red 1px"
                }}>
                    Search By Player
                </button>
                <button style={{
                    background: "#070D35",
                    color: "white",
                    border: "solid red 1px"
                }}>Search By Position</button>
            </div>
        )
    }
}