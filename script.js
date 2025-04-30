// Calculadora de Idade: Desenvolver um projeto para calcular a idade de um usuário, fornecido por meio de um formulário.
//  Deverá ser armazenado o dia, mês e ano de nascimento, calcular e retornar quantos anos, meses e dias de vida o usuário tem hoje.
//  Realizando a validação dos dados enviados no formulário: campos vazios, ano no futuro e anos passados ​​possíveis de calcular.


const form = document.querySelector ('form')
const entrada = document.querySelectorAll ('form input')
const button = document.querySelector ('button')



form .addEventListener('submit', (event) => {
    event.preventDefault() 

        const dia= parseInt(document.querySelector ('#day').value)
        const mes = parseInt(document.querySelector ('#month').value)
        const ano = parseInt(document.querySelector ('#year').value)
        const dianatela = document.querySelector ('.day')
        const mesnatela = document.querySelector('.month')
        const anonatela = document.querySelector ('.year')
        const campoobrigatorio = document.querySelectorAll ('.field-required')
        const inforvalidas = document.querySelectorAll ('.valid-info')


        
        const date = new Date()
        const diaatual = date.getDate()
        const mesatual = date.getMonth()+1
        const anoatual = date.getFullYear ()

        let userdia = diaatual - dia
        let usermes = mesatual - mes
        let userano = anoatual - ano


        if(userdia < 0 ){
            const mesp = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
            userdia = mesp+userdia
            usermes--
        }
     
        if(usermes < 0){
            userano--
            usermes = usermes+12
        }



    const ocultarerro = () => {
        campoobrigatorio.forEach((campo) => {
            campo.style.display = 'none'
        })
    }

    const validardados = () => {
        let estaPreenchido = true
    
        entrada.forEach ((userInfo) => {
            if(userInfo.value=== '' ){
                campoobrigatorio.forEach((campo) => {
                    campo.style.display = 'block'
                })
                estaPreenchido = false
            }
    
            userInfo.addEventListener('input', () => {
                ocultarerro() 
            })
        })
    
        return estaPreenchido
    }



    const camposok = () => {
        inforvalidas.forEach((espaco) => {
            espaco.style.display = 'none'
        })
    }


    const checkinfor = () => {
        let inforok = true
    
        if (dia < 1 || dia > 31){
            inforvalidas[0].style.display = 'block'
            inforok = false
        }
        
        if (mes < 1 || mes > 12){
            inforvalidas[1].style.display = 'block'
            inforok = false
        }

        

        if (ano < 1920 || ano > anoatual){
            inforvalidas[2].style.display = 'block'
            inforok = false
        }

        entrada.forEach((infor) => {
            infor.addEventListener ('input', () => {
                camposok()
            })
        })

        return inforok
    }


        if(validardados() && checkinfor()){
            form.addEventListener ('submit', (event) => {
                event.preventDefault() 
            })
            anonatela.textContent = `${userano}`
            mesnatela.textContent = `${usermes}`
            dianatela.textContent = `${userdia}`
        }
        
})



    
    
    

