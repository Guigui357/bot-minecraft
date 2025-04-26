const bedrock = require('bedrock-protocol');
const { Vec3 } = require('vec3');

// Conectando-se ao servidor Bedrock
const client = bedrock.createClient({
  host: 'mi-7ad2cbcf.axenthost.me',  // Endereço do servidor
  port: 40212,             // Porta padrão do Minecraft Bedrock
  username: 'GugaBot',     // Nome do bot
  version: '1.21',         // Versão do servidor (ajuste conforme necessário)
});

// Quando o bot se conectar ao servidor
client.on('connected', () => {
  console.log('Bot conectado ao servidor!');
  client.chat('Olá, eu sou o GugaBot!');
});

// Função para minerar blocos
async function minerar() {
  console.log('Bot começando a minerar...');
  
  // Exemplo: minerar blocos como diamante, ferro, ouro, esmeralda, carvão e lapis
  let blocksToMine = ['diamond_ore', 'iron_ore', 'gold_ore', 'emerald_ore', 'coal_ore', 'lapis_ore'];
  
  for (let i = 0; i < blocksToMine.length; i++) {
    const bloco = blocksToMine[i];
    // Procura o bloco ao redor da posição do bot
    client.chat(`Bot minerando ${bloco}`);
    
    // Aqui você faria a ação de minerar com o bot, como detectar blocos e minerá-los
    client.chat(`Mineração de ${bloco} concluída.`);
    
    // Em um código real, você precisaria checar a posição, minerar o bloco e coletar o item.
  }
}

// Função para dividir recursos com o jogador
async function dividirItens() {
  console.log('Bot começando a dividir itens...');
  
  // Exemplo: dividir diamantes, ouro, ferro, esmeralda, carvão e lapis
  let itens = ['diamond', 'gold_ingot', 'iron_ingot', 'emerald', 'coal', 'lapis_lazuli'];
  let quantidade = { 
    'diamond': 10, 
    'gold_ingot': 5, 
    'iron_ingot': 20,
    'emerald': 2,
    'coal': 30,
    'lapis_lazuli': 15
  }; // Quantidades de exemplo
  
  // Divide os itens coletados (por exemplo, dividir igualmente entre os players ou entre os baús)
  for (let i = 0; i < itens.length; i++) {
    let item = itens[i];
    let quantidadeItem = quantidade[item];
    
    // Aqui você pode definir a lógica para dividir, seja em baús ou entre jogadores
    client.chat(`Dividindo ${quantidadeItem} de ${item} com você!`);
  }
}

// Quando o bot receber mensagens do servidor
client.on('message', (message) => {
  console.log(`Recebido do chat: ${message}`);
  
  // Comando personalizado para o bot
  if (message.toLowerCase().includes('minere e divida')) {
    minerar();       // Bot minerando
    dividirItens();  // Bot dividindo os itens com o jogador
  }
});

client.connect();
