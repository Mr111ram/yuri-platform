import start_server from './server/server.js'
import api_server from './api/server.js'

const port = 3001
const api_port = 3032

async function start () {
    return await new Promise(async (res, rej) => {
        try {
            res()
            await start_server (port)
            await api_server (api_port)
        } catch (err) {
            throw rej (err)
        }
    })
}

console.clear()
await start()
    .then(() => console.log('Yuri Platform has been started...'))
    .catch((err) => new Error(err))