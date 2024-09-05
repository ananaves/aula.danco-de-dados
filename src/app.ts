import express from 'express';
import cors from 'cors';
import { DatabaseModel } from './model/databaseModel';

//definindo a porta do servidor
const port: number = 3333;

//criando servidor web
const server = express ();
server.use(cors());
server.use(express.json());

//rotas de aplicação
server.get('/', (req, res) => {
    res.json({ mensagem: "minha primeira aplicação web"});
});

server.get('/Pessoas', (req, res) => {
    res.json({ mensagem: "Aqui será apresentado os dados das pessoas."});
});

new DatabaseModel().testeConexao().then((resdb)=> {
    if(resdb) {
        console.log("conexão com banco de dados realizada com sucesso!!");
        
        //iniciando o servidor
server.listen(port, () => {
    console.log(`Servidor, iniciado no endereço http://localhost:${port}`);
    });

    } else { 
        console.log("erro ao conectar com o banco de dados");
    }
})

