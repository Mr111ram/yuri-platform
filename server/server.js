import Koa from 'koa'
import Static from 'koa-static'
import Logger from 'koa-logger'
import scripts_builder from "./builder.js";
import dev_server from "./dev_server.js";

const mode = process.env.NODE_ENV

export default async function start_server(port) {
    const app = new Koa()

    return new Promise(async resolve => {
        if (mode === 'development'){
            /* Development mode */
            await dev_server().then((vite) => {
                app.use(Logger({
                    transporter (str, args) {
                        if (args[2] !== '/__vite_ping') {
                            console.log(str.trim())
                        }
                    }
                }))
                app.use(vite)
            })
        } else {
            /* Production mode */
            await scripts_builder().then(() => {
                app.use(Static('public'))
            })
        }
        resolve()
        app.listen(port, () => {
            console.log('platform has run on port ::%i', port)
        })
    })
}