require('dotenv').config();
const Discord = require('discord.js');
const {Random3v3,Random2v2} = require('./SmiteRandomGod')
const { DisTube } = require("distube");
const { SpotifyPlugin } = require("@distube/spotify");
const fs = require('fs')
const client = new Discord.Client ({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildVoiceStates
      ]
});
client.distube = new DisTube(client,{
  plugins: [new SpotifyPlugin({emitEventsAfterFetching: true})],
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
    if(interaction.commandName === "2v2"){
      const user1 = interaction.options.get("user1").value;
      const user2 = interaction.options.get("user2").value;
      const user3 = interaction.options.get("user3").value;
      const user4 = interaction.options.get("user4").value;
      interaction.reply(Random2v2(user1,user2,user3,user4))
    }
    if(interaction.commandName === "3v3"){
      const user1 = interaction.options.get("user1").value;
      const user2 = interaction.options.get("user2").value;
      const user3 = interaction.options.get("user3").value;
      const user4 = interaction.options.get("user4").value;
      const user5 = interaction.options.get("user5").value;
      const user6 = interaction.options.get("user6").value;
      interaction.reply(Random3v3(user1,user2,user3,user4,user5,user6))
    }
})
async function userCount(guildId, channelId) {
  try {
    let guild = client.guilds.cache.get(guildId);
    let voiceChannel = await guild.channels.fetch(channelId, { force: true });
    return voiceChannel.members.filter(member => !member.user.bot).size;
  } catch (error) {
    return 0
  }
}
client.on('voiceStateUpdate', async (oldState, newState) => {
  const channel = client.channels.cache.find(channel => channel.name === "xd")
  const usuarios = await userCount(newState.guild.id,newState.channelId);
  if (newState.channelId == null && usuarios == 0) {
    channel.send(`el ultimo en irse fue el puto de ${oldState.member.user.username}`);
  }
});
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
client.login("MTA2MzUwNTYzNDQ0OTk1Njg4NQ.GYDk6V.ZXPrL_x22RbyuBkQqIbeZJ3XQ039grC8SuXr28")

