/* criando os events onchange e onkeyup */

function nome(){
    var nome = document.getElementById("nome");
   
}

function sobrenome(){
    var sobrenome = document.getElementById("sobrenome");
}
function Idade(){
    var Idade = document.getElementById("Idade");

}

function Senha(){
    var senha = document.getElementById("senha").value;

    if(senha == "" || senha.length <= 4 && 9){
        document.getElementById("Senha").innerHTML = "<span style='color: #ff0000'>Digite uma senha que possua entre 5 e 10 caracteres </span>";
    }else{
        document.getElementById("Senha").innerHTML = "<span style='color: #00ff00'>Senha válida</span>";
   }
}



 // CRIANDO O ARRAY PUSH COM AS PRICIPAIS PERGUNTAS
const form1 = ["nome"];
console.log(form1);

const form2 = ["sobrenome"];
console.log(form2);

const form3 = ["Idade"];
console.log(form3);

form1.push("Senha");
console.log(form1);

//Concatenação entre duas listas
const var1 = form1.concat(form2);
console.log(var1);

//Concatenação entre três ou mais listas
const var2 = form1.concat(form2, form3);
console.log(var2);



