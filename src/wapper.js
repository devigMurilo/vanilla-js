import { buscaPessoa } from "./apiwapper"
import { buscaPlaneta } from "./apiwapper"
import { buscatodasPessoas } from "./apiwapper"
import { buscatodasNaves } from "./apiwapper"

export const buscarPersonagem = async (id) => {
    const botao = document.querySelector('#buscar-personagem')
    const input = document.querySelector('#input-personagem')

    const id = input.value

    const personagem = await buscaPessoa(id)
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = `${personagem.name}`

}   


export const buscarPlaneta = async (id) => {
    const botao = document.querySelector('#buscar-planeta')
    const input = document.querySelector('#input-planeta')

    const id = input.value 

    const planeta = await buscaPlaneta(id)
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = `${planeta.name}`
}

export const buscarTodasPessoas = async () => {
    const pessoas = await buscatodasPessoas()
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = `${pessoas.results.map(pessoa => pessoa.name).join(', ')}`

 }

