import Router from 'koa-router'

const router = new Router()

router.get('/', async (ctx, next) => {
    await next()
    ctx.body = ctx.request.header
})

export default router