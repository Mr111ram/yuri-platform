import 'vite/modulepreload-polyfill'
class Main {
    constructor(selector='#app') {
        this.root = document.querySelector(selector)
    }
    render(template) {
        this.root.innerHTML = template
    }
}

new Main('#app').render(`
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`)