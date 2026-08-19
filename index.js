const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const TOKEN = 'process.env.TOKEN';
const CANAL_ID = '1536852269746753546';

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Bot online: ${client.user.tag}`);

  const canal = client.channels.cache.get(CANAL_ID);

  if (!canal) {
    console.log('Não encontrei a call.');
    return;
  }

  joinVoiceChannel({
    channelId: canal.id,
    guildId: canal.guild.id,
    adapterCreator: canal.guild.voiceAdapterCreator,
    selfDeaf: true,
    selfMute: true
  });

  console.log('Bot entrou na call!');
});

client.login(TOKEN);