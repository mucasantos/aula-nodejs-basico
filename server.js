// framework express para facilitar a nossa vida
/**Os dois comandos sao para utilizar o expree */
const express = require('express');
const app = express();
// o que ele vai usar pra auziliar
app.use(express.json())
//rotas ou endpoints
app.get("/api/banana", (req, res, next) => {
    res.send('<html> <h1>Fruta maravilhosa!!!!</h1> <img src = "https://img.freepik.com/fotos-premium/quadro-negro-com-livro-de-pilha_488220-9873.jpg" height=200> </html>')
})

const isOn = false;

/**
 * Objeto teste para o postman/insomnia
 * 
 * {
	"nome": "Samuel Santos",
	"idade": 45,
	"cidade": "Barueri",
	"endereco": "Rua coisa linda...",
	"email": "samuca@email.com"
}
 * 
 */

app.post("/gravar-dados", (req, res, next) => {
    if (req.body.email ==='samuca@email.com') {
        next()
    } else {
        res.send({ message: "Você não tem autorização" })

    }
}, (req, res, next) => {
    console.log(req.body)
    res.send({ message: "Recebido" })
})
app.listen(5353, () => {
    console.log('Servidor com express no ar...')
})


//Criar servidor nodejs SEM express!
// 1 passo - importar o http
//const http = require('http');
//2 passo

//Objetos test
//devolver um objeto json


let livro = {
    autor: "Samuel Santos",
    ano: 2023,
    imagem: "https://ayine.com.br/wp-content/uploads/2022/03/Miolo-diagonal-O-livro-dos-amigos-site.png",
    editora: "Cuzcuz com leite"
}

const usuario = {
    nome: "Samuel Santos",
    endereco: {
        rua: "Dona Maria Cicera, 2022",
        bairro: "Jardim Maravilha",
        cidade: "Carapicuiba",
        estado: "SP",
    },
    telefone: "11 91234-4568",
    email: "samu@email.com",
    avatar: "https://pickaface.net/gallery/avatar/enye5627d36b2a502.png",
};




/*
const myserver = http.createServer((req, res) => {
    if (req.url === '/api/vendas') {
        res.end('<h1>Setor de compras</h1>')
    } else if (req.url === '/fruta') {
        res.end('<html> <h1>Fruta maravilhosa!!!!</h1> <img src = "https://img.freepik.com/fotos-premium/banana-no-fundo-branco_88281-24.jpg?w=2000" height=200> </html>')
    } else if (req.url === '/livro')
        res.end(JSON.stringify(livro))
    else if (req.url === '/usuario' && req.method ==='POST')
        res.end(JSON.stringify(usuario))
    else {
        res.end('<h1>Não encontrei!!!</h1>')
    }
})

//10.85.170.32:5353

myserver.listen(5353, () => {
    console.log('Servidor no ar...')
})
*/
//http://localhost:5353/