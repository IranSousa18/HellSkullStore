const pesquisaInput = document.getElementById("pesquisaJogos")
const jogos = document.querySelectorAll(".card")
pesquisaInput.addEventListener("input",  () => {

    const valorPesquisa = pesquisaInput.value.toLowerCase()
    jogos.forEach((jogo) => {
        const titulo =
        jogo.querySelector("h3")
        .innerText
        .toLowerCase()
        if(titulo.includes(valorPesquisa)){
            jogo.style.display = "block"
        }else{
            jogo.style.display = "none"
        }
    })
})