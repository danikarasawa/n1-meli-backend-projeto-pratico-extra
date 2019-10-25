const app = require('./src/app');
const port = 5000;

app
    .listen(port, function(){
    console.log(`Olha esse appzíneo na porta ${port}, amiga! Você é um tudo!`)
});