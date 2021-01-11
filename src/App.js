import Textarea from './Textarea'

export class App {

    constructor() {}

    render() {

        const container = document.createElement('div')

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

        container.appendChild(textareaElement1.render())
        container.appendChild(textareaElement2.render())
        
        return container

    }

}

export default App