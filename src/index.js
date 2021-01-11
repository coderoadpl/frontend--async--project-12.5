import Textarea from './Textarea'

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

document.body.appendChild(textareaElement1.render())
document.body.appendChild(textareaElement2.render())
