const api = 'https://swapi.dev/api/'

export const buscaPessoa = async (id) => {
    const response = await fetch(`${api}people/${id}`)
    const data = await response.json()
    return data
    console.log(data)
}

export const buscaPlaneta = async (id) => {
    const response = await fetch(`${api}planets/${id}`)
    const data = await response.json()
    return data
    console.log(data)
}

export const buscatodasPessoas = async () => {
    const response = await fetch(`${api}people/`)
    const data = await response.json()
    return data
    console.log(data)
}

export const buscatodasNaves = async () => {
    const response = await fetch(`${api}starships/`)
    const data = await response.json()
    return data
    console.log(data)
}


