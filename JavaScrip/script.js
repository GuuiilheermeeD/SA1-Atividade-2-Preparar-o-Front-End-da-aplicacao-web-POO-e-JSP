
function validarTudo() {
    let conform = true

    if (caixasVazias()) {
        conform = false;
    }

    return conform;
}

function caixasVazias() {
    let conform = false

    let Descriçao = document.getElementById("Descriçao");
    let reqObri = document.getElementById("reqObri");
    let reqDese = document.getElementById("reqDese");
    let remuneracao = document.getElementById("remuneracao");
    let beneficios = document.getElementById("beneficios");
    let locTrab = document.getElementById("locTrab");
   

    Descriçao.style.backgroundColor = '#ffffff';
    reqObri.style.backgroundColor = '#ffffff';
    reqDese.style.backgroundColor = '#ffffff';
    remuneracao.style.backgroundColor = '#ffffff';
    beneficios.style.backgroundColor = '#ffffff';
    locTrab.style.backgroundColor = '#ffffff';
    
    //O check de cada input vazio.
    if (Descriçao.value == '') {
        Descriçao.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (reqObri.value == '') {
        reqObri.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (reqDese.value == '') {
        reqDese.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (remuneracao.value == '') {
        remuneracao.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (beneficios.value == '') {
        beneficios.style.backgroundColor = '#ffebeb';
        conform = true;
    }
    if (locTrab.value == '') {
        locTrab.style.backgroundColor = '#ffebeb';
        conform = true;
    }

    return conform
}

function maskSalario(grana, dindin) {
    varDinheiro = grana
    varDindin = dindin
    setTimeout("mascaraSalario()", 1)
}

function mascaraSalario() {
    varDinheiro.value = varDindin(varDinheiro.value)
}

function maskSall(remuneracao) {
    remuneracao = remuneracao.replace(/\D/g, ""); //Remove tudo o que não é dígito
    remuneracao = remuneracao.replace(/(\d)(\d{3})(\d{3})(\d{5}$)/, "$1.$2.$3.$4");
    remuneracao = remuneracao.replace(/(\d)(\d{3})(\d{5}$)/, "$1.$2.$3"); //Casa Milhão//
    remuneracao = remuneracao.replace(/(\d)(\d{5}$)/, "$1.$2"); //
    remuneracao = remuneracao.replace(/(\d{2}$)/, ",$1"); //dois numeros apos a virgula ",00"//
    return remuneracao;
}

function id(cp) {
    return document.getElementById(cp);
}
window.onload = function () {
    id('remuneracao').onkeyup = function () {
        maskSalario(this, maskSall);
    }
}