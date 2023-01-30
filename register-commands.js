require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js')
const commands = [
    {
        name:'3v3',
        description:'Random dioses smite',
    },
    {
        name:'2v2',
        description:'Random dioses smite',
    },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
    try{
        console.log("Registering slash commands...")
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            {body: commands}
        )
        console.log("Slash commands register succesfully")
    } catch (error){
        console.log(`hubo un problema: ${error}`)
    }
})();