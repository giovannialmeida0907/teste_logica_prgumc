function calcular(){
let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
let resultado = document.querySelector("#resultado")
let operacao = document.querySelector("#operacao").value


if (isNaN(num1) || isNaN(num2)){
    resultado.innerHTML = "Preencha todos os campos"
    resultado.style.color = "red"
}

else if (operacao == "+"){
    resultado.innerHTML = num1 + num2
    resultado.style.color = "red"
}

else if (operacao == "-"){
    resultado.innerHTML = num1 - num2
    resultado.style.color = "red"
}

else if (operacao == "*"){
    resultado.innerHTML = num1 * num2
    resultado.style.color = "red"
}

else if (operacao == "/"){
    resultado.innerHTML = num1 / num2
    resultado.style.color = "red"
}

}