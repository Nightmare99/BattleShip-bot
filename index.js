import Discord from 'discord.js';
import Player from './src/Player.mjs';

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('Nice try');

var requests = {}; // to hold challenges until they are accepted

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
            if (requests[params[1]] === author) {
                // Player 2 accepts player 1's challenge
                delete requests[params[1]];
                // Start game after this
                console.log('challenge accepted');
            }
    }
});

