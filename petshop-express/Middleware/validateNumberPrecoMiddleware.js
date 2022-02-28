let validateNumberPrecoMiddleware = (req,res,next) => {
    let dados = req.body
    if (dados.preco != Number){
        res.send("no campo preço você deve preencher com um número")
    } else {
        next()
    }
}
module.exports=validateNumberPrecoMiddleware