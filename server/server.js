const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const app = express();

app.use(express.json());

app.get('/api/players', ctrl.getPlayers);

app.post('/api/player', ctrl.createPlayer);

app.delete('/api/player/:id', ctrl.removePlayer);

app.put('/api/player/:id', ctrl.updatePlayer);

app.listen(4321, () => console.log('Sweeeeeet'));