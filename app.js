
function comprar() {
    let tipo = document.getElementById ('tipo-ingresso');
    let qtd = parseInt(document.getElementById ('qtd').value);
    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } 
    if(tipo.value =='superior'){
        comprarSuperior(qtd);
    }
    if (tipo.value =='inferior'){
        comprarInferior(qtd);
    }
}



function comprarPista(){
    let qtdPista = parseInt(document.getElementById ('qtd-pista').textContent);
    let qtd = parseInt(document.getElementById ('qtd').value);
    if (qtd > qtdPista){
        alert('Quantidade insuficiente para Compra')
        } else {
                qtdPista = qtdPista - qtd;
                document.getElementById ('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada com sucesso')
        
            }
}


function comprarSuperior (){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtd = parseInt(document.getElementById ('qtd').value);

    if (qtd > qtdSuperior ){
        alert('Quantidade insuficiente para Compra')
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra realizada com Sucesso');
    }
}

function comprarInferior(){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    let qtd = parseInt(document.getElementById ('qtd').value);

    if(qtd < qtdInferior){
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert ('Compra Realizada com Sucesso')
    } else {
        alert ('Quantidade indisponível para Compra')
    }
}