const express = require('express');
const app = express();
const server = require('http').Server(app);
const SlackBot = require('slackbots');

const io = require('socket.io')(server);
const path = require('path');

const ns = require('natural-script');

require('dotenv').config();


var folders = {
    public: path.join(__dirname, '../public'),
    node: path.join(__dirname, '../../node_modules')
};

if (process.env.SLACK_BOT_TOKEN) {
    var bot = new SlackBot({
        token: process.env.SLACK_BOT_TOKEN,
        name: process.env.HOSTNAME
    });

    bot.on('start', function() {
        console.log('connected to slack');
    });
}

server.listen(process.env.PORT, function () {
    console.log('listening on http://localhost:'+process.env.PORT);
});

app
.use(express.static(folders.public))

io.on('connection', function (socket) {

    socket.on('/parse', function (input) {
        setTimeout(function () {
            console.log(input);
            var result = '';
            try {
                var result = ns.parse(input.english, input.script);
                if (result === undefined) {
                    result = false;
                }
                console.log(result);
            } catch (e) {
                result = false;
            }
            socket.emit('/parsed', result);
        }, 0);
    });
});
