let contato = require('./usuario');
function adicionar(contatos) {
contatos.id = contato.length + 1;
contato.push(contatos);
}
module.exports = adicionar