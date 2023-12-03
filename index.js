class personagem{
        constructor(nome, idade, classe, habilidade){
            this.nome = nome
            this.idade = idade
            this.classe = classe
            this.habilidade = habilidade
        }
        escrever(){
            console.log(`O ${this.classe} atacou usando ${this.habilidade}`);
        }
        
}

let aventureiro = new personagem ("Nickname", "24", "ninja", )

if (aventureiro.classe === "mago") {
    aventureiro.habilidade = "magia"
    aventureiro.escrever()
}else if (aventureiro.classe === "guerreiro") {
    aventureiro.habilidade = "espada"
    aventureiro.escrever()
}else if (aventureiro.classe === "monge") {
    aventureiro.habilidade = "artes marciais"
    aventureiro.escrever()
}else if (aventureiro.classe === "ninja") {
    aventureiro.habilidade = "shuriken"
    aventureiro.escrever()
}
