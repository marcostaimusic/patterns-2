// const App = () =>{
//     const middlewares = []

//     const use = fn => middlewares.push(fn) 

//     const runMiddlewares = ()=>{
//         middlewares[0].call(null, ()=>{console.log('call next')})
//     }

//     const get =()=>{

//         runMiddlewares()
//         console.log('get')
//     }

//     return {
//         get,
//         use 
//     }
// }



const App = () =>{
    const middlewares = []

    const use = fn => middlewares.push(fn) 

    const runMiddlewares = (index)=>{
        const count = middlewares.length
        if (index < count) {
        middlewares[index].call(null, ()=> runMiddlewares(index+1))}
    }

    const get =()=>{

        runMiddlewares(0)
        console.log('get')
    }

    return {
        get,
        use 
    }
}

const app = App()


app.use((next)=> {
    console.log('first one')
    next()
})
app.use((next)=> {
    console.log('second one')
    next()
})
app.get()