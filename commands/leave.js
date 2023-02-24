const { joinVoiceChannel} = require('@discordjs/voice');

module.exports = {
    name: 'leave',
    run: async (client, message) => {
      client.distube.voices.leave(message)
      const connection = joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator
      })
      connection.destroy();
    }
  }