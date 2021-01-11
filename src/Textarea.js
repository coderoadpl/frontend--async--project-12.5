export class Textarea {

    constructor(value, onChange, readonly) {
        this.readonly = readonly
        this.value = value
        this.onChange = onChange
    }

    render() {

        const textarea = document.createElement('textarea')

        textarea.value = this.value
        if (this.readonly) textarea.setAttribute('readonly', 'true')

        textarea.addEventListener(
            'input',
            (e) => this.onChange(e.target.value)
        )

        return textarea

    }

}

export default Textarea
