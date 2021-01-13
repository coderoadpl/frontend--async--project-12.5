export const Button = class {

    constructor(label, onClick, disabled = false) {
        this.label = label
        this.onClick = onClick
        this.disabled = disabled
    }

    render() {
        const button = document.createElement('button')

        button.disabled = this.disabled

        button.innerText = this.label

        button.style.width = '100%'
        button.style.border = '1px solid rgba(0, 0, 0, 1)'
        button.style.outline = 'none'
        button.style.borderRadius = '4px'
        button.style.backgroundColor = '#ffffff'
        button.style.padding = '4px'
        button.style.marginTop = '4px'
        button.style.marginBottom = '16px'
        button.style.minWidth = '20px'
        button.style.cursor = 'pointer'

        button.addEventListener(
            'click',
            () => this.onClick()
        )

        return button
    }

}

export default Button