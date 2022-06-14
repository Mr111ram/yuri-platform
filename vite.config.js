import { defineConfig } from 'vite'
import { join, resolve } from 'node:path'
import { inspect } from 'node:util'
import { fileURLToPath } from 'node:url'

const root_dir = resolve ()
const mode = process.env.NODE_ENV
const is_dev = mode === 'development'
const dir = (path) => join(root_dir, ...path)

const config = defineConfig({
    root: dir`client`,
    build: {
        target: (is_dev
            ? 'esnext'
            : 'modules'
        ),
        sourcemap: is_dev,
        outDir: dir`public`,
        rollupOptions: {
            input: dir`client/main.js`
        },
        minify: (!is_dev || 'esnext'),
        emptyOutDir: true,
    },
    mode
})

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    console.log(inspect(config))
}

export default config