import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import {buscarPersonagem, buscarPlaneta, buscarTodasPessoas, buscarTodosPlanetas} from './wapper.js'

document.querySelector('#app').innerHTML = `
<section id="center">
  <div class="hero">
    <h1>star wars personagens</h1>
  </div>
  <div>
    <input type="number" id="input-personagem" placeholder="ID do personagem" />
    <button id="buscar-personagem" type="button" class="counter">buscar personagem </button>

    <input type="number" id="input-planeta" placeholder="ID do planeta" />
    <button id="buscar-planeta" type="button" class="counter">buscar planeta</button>

    input type="number" id="input-todas-pessoas"  />
    <button id="buscar-todas-pessoas" type="button" class="counter">buscar todas as pessoas</button>

    input type="number" id="input-todos-planetas" />
    <button id="buscar-todos-planetas" type="button" class="counter">buscar todas os planeta s</button>
  </div>
</section>

<div class="ticks"></div>


          

<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector('#counter'))
