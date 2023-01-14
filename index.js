require('dotenv').config();
const {Client,IntentsBitField} = require('discord.js');
const { DisTube } = require("distube");
const client = new Client ({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildVoiceStates
    ],
});
client.DisTube = new DisTube(client,{
    leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
})
client.on('ready',(c) => {
    console.log(`${c.user.tag} esta listo.`)
})

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === "hey"){
        interaction.reply("hola puto")
    }
})

client.on('messageCreate', message => {
    if(message.author.bot || !message.guild) return;
    const prefix = ""
    const args = message.content.slice(prefix.length).trim().split(/ +/g)

    if(message.author.bot){
        return;
    }

    if(args.shift().toLocaleLowerCase() === "play"){
        client.DisTube.play(message.member.voice.channel, args.join(' '), {
			message,
			textChannel: message.channel,
			member: message.member,
            skip:true
		})
        .catch(err => {
            message.reply(err.message);
        });
    }

    if(message.content.includes("hola")){
        message.reply('el de arriba es gay')
    }
    if(message.content == 'quien es el mejor del server en smite?'){
        message.reply('en base a todas las partidas jugadas y analizando sus estadisticas puedo asegurarles que el gordo es gay.')
    }
})

client.DisTube.on("playSong", (queue,song) => {
    queue.textChannel.send("Mira el temita que te puse papa: " + song.name)
})
client.login(process.env.TOKEN)

