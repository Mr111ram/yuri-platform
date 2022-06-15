import Koa from 'koa'
import Static from 'koa-static'
import Logger from 'koa-logger'
import router from "../routes/router.js"
import render_page from "./render.js"
import scripts_builder from "./builder.js";
import dev_server from "./dev_server.js";

const mode = process.env.NODE_ENV

export default async function start_server(port) {
    const app = new Koa()

    if (mode === 'development'){
        /* Development mode */
        await dev_server().then((vite) => {
            app.use(Logger())
            app.use(vite)
        })
    } else {
        /* Production mode */
        await scripts_builder().then(() => {
            app.use(Static('public'))
        })
    }

    app.use(router.routes())
    app.use(router.allowedMethods())

    app.listen(port, () => {
        console.clear()
        console.log('platform has run on port ::%i', port)
    })
}