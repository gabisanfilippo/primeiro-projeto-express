let validateCharactersDescricaoMiddleware = (req,res,next) => {
    let dados = req.body
    if (dados.descricao.length <= 10){
        res.send("o campo descrição tem que ter mais de 10 caracteres")
    } else {
        next()
    }
}
module.exports = validateCharactersDescricaoMiddleware