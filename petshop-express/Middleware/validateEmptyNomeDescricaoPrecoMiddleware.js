let validateEmptyNomeDescricaoPrecoMiddleware = (req,res,next) => {
    const dados = req.body
    if (dados.nome == null) {
        res.send("O campo nome é obrigatório")
    } else {
        if (dados.preco == null) {
            res.send("o campo preco é obrigatório")
        } else {
            if(dados.descricao == null) {
                res.send("o campo descrição é obrigatório")
            } else {
                next()
            }
        }
    }
}
module.exports = validateEmptyNomeDescricaoPrecoMiddleware