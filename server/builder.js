import config from '../vite.config.js'
import { build } from 'vite'

export default async function scripts_builder () {
    return new Promise(async (resolve) => {
        await build(config)
        await resolve()
    })
}