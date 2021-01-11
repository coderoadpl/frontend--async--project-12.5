import Textarea from './Textarea'

export class App {

    constructor(selector) {
        this.container = document.querySelector(selector)

        this.render()
    }

    render() {

        this.container.innerHTML = ''

        const textareaElement1 = new Textarea(
            '{ "name": "Mateusz" }',
            console.log,
            false
        )
        const textareaElement2 = new Textarea(
            '{ "name": "Mateusz" }',
            console.log,
            true
        )

        this.container.appendChild(textareaElement1.render())
        this.container.appendChild(textareaElement2.render())

    }

}

export default App