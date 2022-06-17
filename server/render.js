export default function render_page (opts) {
    return async (ctx) => {
        ctx.body = `
        <!doctype html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${opts.title ?? 'default'}</title>
            <link rel="shortcut icon" href="/favicon.svg">
        </head>
        <body>
            <div id="app"><h1>${opts.title ?? 'default'}</h1></div>
            <script src="/assets/main.js"></script>
        </body>
        </html>
        `
    }
}