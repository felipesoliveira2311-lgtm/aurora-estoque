
let estoque = [

]
// CARREGAR HISTÓRICO
const carregarHistorico = () => {
    const historico = JSON.parse(localStorage.getItem("historico"));
    return historico;     
};

carregarHistorico() < 1 ?null : estoque = carregarHistorico();





// ATUALIZAÇÃO DE PRODUTOS CARD
const ATUALIZARTOTALPRODUTOS = () => {

    let totalProdutos = 0;
    let unidadesEmEstoque = 0;
    let produtoMinimo = 0;
    let i =0;

    for (i; i < estoque.length; i++) {
        totalProdutos = estoque.length;

        unidadesEmEstoque += estoque[i].quantidade;
   
        estoque[i].quantidade <= estoque [i].minimo ? produtoMinimo++ : null;

        console.log(estoque[i].quantidade, estoque[i].minimo,
            produtoMinimo,
            typeof produtoMinimo
        )
    }
    document.querySelector("#total-produtos-card").innerHTML = `${totalProdutos}`;
    document.querySelector("#quantidade-produtos-card").innerHTML = `${unidadesEmEstoque}`;
    document.querySelector("#produto-minimo-card").innerHTML = produtoMinimo

};

ATUALIZARTOTALPRODUTOS();




// ATUALIZAÇÃO DA PLANILHA DE ESTOQUE:
 const acrescentarHistorico = () =>{
    for (let i=0; i < estoque.length; i++){


        let nomeLista = estoque[i].nome;

        let quantidadeLista =estoque[i].quantidade;

        let minimoLista = estoque[i].minimo;

        statusLista = estoque[i].quantidade <= estoque[i].minimo ?"Estoque baixo" :"normal";


    
         document.querySelector("#produto-lista").innerHTML += `<br>${nomeLista}`

        document.querySelector("#quantidade-lista").innerHTML += `<br>${quantidadeLista}`

        document.querySelector("#estoque-minimo-lista").innerHTML += `<br>${minimoLista}`

        document.querySelector("#status-lista").innerHTML += `<br>${statusLista}`;
    }
}
acrescentarHistorico();





//  BOTAO ADICIONAR PRODUTO:
const ADICIONARPRODUTO = document.querySelector("#adicionar-produto").addEventListener("click", function() {

    let nomeProduto = document.querySelector("#nome-produto").value;
    console.log(`Nome: ${nomeProduto}`);

    let quantidadeArmazenada = Number(document.querySelector("#quantidade-produto").value);   
     console.log(`quantidade: ${quantidadeArmazenada}`);

    let estoqueMinimo = Number(document.querySelector("#estoque-minimo").value);
    console.log(`estoque minimo: ${estoqueMinimo}`);

    let ADICIONARPRODUTO = {
        nome: nomeProduto,
        quantidade: quantidadeArmazenada,
        minimo: estoqueMinimo 
    };

    estoque.push(ADICIONARPRODUTO);
    
   let historico = JSON.stringify(estoque)


    localStorage.setItem("historico", historico);

     
    console.log(historico);

    let nomeProdutoCadastrado = document.querySelector("#produto-lista").innerHTML += `<br>${nomeProduto}`;

    let quantidadeProdutoCadastrado = document.querySelector("#quantidade-lista").innerHTML += `<br>${quantidadeArmazenada}`;

    let minimoProdutoCadastrado = document.querySelector("#estoque-minimo-lista").innerHTML += `<br> ${estoqueMinimo}`;

    console.log(quantidadeProdutoCadastrado)

    ATUALIZARTOTALPRODUTOS();

 
});



