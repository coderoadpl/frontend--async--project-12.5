export class Select {

    constructor(options, value, onChange) {

        this.options = [
            { label: 'First', value: 1 },
            { label: 'Second', value: 2 },
            { label: 'Third', value: 2 }
        ]

    }

    render() {

        const select = document.createElement('select')

        this.options.forEach(({ label, value }) => {

            const option = document.createElement('option')

            option.value = value
            option.innerText = label

            select.appendChild(option)

        })

        return select

    }

}

export default Select