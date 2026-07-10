import { buscaPessoa } from "./apiwapper"
import { buscaPlaneta } from "./apiwapper"
import { buscatodasPessoas } from "./apiwapper"
import { buscatodasNaves } from "./apiwapper"

export const buscarPersonagem = async (id) => {
    const personagem = await buscaPessoa(id)
    const personagemElement = document.getElementById('#buscar-personagem')
    personagemElement.addEventListener('click', async () => {
        const container = document.querySelector('#buscar-personagem')
        container.innerHTML = `<p>${personagem.name}</p>`

         personagem.forEach((personagem) => {
            const container = document.querySelector('#buscar-personagem')
            container.innerHTML += `<p>${personagem.name}</p>`
    })
})
}   


export const buscarPlaneta = async (id) => {
    const planeta = await buscaPlaneta(id)
    console.log(planeta)
}

export const buscarTodasPessoas = async () => {
    const pessoas = await buscatodasPessoas()
    console.log(pessoas)
}

export const buscarTodasNaves = async () => {
    const naves = await buscatodasNaves()
    console.log(naves)
}