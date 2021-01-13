class Input {

    constructor(value, onInput, isFocused) {
        this.value = value
        this.onInput = onInput
        this.isFocused = isFocused
    }

    render() {

        const input = document.createElement('input')

        input.style.width = '100%'
        input.style.height = '40px'
        input.style.paddingLeft = '10px'
        input.style.marginBottom = '16px'
        input.style.borderRadius = '4px'
        input.style.border = '1px solid gray'
        input.style.boxSizing = 'border-box'

        input.value = this.value

        input.addEventListener(
            'input',
            (e) => this.onInput(e.target.value)
        )

        if (this.isFocused) {
            queueMicrotask(() => input.focus())
        }

        return input

    }

}

export default Input