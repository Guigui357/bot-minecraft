const { createClient } = require('bedrock-protocol');

const client = createClient({
  host: 'guilherminhohh-PfKH.aternos.me',
  port: 35044,
  username: 'BotDoGuga',
  offline: true
});

client.on('join', () => {
  console.log('Bot entrou no servidor!');
  client.queue('chat', { message: 'Oi, eu sou o bot do Gugazinho!' });
});

client.on('disconnect', (packet) => {
  console.log('Desconectado:', packet);
});
