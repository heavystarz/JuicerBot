// You can add as many flavors as you like, these are just to get you started. 

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

bot_secret_token = "YOUR_TOKEN_ID"
client.login("YOUR_TOKEN_ID")
