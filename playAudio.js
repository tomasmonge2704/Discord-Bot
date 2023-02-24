const { joinVoiceChannel,createAudioPlayer,createAudioResource } = require('@discordjs/voice');
const { join } = require('path');

module.exports = function playAudio(comando,message){
    if (!message.member.voice.channel) return message.channel.send('You need to be a voice channel to execute this command!')
    if(!message.member.voice.channel.joinable) return message.channel.send('I need permission to join your voice channel!')
    const player = createAudioPlayer()
    const connection = joinVoiceChannel({
      channelId: message.member.voice.channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator
    })
    connection.subscribe(player)
  let resource = createAudioResource(join('.', 'audios', `${comando}.mp3`));
  player.play(resource)
}