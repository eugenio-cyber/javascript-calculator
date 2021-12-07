var display = document.getElementById("item1");

function calc(num){
    var a = display.innerHTML;
    display.innerHTML = num;
    display.innerHTML = a + num;
}

function limpar(){
    display.innerHTML = "";
}