var botao = document.getElementById("enviar");
botao.onclick = function(event){
    event.preventDefault();
    var form = document.forms["login"];
    var campos = form.elements;
    for(var i = 0; i < campos.length; i++){
        var valor = campos[i].value;
        var nome = campos[i].name;
        if(!valor){
            alert(nome+" não está preenchido");
            break;
        }
        if(nome == "senha" && valor.length < 5){
            alert("A senha deve ter pelo menos 5 letras");
            break;
        }
    }
};