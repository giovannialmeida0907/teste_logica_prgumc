function calcularPagamento(){

let valorGasto = parseFloat(document.getElementById("valorCompra").value)
let formaPagamento = document.getElementById("formaPagamento").value
let resultado = document.querySelector("#resultado")


if(isNaN(valorGasto) || valorGasto<0){
     resultado.innerHTML = "Valor gasto invalido"
}


switch (formaPagamento){
    case "pix":
        let valorfinal = valorGasto * 0.9
        resultado.innerHTML = "O valor a ser pago é de R$ "+ valorfinal.toFixed(2)
        break

    case "debito":
        valorfinal = valorGasto * 0.95
        resultado.innerHTML = "O valor a ser pago é de R$ "+ valorfinal.toFixed(2)
        break

    case "credito":
        resultado.innerHTML = "O valor a ser pago é de R$ "+ valorfinal.toFixed(2)
        break

    default:
        resultado.innerHTML = "Opção de pagamento invalido"
        break



 }


}