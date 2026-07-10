import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <h1>star wars personagens</h1>
  </div>
  <div>
    <button id="buscar-personagem" type="button" class="counter">buscar personagem </button>
    <button id="buscar-planeta" type="button" class="counter">buscar planeta</button>
    <button id="buscar-todas-pessoas" type="button" class="counter">buscar todas as pessoas</button>
    <button id="buscar-todos-planetas" type="button" class="counter">buscar todas os planeta s</button>
  </div>
</section>

<div class="ticks"></div>


          

<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector('#counter'))
