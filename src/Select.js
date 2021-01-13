export class Select {

    constructor(options, value, onChange) {

        this.value = value
        this.options = options
        this.onChange = onChange

    }

    render() {

        const select = document.createElement('select')

        this.options.forEach(({ label, value }) => {

            const option = document.createElement('option')

            option.value = value
            option.innerText = label

            select.appendChild(option)

        })

        select.value = this.value

        select.addEventListener(
            'input',
            (e) => this.onChange(e.target.value)
        )

        return select

    }

}

export default Select