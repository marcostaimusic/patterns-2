// create a middleware pipeline
const pipeline = Pipeline(
    // with an initial middleware
    (ctx, next) => {
      console.log(ctx)
      next()
    }
  )
  // add some more middlewares
  pipeline.push(
    (ctx, next) => {
      ctx.value = ctx.value + 21
      next()
    },
    (ctx, next) => {
      ctx.value = ctx.value * 2
      next()
    }
  )
  // add the terminating middleware
  pipeline.push((ctx, next) => {
    console.log(ctx)
    // not calling `next()`
  })
  // add another one for fun ¯\_(ツ)_/¯
  pipeline.push((ctx, next) => {
    console.log('this will not be logged')
  })
  // execute the pipeline with initial value of `ctx`
  pipeline.execute({ value: 0 })