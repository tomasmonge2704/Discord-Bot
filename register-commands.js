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
        name:'conquest',
        description:'Random dioses smite',
        options: [
            {
                name:"sup",
                description:"Supp",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"adc",
                description:"Adc",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"jungla",
                description:"Jungla",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"mid",
                description:"Mid",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"solo",
                description:"Solo",
                type: ApplicationCommandOptionType.String,
                required: true,
            }
        ],
    },
    {
        name:'random_conquest',
        description:'Random dioses smite',
        options: [
            {
                name:"1",
                description:"user 1",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"2",
                description:"user 2",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"3",
                description:"user 3",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"4",
                description:"user 4",
                type: ApplicationCommandOptionType.String,
                required: true,
            },
            {
                name:"5",
                description:"user 5",
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