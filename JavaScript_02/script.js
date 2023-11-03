let tituloSimples = document.querySelector("h1");
tituloSimples.innerText = "LOJA DE BICICLETAS";
tituloSimples.id =  "titulo";

let nomeItem = document.querySelector("h2");
nomeItem.innerText = "ST 500";

let imagemItem = document.querySelector("span");
imagemItem.id = "imagem-item";
document.getElementById("imagem-item").innerHTML = "<img src='https://decathlonpro.vtexassets.com/arquivos/ids/72007982-628-628/bicicleta-mtb-aro-29-st500-verde-g1.jpg?v=638346178614830000'>";

let precoItem = document.querySelector("h3");
precoItem.innerText = "2.699,99";

let descricaoItem = document.querySelector("p");
descricaoItem.innerText = "Desenvolvida para o ciclista de MTB que busca uma ótima bicicleta aro 29 para mountain bike. A ST 500 foi desenvolvida para suas aventuras no mountain bike, com transmissão shimano 24 marchas, suspensão com trava, freios a disco hidráulicos e rodas com folha dupla aro 29.";


const novoProduto = document.createElement("div");
novoProduto.innerHTML = `
<div class="produto-2">
    <h2>ROCKRIDER ST 50</h2>
    <span>
        <img src="https://decathlonpro.vtexassets.com/arquivos/ids/72085501-628-628/bicicleta-rockrider-st50-aro-26/-/--mountain-bike-vermelho-191.jpg?v=638346278117730000">
    </span>
    <h3 class="preco-2">999,99</h3>
    <p class="descricao-2">Bicicleta desenvolvida para o ciclista que busca confiança e versatilidade para suas primeiras aventuras no mountain bike. Com sua posição confortável e a suspensão dianteira de 50mm, eficaz graças ao leve quadro em alumínio e o transmissão de 21 velocidades.</p>
</div>
`;

const setor = document.querySelector(".container");
setor.appendChild(novoProduto);