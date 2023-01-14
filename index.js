require('dotenv').config();
const Discord = require('discord.js');
const { DisTube } = require("distube");
const fs = require('fs')
const client = new Discord.Client ({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers
      ]
});
client.distube = new DisTube(client,{
    leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
})
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
client.emotes = {
    "play": "▶️",
    "stop": "⏹️",
    "queue": "📄",
    "success": "☑️",
    "repeat": "🔁",
    "error": "❌"
  }

fs.readdir('./commands/', (err, files) => {
  if (err) return console.log(err)
  const jsFiles = files.filter(f => f.split('.').pop() === 'js')
  if (jsFiles.length <= 0) return console.log('Could not find any commands!')
  jsFiles.forEach(file => {
    const cmd = require(`./commands/${file}`)
    console.log(`Loaded ${file}`)
    client.commands.set(cmd.name, cmd)
    if (cmd.aliases) cmd.aliases.forEach(alias => client.aliases.set(alias, cmd.name))
  })
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
    if (!message.content.startsWith(prefix)) return
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
    if (!cmd) return
    if (cmd.inVoiceChannel && !message.member.voice.channel) {
      return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
    }
    try {
      cmd.run(client, message, args)
    } catch (e) {
      console.error(e)
      message.channel.send(`${client.emotes.error} | Error: \`${e}\``)
    }
})

client.distube.on("playSong", (queue,song) => {
    queue.textChannel.send("Mira el temita que te puse papa: " + song.name)
})
client.login(process.env.TOKEN)

