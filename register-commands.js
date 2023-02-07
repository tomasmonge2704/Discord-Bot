require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes, ApplicationCommandOptionType } = require('discord.js')
const commands = [
    {
        name:'3v3',
        description:'Random dioses smite',
        options: [
            {
                name:"user1",
                description:"User_ 1 del equipo 1",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"user2",
                description:"User_ 2 del equipo 1",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"user3",
                description:"User_ 3 del equipo 1",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"user4",
                description:"User_ 1 del equipo 2",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"user5",
                description:"User_ 1 del equipo 2",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"user6",
                description:"User_ 3 del equipo 2",
                type: ApplicationCommandOptionType.String,
                required: true,
            }
        ],
    },
    {
        name:'2v2',
        description:'Random dioses smite',
        options: [
            {
                name:"user1",
                description:"User_ 1 del equipo 1",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"user2",
                description:"User_ 2 del equipo 1",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"user3",
                description:"User_ 3 del equipo 1",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"user4",
                description:"User_ 1 del equipo 2",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
];

const rest = new REST({ version: "10" }).setToken("MTA2MzUwNTYzNDQ0OTk1Njg4NQ.GYDk6V.ZXPrL_x22RbyuBkQqIbeZJ3XQ039grC8SuXr28");

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