import config from '../vite.config.js'
import c2k from 'koa-connect'
import { createServer } from 'vite'

export default async function dev_server () {
    return new Promise(async (resolve) => {
        const server = await createServer({
            ...config,
            server: {
                hmr: true,
                middlewareMode: 'html'
            }
        })
        await resolve(c2k(server.middlewares))
    })
}