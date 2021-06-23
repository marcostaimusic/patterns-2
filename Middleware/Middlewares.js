class Middleware {
    constructor(){
        this.middlewares = []
    }

    
    
    getNum (num){
        this.runMiddlewares(0, num)
        //console.log('get')
    }


    use(fn){
        this.middlewares.push(fn)
    }

    runMiddlewares(index, num){
        const count = this.middlewares.length
        //console.log(num) // fino a qui ci arriva
        if (index < count) {
        //console.log(num + 'ciao') // fino a qui ok
        this.middlewares[index].call(null, ()=>this.runMiddlewares(index+1,num), num)} // con i due num, uno nel parametro della fx e l'altro fuori, funziona, Boh!
    }
}



module.exports = Middleware