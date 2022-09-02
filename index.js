const customExpress = require('./config/customExpress')
const conexao = require ('./infraestrutura/conexao')
const tabelas = require ('./infraestrutura/tabelas')
conexao.connect(erro =>{
    if(erro) {
    console.log(erro)
    } else {
        console.log('conectado com sucesso')
        tabelas.init(conexao)
        
    const app = customExpress()

    app.listen(3123, ()=> console.log('server running on port 3123'))

    }
})
