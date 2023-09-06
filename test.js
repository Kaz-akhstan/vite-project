export function test (element) {
    /*
    Maxgräns för visade meddelanden
    Historik för meddelanden
    Lyssna på enter
    Slashkommandon
    Inga tomma meddelanden
    */
    const maxMessages = 10
    let history = []
    let hide = true
    element.querySelector('#send').addEventListener('click', (e) => {
        e.preventDefault()
        const msglist = element.querySelector('#msglist')
        const msg = element.querySelector('#msg').value
        const li = document.createElement('li')
        const warning = document.querySelector('#warning')
        
        if(msg !== '') {
            li.textContent = msg
            msglist.appendChild(li)
            warning.textContent = ''
            element.querySelector('#msg').value = ''
            const date = new Date()
            history.push([msg, date.toLocaleString()])
            if(msglist.children.length >= maxMessages) {
                msglist.removeChild(msglist.firstElementChild)
            }
        }
        else {
            warning.textContent = 'Message can not be empty!'
        }
    })

    element.querySelector('#show').addEventListener('click', (e) => {
        const list = element.querySelector('#historylist')
        const btn = element.querySelector('#show')

        hide = !hide
        if(hide) {
            list.innerHTML = ''
            btn.textContent = 'Show History'
        }
        else {
            btn.textContent = 'Hide History'
            history.forEach(message => {
                const li = document.createElement('li')
                li.textContent = `Message: ${message[0]} Sent: ${message[1]}`
                list.appendChild(li)
            });
        }
    })
}