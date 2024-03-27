const button = document.querySelector('button')
let message = document.querySelector('#message')

button.addEventListener('click', () => {
    const password = document.querySelector('input#password').value
    const c_password = document.querySelector('input#c_password').value
    console.log(c_password)
    console.log(password)
    message.textContent = c_password!=password ? '* Password does not match': ''
})
