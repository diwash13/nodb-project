const players = [{
    id: 0,
    name: 'Unai Emery',
    position: 'Head Coach',
    number: 'N/A'
}]

let id = 1;

module.exports = {
    getPlayers: (req, res) => {
        res.status(200).send(players)
    },

    createPlayer: (req, res) => {
        const { name, position, number } = req.body
        players.push({id, name, position, number})
        id++
        res.status(200).send(players)
    },

    removePlayer: (req, res) => {
        const { id } = req.params;

        const index = players.findIndex(player => player.id == id)

        players.splice(index, 1);

        res.status(200).send(players)
    },

    updatePlayer: (req, res) => {
        const { id } = req.params
        const { name, position, number } = req.body

        let index = players.findIndex(player => player.id == id)

        let myPlayer = players[index]

        myPlayer = {
            id: myPlayer.id,
            name: name || myPlayer.name,
            position: position || myPlayer.position,
            number: number || myPlayer.number
        }

        players.splice(index, 1, myPlayer)

        res.status(200).send(players)
    }
}