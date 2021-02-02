
function botao(){
    document.getElementById("agradecimento").innerHTML = "<strong>Obrigado por clicar</strong>"
    console.log(document.getElementById("agradecimento"));
    alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://twitter.com/home")
    window.location.href = "https://twitter.com/home"
}


function trocar(elemento){
    document.getElementById("mousemove").innerHTML = "Obrigado por passaro mouse";
    alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


function exibeIdade(idade)
{
    var idade = 25;
}
alert("A idade será de " + idade)


function validaIdade(idade){
    var validar; <!-- quando não é declarada a variável (validar) o console utiliza a validar globar (true para >= 18 ou falso se for diferente disso) --!>
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade: ");
console.log(validaIdade(idade))


function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));


var d = new Date();
alert(d.getHours());


var count;
for(count=0; count <= 5; count++){
    alert(count);
}



var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}

var idade = prompt("Qual é a sua idade: ");
if (idade >= 18){
    art("Já pode ser preso");
}else{
    alert("Menor de idade");
};


 var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}, {nome:"abacate", cor:"verde"}];
console.log(frutas);
alert(frutas[1].nome); 

var nome = "Breno César";
var idade = 26;
var num = 11;
var frase = "Japão é o melhor";
var lista = [" maça", " pêra ", " laranja"];
lista.push(" abacate");
lista.pop(), lista.pop()
console.log(lista);
alert(lista);
alert(nome + " tem " + idade + " anos");
alert(idade + num);
console.log(nome);
console.log(idade + num);
console.log(frase.replace("Japão", "Brasil").toLocaleLowerCase());
alert(frase.replace("melhor","melhor time").toUpperCase());
console.log(frase.toUpperCase());
alert(frase.replace("Japão", "Awaí").toLocaleUpperCase());
alert(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" |"));
*/
