//menu horizontal
document.addEventListener("DOMContentLoaded", menu)
window.addEventListener("scroll", menu)
window.addEventListener("resize", menu)

function menu() {
  const menuHorizontal = document.getElementById('horizontal')
  const distancia = 593
  
  if (window.innerWidth >= 900) {
    if(window.scrollY <= distancia) {
      menuHorizontal.style.display = "none"
    }else {
      menuHorizontal.style.display = "flex"
    }
  } else {
    menuHorizontal.style.display = "none"
  }
}

//sanduiche

const sandwich = window.document.getElementById('sanduiche')
const menuVertical = window.document.getElementById('vertical')

sandwich.addEventListener('click', sanduiche)

function sanduiche() {
  menuVertical.style.display = 'block'
}

document.addEventListener("DOMContentLoaded", fechar)
window.addEventListener("resize", fechar)
const sem_menu = window.document.getElementById('X')

sem_menu.addEventListener('click', fechar)

function fechar() {
  if (window.innerWidth > 900) {
    menuVertical.style.display = 'block'
  } else {
    menuVertical.style.display = ' none'
  }
}


//botão idioma
document.addEventListener("DOMContentLoaded", () => {

const idioma = document.getElementById('idioma')
const aside = window.document.getElementById('traduzir')

aside.addEventListener ('click', clicar)
function clicar() {
  if (idioma.style.display === 'none') {
    idioma.style.display = 'flex'
  } else {
    idioma.style.display = 'none'
  }
}})

//mudar idioma


function ingles() {
  document.querySelector('#frase').textContent = "I’m a full-stack developer, bringing performance, design, and functionality together in a single codebase!"

  document.querySelector('#resumo').innerHTML = "Hello! I'm <strong>Felippy Benicio Joaquim Braga</strong>, a full-stack developer specializing in <strong>PHP, JavaScript, HTML, and CSS</strong>. I can help turn your dreams into code!"

  

  document.querySelector('#H').textContent = "Home"
  document.querySelector('#P').textContent = "My Projects"
  document.querySelector('#S').textContent = "About Me"
  document.querySelector('#A').textContent = "How can I help you?"
  document.querySelector('#idi').textContent = "Lenguage"
  document.querySelector('#idiHori').textContent = "Lenguage"
  document.querySelector('#horiH').textContent = "Home"
  document.querySelector('#horiP').textContent = "My Projects"
  document.querySelector('#horiS').textContent = "About Me"
  document.querySelector('#horiA').textContent = "How can I help you?"
  document.querySelector('#tituloP').textContent = "My Projects"
  document.querySelector('#tituloS').textContent = "About Me"
  document.querySelector('#tituloA').textContent = "How can I help you?"

  document.querySelector('#mim').innerHTML = "Hello, I'm <strong>Felippy Benicio Joaquim Braga</strong>, a junior programmer with a passion for software development that began about three years ago while I was still in school. Since then, I have been dedicated to learning programming in a self-taught manner, exploring free content on YouTube and courses on Udemy. Throughout this journey, I have developed skills in <strong>algorithms, HTML, CSS, JavaScript, and PHP</strong>, and I am expanding my knowledge to include languages such as <strong>C, C++, C#, Java, and Python</strong>.<br><br>Currently, I am pursuing a career in software development, particularly in web development and backend programming, where I can create innovative and efficient solutions. Additionally, I'm studing for my career in <strong>Systems Analysis and Development</strong>, where I will deepen my knowledge of data structures and algorithms—an essential foundation for growth in this field.<br><br>For me, learning is a continuous journey. I have an advanced level of English and am studying Spanish, aiming to collaborate on international projects and communicate with developers worldwide.<br><br>If you're interested in seeing some of my practical projects and following my progress, feel free to check out my GitHub. Let's build the future of technology together!"

  document.querySelector('#recrutador01').textContent = "I am a recruiter for a company"
  document.querySelector('#freelancer01').textContent = "I need help with my project"
  document.querySelector('#recrutador02').textContent = "I am a recruiter for a company"
  document.querySelector('#freelancer02').textContent ="I need help with my project"

  document.querySelector('#skills').textContent = "My skills"
  document.querySelector('#cv').textContent = "My resume/CV"
  document.querySelector('#formal').textContent = "Formal resume, no photo"
  document.querySelector('#informal').textContent = "Informal resume, with photo"


  document.querySelector('#TextoRecrutador').textContent  = "Hello, Recruiter! If you're looking for a motivated full-stack developer with a strong desire to grow, I could be an excellent addition to your team. I am a dedicated young professional with great enthusiasm for learning new technologies and receiving feedback. I believe in the power of collaboration and am always committed to adapting to challenges and contributing to the success of the team and the company."
  document.querySelector('#textoFreelancer').textContent  = "Looking for someone to bring your project to life? I can help! I’m a developer specializing in creating responsive and dynamic websites, with skills in both front-end and back-end development. My focus is on delivering customized and functional solutions that meet your needs and provide a great user experience. Shall we talk about how to turn your ideas into reality?"

  document.querySelector('#contato').textContent = "Find me on the following platforms"
  document.querySelector('#direitos').innerHTML = "© 2024 <strong>Felippy Benicio Joaquim Braga</strong>. All rights reserved."
} 


function espanhol() {
  document.querySelector('#frase').textContent = "Soy desarrollador full-stack, combinando rendimiento, diseño y funcionalidad en un solo código."

  document.querySelector('#resumo').innerHTML = "¡Hola! Soy <strong>Felippy Benicio Joaquim Braga</strong>, desarrollador full-stack especializado en PHP<strong>, JavaScript, HTML y CSS</strong>. ¡Puedo ayudarte a convertir tus sueños en código!"

  document.querySelector('#H').textContent = "Inicio"
  document.querySelector('#P').textContent = "Mis Proyectos"
  document.querySelector('#S').textContent = "Acerca de Mí"
  document.querySelector('#A').textContent = "¿Como Puedo Ayudarte?"
  document.querySelector('#idi').textContent = "Linguagem"
  document.querySelector('#idi').style.padding = "10px 20px"
  document.querySelector('#idiHori').textContent = "Linguagem"
  document.querySelector('#horiH').textContent = "Inicio"
  document.querySelector('#horiP').textContent = "Mis Proyectos"
  document.querySelector('#horiS').textContent = "Acerca de Mí"
  document.querySelector('#horiA').textContent = "¿Como Puedo Ayudarte?"
  document.querySelector('#tituloP').textContent = "Mis Proyectos"
  document.querySelector('#tituloS').textContent = "Acerca de Mí"
  document.querySelector('#tituloA').textContent = "¿Como Puedo Ayudarte?"

  document.querySelector('#mim').innerHTML = "Hola, soy <strong>Felippy Benicio Joaquim Braga</strong>, un programador en inicio de carrera con una pasión por el desarrollo de software que comenzó hace aproximadamente tres años, cuando aún estaba en la escuela. Desde entonces, me he dedicado a aprender programación de manera autodidacta, explorando contenido gratuito en YouTube y cursos en Udemy. A lo largo de este camino, he desarrollado habilidades en <strong>algoritmos, HTML, CSS, JavaScript y PHP</strong>, y estoy ampliando mis conocimientos a lenguajes como <strong>C, C++, C#, Java y Python</strong>.<br><br>Actualmente, busco una carrera en el desarrollo de software, especialmente en el desarrollo web y la programación backend, donde pueda crear soluciones innovadoras y eficientes. Además, estoy etudiando para mi carrera en <strong>Análisis y Desarrollo de Sistemas</strong>, donde profundizaré mis conocimientos en estructuras de datos y algoritmos, una base esencial para avanzar en el área.<br><br>Para mí, el aprendizaje es un viaje continuo. Tengo un nivel avanzado de inglés y estoy estudiando español, con el objetivo de colaborar en proyectos internacionales y comunicarme con desarrolladores de todo el mundo.<br><br>Si te interesa conocer algunos de mis proyectos prácticos y seguir mi evolución, visita mi GitHub. ¡Construyamos juntos el futuro de la tecnología!"

  document.querySelector('#recrutador01').textContent = "Soy reclutador para una empresa"
  document.querySelector('#freelancer01').textContent = "Necesito ayuda con mi proyecto"
  document.querySelector('#recrutador02').textContent = "Soy reclutador para una empresa"
  document.querySelector('#freelancer02').textContent = "Necesito ayuda con mi proyecto"

  document.querySelector('#skills').textContent = "Mis habilidades"
  document.querySelector('#cv').textContent = "Currículum Vitae"
  document.querySelector('#formal').textContent = "CV formal, sin foto"
  document.querySelector('#informal').textContent = "CV informal, con foto"

  document.querySelector('#TextoRecrutador').textContent  = "¡Hola, Reclutador! Si buscas un desarrollador full-stack motivado y con un gran deseo de crecer, podría ser una excelente elección para tu equipo. Soy un joven dedicado, con gran entusiasmo por aprender nuevas tecnologías y recibir retroalimentación. Creo en el poder de la colaboración y siempre estoy comprometido a adaptarme a los desafíos y contribuir al éxito del equipo y la empresa."
  document.querySelector('#textoFreelancer').textContent  = "¿Estás buscando a alguien que le dé vida a tu proyecto? ¡Puedo ayudarte! Soy un desarrollador especializado en la creación de sitios web responsivos y dinámicos, con habilidades tanto en front-end como en back-end. Mi enfoque es ofrecer soluciones personalizadas y funcionales que se adapten a tus necesidades y brinden una excelente experiencia de usuario. ¿Hablamos sobre cómo convertir tus ideas en realidad?"

  document.querySelector('#contato').textContent = "Encuéntrame en las siguientes plataformas:"
  document.querySelector('#direitos').innerHTML = "© 2024 <strong>Felippy Benicio Joaquim Braga</strong>. Todos los derechos reservados."
}

function portugues() {
  ingles && espanhol === false
}

document.addEventListener("DOMContentLoaded", () => {
const asideHori = window.document.getElementById('traduzirHori')
const indiomaMenuHorizontal = document.getElementById('idiomaHori')
const idi = document.getElementById('idiHori')

asideHori.addEventListener ('click', clicarHorizontal)
function clicarHorizontal() {
  if (indiomaMenuHorizontal.style.display === 'none') {
    indiomaMenuHorizontal.style.display = 'flex'
    idi.style.fontSize = '0.8em'
    idi.style.padding = '5px 30px'
  } else {
    indiomaMenuHorizontal.style.display = 'none'
    idi.style.fontSize = '1em'
    idi.style.padding = '10px 35px'
  }
}})
  


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

function paraRecrutar() {
    texto1.style.display = 'block'
    texto2.style.display = 'none'

    recrutador01.style.display = 'none'
    freelancer01.style.display = 'none'

    recrutador02.style.display = 'block'
    freelancer02.style.display = 'block'

    
    if (innerWidth <= 930) {
      window.scrollTo({
      top: 2825, 
      behavior: "smooth",
      })
      
    } else {
      window.scrollTo({
      top: 1790, 
      behavior: "smooth",
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
    
      
    if (innerWidth <= 930) {
      window.scrollTo({
      top: 2825, 
      behavior: "smooth",
      })
    } else {
      window.scrollTo({
      top: 1790, 
      behavior: "smooth",
      })
    }
    

    this.classList.add ("clicado")
    recrutador02.classList.remove("clicado")

}

//rolagem
const menuHorizontal = document.getElementById('horizontal')

function home() {
    window.scrollTo({
    top: 0, 
    behavior: "smooth",
    })
    
    
    
}



function projetos() {
  
  if (innerWidth = 930) {
    window.scrollTo({
    top: 600,
    behavior: "smooth",
    })
  } else {
      window.scrollTo({
      top: 50,
      behavior: "smooth",
    })
  }
}

function sobreMim() {
  if (innerWidth = 930) {
    window.scrollTo({
    top: 1300,
    behavior: "smooth",
    })

  } else {
    window.scrollTo({
    top: 1275,
    behavior: "smooth",
    })
  }
}
console.log(window.scrollY)
function ajuda() {
  if (innerWidth = 930) {
    window.scrollTo({
    top: 1920,
    behavior: "smooth",
    })
  } else {
    window.scrollTo({
    top: 1255,
    behavior: "smooth",
    })
  }
}

//efeito nos botoes
