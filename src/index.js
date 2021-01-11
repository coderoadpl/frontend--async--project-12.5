import Textarea from './Textarea'

const textareaElement = new Textarea('hello', console.log, true)

document.body.appendChild(textareaElement.render())
