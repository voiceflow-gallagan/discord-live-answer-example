require('dotenv').config()
const fs = require('node:fs')
const path = require('node:path')
const {
  Client,
  Routes,
  Collection,
  GatewayIntentBits,
  Partials,
} = require('discord.js')
const { DISCORD_TOKEN, APP_ID, SERVER_ID } = process.env

const client = new Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel],
  rest: { version: '10' },
})

const eventsPath = path.join(__dirname, 'events')
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith('.js'))

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file)
  const event = require(filePath)
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args))
  } else {
    client.on(event.name, (...args) => event.execute(...args))
  }
}

client.rest.setToken(DISCORD_TOKEN)

async function main() {
  try {
    await client.login(DISCORD_TOKEN)
  } catch (err) {
    console.log(err)
  }
}

main()
