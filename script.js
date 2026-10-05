
let estoque = [

]
/* 
 capturar valores --> armazenar nas variaveis --> colocar dentro de estoque
*/

const carregarHistorico = () => {
    const historico = JSON.parse(localStorage.getItem("historico") || "[]");
    return historico;     
};

estoque = carregarHistorico();

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

console.log(estoque);
 
const adicionarProduto = document.querySelector("#adicionar-produto").addEventListener("click", function() {

    let nomeProduto = document.querySelector("#nome-produto").value;
    console.log(`Nome: ${nomeProduto}`);

    let quantidadeArmazenada = Number(document.querySelector("#quantidade-produto").value);   
     console.log(`quantidade: ${quantidadeArmazenada}`);

    let estoqueMinimo = Number(document.querySelector("#estoque-minimo").value);
    console.log(`estoque minimo: ${estoqueMinimo}`);

    let adicionarProduto = {
        nome: nomeProduto,
        quantidade: quantidadeArmazenada,
        minimo: estoqueMinimo 
    };

    estoque.push(adicionarProduto);
    
   let historico = JSON.stringify(estoque)


    localStorage.setItem("historico", historico);


     
    console.log(historico);

    /*
    POSIÇÕES DO ARRWAY --> PRODUTOS CADASTRADOS --> AGRUPAR AOS LOCAIS RESPECTIVOS.
    */

    let nomeProdutoCadastrado = document.querySelector("#produto-lista").innerHTML += `<br>${nomeProduto}`;

    let quantidadeProdutoCadastrado = document.querySelector("#quantidade-lista").innerHTML += `<br>${quantidadeArmazenada}`;

    let minimoProdutoCadastrado = document.querySelector("#estoque-minimo-lista").innerHTML += `<br> ${estoqueMinimo}`;

    console.log(quantidadeProdutoCadastrado)

    /*
    ATÉ AQUI, EU JÁ CONSEGUI GUARDAR OS VALORES E POSICIONAR ELES. 
    AGORA EU PRECISO QUE TODOS ESSES VALORES SEJAM SALVOS QUANDO ADICIONADOS. ENTÃO:

    ADICIONAR PRODUTO --> ENVIA PARA ARRAY ESTOQUE --> OBJETO ENTRA EM ARRAY ESTOQUE --> LOCAL STORAGE É ATUALIZADO.


    */

});


