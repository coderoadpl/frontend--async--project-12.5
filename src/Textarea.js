export class Textarea {

    constructor(value, onChange) {
        this.value = value
        this.onChange = onChange
    }

    render() {

        const textarea = document.createElement('textarea')

        textarea.value = this.value

        textarea.addEventListener(
            'input',
            (e) => this.onChange(e.target.value)
        )

        return textarea

    }

}

export default Textarea
