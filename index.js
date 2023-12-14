require('dotenv').config();

const { Client, IntentsBitField, ActivityType } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
  ],
});

client.on('ready', (c) => {
  client.user.setPresence({
    activities: [{ name: 'tvoju tetku hehe', type: ActivityType.Watching }],
    status: 'dnd',
  });
});

// odgovaranje na poruke
client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }
  ////
  if (message.content === 'alo') {
    message.reply('kome ti alo momak https://i.imgur.com/cIXyDVS.jpg');
  }
  ////
  if (message.content === 'numes da vozis') {
    message.reply(
      'e moi ti, jati imadem vise kilometra u rikverc no ti unapred'
    );
  }

  /////
  if (
    message.content ===
    'AHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH KOJI KURAC'
  ) {
    message.reply('pripazi na recnik da ti ne polomim picku');
  }
  ////
  if (message.content === 'wut da hell') {
    message.reply(
      'ebala te amerika eo ti ga tvoi wut da heeeeeeeeeeeeel https://youtu.be/KEjWTZ9eBAI'
    );
  }
  ////
  if (message.content === 'srbija je najbolja drzava') {
    message.reply('eooo vam kuracc https://youtu.be/SiYuXfwz4Nw?t=184');
  }
  ///
  if (message.content === 'desi srbo') {
    message.reply('STIGOOO GAZDAAAAA');
  }

  ///
  if (message.content === 'izviljavamse') {
    message.reply('i bolje ti je da te olomim od batine sade ');
  }
  ///
  if (message.content === 'hahahah') {
    message.reply('STA`E SMESNO BRE? ALO BRE CUES STATE PITAM ');
  }
});

client.login(process.env.TOKEN);
