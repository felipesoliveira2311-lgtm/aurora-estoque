

//Array de produtos
let estoque = [

]

let excluir;


// CARREGAR HISTÓRICO
//Função puxa o histórico assim que a página inicia.
const carregarHistorico = () => {
    const historico = JSON.parse(localStorage.getItem("historico"));
    return historico;     
};
carregarHistorico() < 1 ?null : estoque = carregarHistorico();



//  BOTAO ADICIONAR PRODUTO:
const ADICIONARPRODUTO = document.querySelector("#adicionar-produto").addEventListener("click", function() {

    //Guarda o valor do input NOME.
    let nomeProduto = document.querySelector("#nome-produto").value;
    console.log(`Nome: ${nomeProduto}`);

    //Guarda o valor do input QUANTIDADE.
    let quantidadeArmazenada = Number(document.querySelector("#quantidade-produto").value);   
     console.log(`quantidade: ${quantidadeArmazenada}`);

    //Guarda o valor do input MINIMO.
    let estoqueMinimo = Number(document.querySelector("#estoque-minimo").value);
    console.log(`estoque minimo: ${estoqueMinimo}`);

    //Guarda os valores para adicionar ao array ESTOQUE.
    let ADICIONARPRODUTO = {
        nome: nomeProduto,
        quantidade: quantidadeArmazenada,
        minimo: estoqueMinimo, 
    };

    //Momento em que o estoque puxa os valores de ADICIONARPRODUTO.
    estoque.push(ADICIONARPRODUTO);
    
    //Transforma os valores do array em JSON, para serem armazenados em texto.
   let historico = JSON.stringify(estoque)

    //Momento em que guarda os da tabela.
    localStorage.setItem("historico", historico);

    //Adiciona o valor do nome do produto a tabela.
    let nomeProdutoCadastrado = document.querySelector("#table-produto").innerHTML += `<br>${nomeProduto}`;

    //Adiciona o valor da quantidade do produto a tabela.
    let quantidadeProdutoCadastrado = document.querySelector("#table-quantidade").innerHTML += `<br>${quantidadeArmazenada}`;

    //Adiciona o valor do minimo de produtos do estoque aceitavel a tabela.
    let minimoProdutoCadastrado = document.querySelector("#table-minimo").innerHTML += `<br> ${estoqueMinimo}`;


    //Atualiza os cards após adicionar um novo produto a tabela.
    ATUALIZARTOTALPRODUTOS(); 
});





// ATUALIZAÇÃO DA PLANILHA DE ESTOQUE:
const acrescentarHistorico = () => {

    //Percorre o array para devolver os valores para a tabela.
    for (let i = 0; i < estoque.length; i++) {

        //Corresponde aos nomes dos produtos da tabela.
        let nomeTabela = estoque[i].nome;

        //Corresponde a quantidade de produtos individual da tabela.
        let quantidadeTabela = estoque[i].quantidade;

        //Corresponde ao minimo aceitavel em estoque na tabela.
        let minimoTabela = estoque[i].minimo;

        //Corresponde ao status do estoque da tabela.
        let statusTabela = estoque[i].quantidade <= estoque[i].minimo ? "Estoque baixo" : "normal";

        const linha = document.createElement ("tr")
        linha.classList.add("flex",  "align-center",  "display")
        linha.innerHTML = `
        <td class="tbody flex">${nomeTabela}</td>
        <td class="tbody flex">${quantidadeTabela}</td>
        <td class="tbody flex">${minimoTabela}</td>
        <td class="tbody flex">${statusTabela}</td>
        <td class="tbody flex">
         <button id="excluir${i}">❌</button>
         <button id="table${i}">✏️</button>
        </td>
        `
        const excluir = linha.querySelector(`#excluir${i}`)

        console.log(excluir)

        excluir.addEventListener("click", function() {
            estoque.splice(i, 1);
            linha.remove();
            linhaHistorico = JSON.stringify(estoque);
            localStorage.setItem("historico", linhaHistorico)
        })
        document.querySelector("#corpo-tabela").appendChild(linha);
    
    }

};
acrescentarHistorico();




// ATUALIZAÇÃO DE PRODUTOS CARD
//Toda vez que um produto é adicionado, o card atualiza.
const ATUALIZARTOTALPRODUTOS = () => {

    //Variaveis dos cards
    let totalProdutos = 0;
    let unidadesEmEstoque = 0;
    let produtoMinimo = 0;
    let i =0;

        //percorre o array para enviar os valores para os cards.
    for (i; i < estoque.length; i++) {
        totalProdutos = estoque.length;

        //Puxa a quantidade de produtos.
        unidadesEmEstoque += estoque[i].quantidade;
   
            //Confere o status do abastecimento do estoque, verificando se a quantidade é menor ou igual ao valor minimo.
        estoque[i].quantidade <= estoque [i].minimo ? produtoMinimo++ : null;

    }

    //Corresponde ao card de total produtos.
    document.querySelector("#total-produtos-card").innerHTML = `${totalProdutos}`;

    //Corresponde ao card de quantidade total de unidades.
    document.querySelector("#quantidade-produtos-card").innerHTML = `${unidadesEmEstoque}`;

    //Corresponde a quantidade de produtos que estão precisando abastecer
    document.querySelector("#produto-minimo-card").innerHTML = produtoMinimo

};
//Chama a função de atualização de produtos.
ATUALIZARTOTALPRODUTOS();

console.log(excluir = ADICIONARPRODUTO());

 document.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(`id: ${event.target.id}`);
    console.log(`class: ${event.target.className}`);
    console.log(`conteudo: ${event.target.textContent}`);
});

