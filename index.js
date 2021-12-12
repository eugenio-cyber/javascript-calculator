var display = document.getElementById("item1");

function calc(num){

    var a = display.innerHTML;
    display.innerHTML = num;
    display.innerHTML = a + num;

}

function limpar(){

    display.innerHTML = "";
    
}

function backspace() {
    var valor = document.getElementById("item1").innerHTML;
    document.getElementById("item1").innerHTML = valor.substring(0, valor.length -1);
}

function result() {
    var valor = document.getElementById("item1").innerHTML;
    if(valor){
        document.getElementById("item1").innerHTML = eval(valor);
    }
}

// OBS 01:
// O método substring(n, n) retorna o trecho 
// de uma string de acordo com os números
// informados por parâmetro.

// OBS 02:
// O argumento da função eval() é uma string. 
// Se a string representa uma expressão, eval()
// avalia a expressão. Se o argumento representa
// uma ou mais declarações em JavaScript, eval()
// avalia as declarações.