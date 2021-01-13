import Textarea from './Textarea'
import Select from './Select'

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

        const selectElement = new Select(
            [
                { label: 'First', value: 1 },
                { label: 'Second', value: 2 },
                { label: 'Third', value: 3 }
            ],
            2,
            console.log
        )

        this.container.appendChild(textareaElement1.render())
        this.container.appendChild(textareaElement2.render())
        this.container.appendChild(selectElement.render())

        return this.container

    }

}

export default App