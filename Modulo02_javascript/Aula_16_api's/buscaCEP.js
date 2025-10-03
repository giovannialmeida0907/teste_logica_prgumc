//https://viacep.com.br/ws/(cep)/json

const cep = document.getElementById("cep")

cep.addEventListener("change", (evento) => {
    let cep_usuario = evento.target
    busca_cep(cep_usuario.value)
    
})

async function busca_cep (cep_usuario){
   
    try{
    
        let consulta_cep = await fetch(`https://viacep.com.br/ws/${cep_usuario}/json`)
        let consulta_cep_json = await consulta_cep.json()
        
        
    }

    catch {

    }
    
}

function preenche_campo(cep_json){
    
    console.log(cep_json);
    
    console.log(cep_json.logradouro);

    let rua = document.getElementById("rua")
    let bairro = document.getElementById("bairro")
    let cidade = document.getElementById("cidade")
    let estado = document.getElementById("estado")

    rua.value = cep_json.logradouro
    bairro.value = cep_json.bairro
    cidade.value = cep_json.localidade
    estado.value = cep_json.uf
   
}
