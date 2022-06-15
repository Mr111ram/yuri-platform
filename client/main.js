import 'vite/modulepreload-polyfill'

class Main {
    constructor(selector='#app') {
        this.root = document.querySelector(selector)
    }
    render(template) {
        this.root.innerHTML = template
    }
}

cycle : {
    let count = 1
    const template = `
        <div style="
            width: 160px; 
            height: 80px; 
            padding: 0 5px;
            background: cornflowerblue;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        ">
            <snap style="
                display:inline-block;
                text-align: center;
                font-size: 46px; 
                font-weight: bolder; 
                background-color: black; 
                color: #f2f2f2;
                border-radius: 50%;
                overflow: hidden;
                padding: -5px;
            ">:%%:</snap>     
        </div>
    `
    const page = new Main('#app')
    const renderer = () => {
        count = parseInt(++count)
        page.render(
            template.replace(':%%:', count)
        )
    }
    setInterval(renderer, 1000)
    renderer ()
}