require('dotenv').config();

const {Client,IntentsBitField} = require('discord.js')

const client = new Client ({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});
client.on('ready',(c) => {
    console.log(`${c.user.tag} esta listo.`)
})

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === "hey"){
        interaction.reply("hola puto")
    }
})

client.on('messageCreate', (message) => {
    if(message.author.bot){
        return;
    }
    if(message.content == 'hola'){
        message.reply('el de arriba es gay')
    }
    if(message.content == 'quien es el mejor del server en smite?'){
        message.reply('en base a todas las partidas jugadas y analizando sus estadisticas puedo asegurarles que el gordo es gay.')
    }
})
client.login(process.env.TOKEN)

