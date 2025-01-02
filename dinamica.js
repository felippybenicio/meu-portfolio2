//sanduiche

const sandwich = window.document.getElementById('sanduiche')
const menuVertical = window.document.getElementById('vertical')

sandwich.addEventListener('click', sanduiche)

function sanduiche() {
  menuVertical.style.display = 'block'
}

const sem_menu = window.document.getElementById('X')

sem_menu.addEventListener('click', fechar)

function fechar() {
  menuVertical.style.display = 'none'
}


//mudar de idioma
const idioma = document.getElementById('idioma')
const aside = document.getElementById('traduzir')

aside.addEventListener('mouseout', sair)
aside.addEventListener('mouseenter', entrar)

function entrar() {
    idioma.style.display = 'flex'
    idioma.style.justifyContent = 'space-evenly'
    idioma.style.animation = '.5s' 
}

function sair() {
    idioma.style.display = 'none'
}

//textos
let texto1 = document.getElementById('TextoRecrutador')
let texto2 = document.getElementById('textoFreelancer')
const recrutadorOsDois = document.getElementById('recrutador01') && document.getElementById('recrutador02')
const freelancerOsDois = document.getElementById('freelancer01') && document.getElementById('freelancer02')

const recrutador01 = document.getElementById('recrutador01')
const freelancer01 = document.getElementById('freelancer01')

const recrutador02 = document.getElementById('recrutador02')
const freelancer02 = document.getElementById('freelancer02')


//botões para os textos
recrutadorOsDois.addEventListener('click', paraRecrutar)
freelancerOsDois.addEventListener('click', paraFreelancer)

const posiçãoAtual = window.scrollY; // Obtém a posição atual da página
const posiçãoNecessaria = 1553; // Posição mínima necessária para funcionar

function paraRecrutar() {
    texto1.style.display = 'block'
    texto2.style.display = 'none'

    recrutador01.style.display = 'none'
    freelancer01.style.display = 'none'

    recrutador02.style.display = 'block'
    freelancer02.style.display = 'block'

      if (posiçãoAtual >= posiçãoNecessaria) {
        window.scrollTo({
          top: 1850, // Distância a rolar
          behavior: "smooth", // Rolagem suave
        })
      }
      
    this.classList.add("clicado")
    freelancer02.classList.remove ("clicado")
}

function paraFreelancer() {
    texto2.style.display = 'block'
    texto1.style.display = 'none'

    recrutador01.style.display = 'none'
    freelancer01.style.display = 'none'

    recrutador02.style.display = 'block'
    freelancer02.style.display = 'block'

    if (posiçãoAtual >= posiçãoNecessaria) {
        window.scrollTo({
          top: 1850, // Distância a rolar
          behavior: "smooth", // Rolagem suave
        })
    }

    this.classList.add ("clicado")
    recrutador02.classList.remove("clicado")
clicado
}

console.log(window.scrollY)

function home() {
  window.scrollTo({
  top: 0, // Distância a rolar
  behavior: "smooth", // Rolagem suave
  })
}

function projetos() {
  window.scrollTo({
  top: 614, // Distância a rolar
  behavior: "smooth", // Rolagem suave
  })
}

function sobreMim() {
  window.scrollTo({
  top: 1255, // Distância a rolar
  behavior: "smooth", // Rolagem suave
  })
}

function ajuda() {
  window.scrollTo({
  top: 1925, // Distância a rolar
  behavior: "smooth", // Rolagem suave
  })
}

const menuHorizontal = document.getElementById('horizontal')
const distancia = 614

document.addEventListener("scroll",
  function() {

    if(window.scrollY < distancia) {
      menuHorizontal.style.display = "none"
      
    } else {
      menuHorizontal.style.display = "flex"
    }
  })