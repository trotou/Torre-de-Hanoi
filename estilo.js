let bloco4 = document.createElement('div')
let bloco3 = document.createElement('div')
let bloco2 = document.createElement('div')
let bloco1 = document.createElement('div')
bloco1.id = 'bloco1'
bloco1.classList = 'bloco'
bloco2.id = 'bloco2'
bloco2.classList = 'bloco'
bloco3.id = 'bloco3'
bloco3.classList = 'bloco'
bloco4.id = 'bloco4'
bloco4.classList = 'bloco'
torre1.appendChild(bloco1)
torre1.appendChild(bloco2)
torre1.appendChild(bloco3)
torre1.appendChild(bloco4)

let lastChild
let torre = ''
let elementos = 0
let click = false
let check

const handleClick = function (event) {
    console.log('começo da função')
    console.log(event.currentTarget.childElementCount)

    let discos = document.querySelectorAll(`#${event.currentTarget.id} .bloco`)

    for(let i = 0; i < discos.length; i++) {
        if(lastChild != undefined){
            if (discos[i].offsetWidth < lastChild.offsetWidth && click == true && torre != event.currentTarget) {
                alert('Sem trapaças!')
                check = false
                click = false
                lastChild = undefined
                return
            }
        }
    }

    if(click == false && event.currentTarget.childElementCount > 0) {
        console.log('entrei para pegar o disco')
        torre = event.currentTarget
        lastChild = torre.lastChild
        click = true
    }
    else if(torre != '') {
        console.log('entrei para colocar o disco')
        torre = event.currentTarget
        torre.appendChild(lastChild)
        click = false
    }

    if(document.querySelectorAll('#torre3 .bloco').length == 4) {
        let body = document.querySelector('body')
        body.innerHTML = 'Venceu Miserávi!!!'
        body.style.backgroundColor = 'red'
        body.style.backgroundImage = 'none'
        body.style.transition = '1000ms'
        body.style.fontSize = '50px'
        body.style.fontWeight = 'bolder'
        body.style.textAlign = 'center'
        body.style.alignContent = 'center'

    }
}

const torres = document.querySelectorAll('div.torre')

for (let i = 0; i < torres.length; i++) {
    torres[i].addEventListener('click', handleClick);
}



