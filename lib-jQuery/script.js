$(document).ready(function(){
    $('#telefone').mask("(00) 00000-0000")

    $('#formularioMensagem').validate({
        rules:{
            nome:{
                required: true,
                minWords: 2
            },
            email:{
                required: true,
                email: true
            },
            mensagem:{
                required: true,
                maxlength: 500
            }
        },
        messages:{
            nome:"Por favor digite seu Nome e Sobrenome",
            email:"Por favor digite seu Email"
        },
        submitHandler: function(form){
            alert('Sucesso!!, Formulario enviado por gentileza aguarde sua resposta.')
        }
    })
})

const header = document.getElementById('cabecalho-scroll')
const headerClassList = header.classList
window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        if (!headerClassList.contains('headerSecundario')) {
            headerClassList.add('headerSecundario')
        }
    }else {
    if (headerClassList.contains('headerSecundario')) {
            headerClassList.remove('headerSecundario')
        }
    }
})