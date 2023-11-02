let h1Text = document.getElementById("titulo");
h1Text.innerText = "Adicionando texto ao h1 pelo javascript";
console.log(h1Text);

let aText = document.querySelector("a");
aText.innerText = "Link de acesso ao site da Proz";
console.log(aText);

let itemSimples = document.querySelector("ul");
itemSimples.innerHTML = `
<li>HTML</li>
<li>CSS</li>
<li>JAVASCRIPT</li>
`
let itemOrder = document.getElementById("lista-ordenada");
itemOrder.innerHTML = `
<li><a href="https://google.com">GOOGLE</a></li>
<li><a href="https://youtube.com">YOUTUBE</a></li>
<li><a href="https://msn.com">MSN</a></li>
`