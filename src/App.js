import Textarea from './Textarea'

export class App {

    constructor() {
        this.container = null
        this.requestBody = '{ "name": "Mateusz" }'
        this.responseBody = '{ "name": "Tadeusz" }'
    }

    onRequestBodyChange(newValue) {
        this.requestBody = newValue
        this.render()
    }

    render() {

        if (!this.container) {
            this.container = document.createElement('div')
        }

        this.container.innerHTML = ''

        const textareaElement1 = new Textarea(
            this.requestBody,
            (newValue) => this.onRequestBodyChange(newValue),
            false
        )
        const textareaElement2 = new Textarea(
            this.responseBody,
            () => {},
            true
        )

        this.container.appendChild(textareaElement1.render())
        this.container.appendChild(textareaElement2.render())

        return this.container

    }

}

export default App