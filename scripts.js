const button = document.querySelector('button')
let message = document.querySelector('#message')
let result = document.querySelector('#result')
let obj = {}


button.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input')
    let numb = 0
    inputs.forEach((input) => {
        const span = document.querySelector(`label[for="${input.id}"] span`)
        obj[input.id] = input.value
        if (input.required) {
            if (input.value != '') {
                numb += 1
                span.style.color = ''
                span.textContent = ' *'

            } else {
                span.style.color = 'red'
                span.textContent = ' * (required)'


            }
        }
    })

    const password = document.querySelector('input#password').value
    const c_password = document.querySelector('input#c_password').value
    message.textContent = c_password != password ? '* Password does not match': ''
    message.style.color = 'red'
    if (numb == 4 & message.textContent == '') {
        console.clear()
        console.log(obj)
        result.textContent = 'Your Account has been created!'
    } else {
        result.textContent = ''
    }
})
