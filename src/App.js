import Textarea from './Textarea'
import Select from './Select'
import Input from './Input'
import Button from './Button'

export class App {

    constructor() {
        this.container = null
        this.requestBody = '{ "name": "Mateusz" }'
        this.responseBody = '{ "name": "Tadeusz" }'
        this.method = 'GET'
        this.URL = ''

        this.isURLFocused = true
        this.isBodyFocused = false
    }

    onRequestBodyChange(newValue) {
        this.requestBody = newValue
        this.isURLFocused = false
        this.isBodyFocused = true
        this.render()
    }

    onRequestMetodChange(newMethod) {
        this.method = newMethod
        this.render()
    }

    onRequestURLChange(newURL) {
        this.URL = newURL
        this.isBodyFocused = false
        this.isURLFocused = true
        this.render()
    }

    render() {

        if (!this.container) {
            this.container = document.createElement('div')
        }

        this.container.innerHTML = ''

        const inputElementURL = new Input(
            this.URL,
            this.onRequestURLChange.bind(this),
            this.isURLFocused
        )

        const textareaElementRequestBody = new Textarea(
            this.requestBody,
            (newValue) => this.onRequestBodyChange(newValue),
            false,
            this.isBodyFocused
        )

        const buttonElementSendRequest = new Button(
            'Send request',
            () => console.log('Send request')
        )

        const textareaElementResponse = new Textarea(
            this.responseBody,
            () => { },
            true
        )

        const selectElementMethod = new Select(
            [
                { label: 'Metoda: GET', value: 'GET' },
                { label: 'Metoda: POST', value: 'POST' },
                { label: 'Metoda: PUT', value: 'PUT' },
                { label: 'Metoda: PATCH', value: 'PATCH' },
                { label: 'Metoda: DELETE', value: 'DELETE' }
            ],
            this.method,
            this.onRequestMetodChange.bind(this)
        )

        this.container.appendChild(inputElementURL.render())
        this.container.appendChild(textareaElementRequestBody.render())
        this.container.appendChild(buttonElementSendRequest.render())
        this.container.appendChild(textareaElementResponse.render())
        this.container.appendChild(selectElementMethod.render())

        return this.container

    }

}

export default App