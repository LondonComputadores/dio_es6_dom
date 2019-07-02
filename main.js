
function clicked(){
    document.getElementById("thanks").innerHTML = "<b>Thanks for clicking</b>";
}

function redirect(){
    window.open("https://globallabs.academy/");
    //window.location.href("https://globallabs.academy/");
}

function change(element){
    //document.getElementById("change").innerHTML = "<b>Thanks for passing the mouse over here!</b>";
    element.innerHTML = "Thanks for passing the mouse over here!"
}

function comeback(element){
    //document.getElementById("comeback").innerHTML = "<b>Pass mouse over here!</b>";
    element.innerHTML = "Pass the mouse here!"
}

function load(){
    alert("Page loaded!")
}

/*
function soma(n1, n2) {
    return n1 + n2;
}

var validar = 0;

function validarIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    returns validar;
}

var idade = prompt("Qual sua idade? Digite aqui: ");
validarIdade(idade)
console.log(validar);
*/
//alert(soma(5, 10));



/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count = 0; count <= 5; count ++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
};
*/
/*
var idade = prompt("Digite sua idade: ");
if (idade >= 18) {
    alert('maior de idade')
} else {
    alert("menor de idade")
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[0].name);
*/
/*
var fruta = {nome:"banana", cor:"amarela"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//console.log(lista);
//lista.push("uva");
//lista.pop();

//console.log(lista.toString());
//console.log(lista.join("-"));



/*
var name = "Ahlex Paes";
var age = 26;
var age2 = 10;
var phrase = "Vasco is better than menguinho.";
var n1 = 5;
var n2 = 3;

alert(name + " is" + " " + age + " years old.");
alert(age + age2);

console.log(name);
console.log(age + age2);
console.log(phrase.replace("menguinho", "nensinho"));
console.log(phrase.toUpperCase());
console.log(n1 * (n2 + 7));

alert(phrase.replace("menguinho", "nensinho"));
*/