const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (message.content === '!choccy') {
		message.channel.send("Have a surprise cookie!", { files: ["./images/choccy.png"] });
	}
	if (message.content === '!c.oatmeal') {
		message.channel.send("Have a surprise cookie!", { files: ["./images/oatrais.png"] });
	}
	if (message.content === '!snicks') {
			message.channel.send("Have a surprise cookie!", { files: ["./images/snicks.jpg"] });
	}
});

bot_secret_token = "ODY1MTI3MDUwMTMzMTEwNzk0.YO_eWg.BDIZxXw17raTGUi4V89zBkSvB7U"
client.login("ODY1MTI3MDUwMTMzMTEwNzk0.YO_eWg.BDIZxXw17raTGUi4V89zBkSvB7U")