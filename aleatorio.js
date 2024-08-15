const nomes = ["Yasmin", "Flavia", "Caciele", "Brenda", "Ana", "Suellen", "Deise"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)