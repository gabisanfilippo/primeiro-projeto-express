let validateCharactersNameMiddleware = (req,res,next) => {
    const dados = req.body
    if (dados.nome.length <= 3) {
        res.send("O nome deve ter mais de 3 caracteres")
    } else {
        next()
    }
}
module.exports = validateCharactersNameMiddleware