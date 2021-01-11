export class Textarea {

    constructor(value, onChange, readonly) {
        this.readonly = readonly
        this.value = value
        this.onChange = onChange
    }

    render() {

        const textarea = document.createElement('textarea')

        textarea.style.width = '100%' 
        textarea.style.minHeight = '200px' 

        textarea.value = JSON.stringify(JSON.parse(this.value), null, 4)
        if (this.readonly) textarea.setAttribute('readonly', 'true')

        textarea.addEventListener(
            'input',
            (e) => this.onChange(e.target.value)
        )

        return textarea

    }

}

export default Textarea
