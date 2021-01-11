import Textarea from './Textarea'

export class App {

    constructor() {
        this.container = null
        this.requestBody = '{ "name": "Mateusz" }'
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
        // const textareaElement2 = new Textarea(
        //     '{ "name": "Mateusz" }',
        //     console.log,
        //     true
        // )

        this.container.appendChild(textareaElement1.render())
        // this.container.appendChild(textareaElement2.render())

        return this.container

    }

}

export default App