import Koa from 'koa'
import Logger from 'koa-logger'
import router from './router.js'

const mode = process.env.NODE_ENV

export default async function api_server(port) {
    const server = new Koa ()

    if (mode === 'development') {
        server.use(Logger())
    }

    return new Promise(resolve => {
        resolve(server, router)
        server.use(router.routes())
        server.use(router.allowedMethods())
        server.listen(port, () => {
            console.log('api server has been listen on port ::%i', port)
        })
    })
}