import Discord from 'discord.js';
import Player from './src/Player.mjs';
import _ from 'lodash';

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('Njk2MDI1MjY2MjMzMDE2MzUx.XoivKg.xD27AdkGMxi9CTDwJWj0NBPhtko');

var requests = {}; // to hold challenges until they are accepted
var inGame = []; // all players who are in a game
var games = {}; // all ongoing game details as an array of objects
client.on('message', message => {
    // message.guild.members.fetch().then((map) => console.log(Array.from(map.keys())));
    if (!/bs!.*/.test(message.content)) return;
    console.log(message.content);
    var command = message.content.substr(3);
    console.log(command);
    var params = command.split(' ');
    var author = '<@!' + message.author.id + '>';
    switch (params[0]) {
        case 'challenge': 
            if (author === params[1]) {
                message.channel.send('Haha very funny epic comedy 💯');
                return;
            }
            if (params[1] === '<@!696025266233016351>') {
                message.channel.send('Damn bro you\'re so funni');
                return;
            }
            if(_.includes(inGame, author) || _.includes(inGame, params[1])) {
                message.channel.send('One of the players is already in a battle!');
                return;
            }

            requests[author] = params[1];
            console.log(author);
            break;

        case 'accept':
            if (author === params[1]) {
                message.channel.send('Haha very funny epic comedy 💯');
                return;
            }
            if (params[1] === '<@!696025266233016351>') {
                message.channel.send('Damn bro you\'re so funni');
                return;
            }
            if(_.includes(inGame, author) || _.includes(inGame, params[1])) {
                message.channel.send('One of the players is already in a battle!');
                return;
            }
            // console.log(requests);
            // console.log(params[1]);
            // console.log(requests[params[1]]);
            if (requests[params[1]] === author) {
                // Player 2 accepts player 1's challenge
                delete requests[params[1]];
                var p1 = new Player(params[1]);
                var p2 = new Player(author);
                message.channel.send(p1.id + ' and ' + p2.id + ', check your DMs for instructions on setting up your board.');
                console.log('challenge accepted');
            }
            else {
                message.channel.send('No pending challenge from that player.');
                return;
            }
    }
});

