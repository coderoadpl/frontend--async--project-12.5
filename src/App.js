import Textarea from './Textarea'
import Select from './Select'
import Input from './Input'
import Button from './Button'
import Message from './Message'

import { fetchData } from './fetchData'

export class App {

    constructor() {
        this.container = null
        this.requestBody = '{ "name": "CodeRoad" }'
        this.responseBody = ''
        this.method = 'GET'
        this.URL = ''

        this.caretPositionURL = 0
        this.caretPositionBody = null

        this.isLoading = false
    }

    onSendRequestClick() {
        return fetchData(
            this.URL,
            {
                method: this.method,
                body: this.method === 'GET' ? undefined : this.requestBody,
                responseTransformFunction: 'text',
                startCallback: () => {
                    this.isLoading = true
                    this.render()
                },
                successCallback: (responseBody) => this.responseBody = responseBody,
                catchCallback: (error) => this.responseBody = error.message,
                endCallback: () => {
                    this.isLoading = false
                    this.render()
                },
            }
        )
    }

    onRequestBodyChange(newValue, caretPosition) {
        this.requestBody = newValue
        this.caretPositionURL = null
        this.caretPositionBody = caretPosition
        this.render()
    }

    onRequestMetodChange(newMethod) {
        this.method = newMethod
        this.render()
    }

    onRequestURLChange(newURL, caretPosition) {
        this.URL = newURL
        this.caretPositionBody = null
        this.caretPositionURL = caretPosition
        this.render()
    }

    render() {

        if (!this.container) {
            this.container = document.createElement('div')
            this.container.style.maxWidth = '700px'
            this.container.style.margin = '0 auto'
        }

        this.container.innerHTML = ''

        if (this.isLoading) {
            const messageElement = new Message('Sending request...')

            this.container.appendChild(messageElement.render())

            return this.container
        }

        const inputElementURL = new Input(
            this.URL,
            this.onRequestURLChange.bind(this),
            this.caretPositionURL,
            'Request URL'
        )

        const textareaElementRequestBody = new Textarea(
            this.requestBody,
            (newValue, caretPosition) => this.onRequestBodyChange(newValue, caretPosition),
            false,
            this.caretPositionBody
        )

        const buttonElementSendRequest = new Button(
            'Send request',
            () => this.onSendRequestClick()
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
        this.container.appendChild(document.createTextNode('Request body'))
        this.container.appendChild(textareaElementRequestBody.render())
        this.container.appendChild(buttonElementSendRequest.render())
        this.container.appendChild(document.createTextNode('Response body (readonly)'))
        this.container.appendChild(textareaElementResponse.render())
        this.container.appendChild(selectElementMethod.render())

        return this.container

    }

}

export default App