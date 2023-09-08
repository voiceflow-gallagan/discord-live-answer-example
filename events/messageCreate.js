require('dotenv').config()
const { Events } = require('discord.js')
const { interact } = require('../utils/dialogapi.js')

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.author.bot) {
      return
    }

    if (process.env.LIVEANSWERS_CHANNELS.includes(message.channel.id)) {
      console.log('User message:', message.content)
      let liveAnswer = message
      liveAnswer.isLive = true
      const messageWithoutMention = message.content
        .replace(/^<@\!?(\d+)>/, '')
        .trim()

      await interact(
        liveAnswer,
        message.author.id,
        false,
        false,
        true,
        messageWithoutMention
      )
    }
  },
}
