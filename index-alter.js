var display = document.getElementById("item1");

function calc(num){

    var input = document.getElementById("item1");   
    input.value += num;

}

function limpar(){

    display.innerHTML = "";
    
}

function backspace() {

    var valor = document.getElementById("item1").innerHTML;
    document.getElementById("item1").innerHTML = valor.substring(0, valor.length -1);

}

function result() {

    var op = document.getElementById("result").value;
    console.log("chamou")

    /* var result = eval(op); */

    //-------------------------------SEM UTILIZAR FUNÇÃO EVAL()----------------------------------
    var expression = new String(op);
    console.log(op);
    for(var i= 0; i <  expression.length; i++){        
         console.log("entrou no for")         
         if(expression.charAt(i) == "+"){
            console.log("entrou no if")           
            var numbers = new String(expression.split('+'))
            console.log(numbers)
        }
    }
}