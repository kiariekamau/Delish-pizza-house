function sizePrice () {
    var size = $("#pizzaSize").val();
    if(size==="Small @Ksh.400") {
        var pizzaSizePrice = 400 ;
    }
    else if(size==="Medium @Ksh.700") {
        var pizzaSizePrice = 700 ;
    }
    else  {
        var pizzaSizePrice = 900 ;
    }
    return pizzaSizePrice
}
function crustPrice () {
    var crust= $("#pizzaCrust").val();
    if(crust==="Crispy @ksh.100") {
        var pizzaCrustPrice = 100;
    }
    else if(crust==="Stuffed @ksh.150") {
        var pizzaCrustPrice = 150;
    }
    else {
        var pizzaCrustPrice = 200;
    }
    return pizzaCrustPrice
}
function toppingsPrice () {
    var toppings =$("toppings").val();
    var pizzaToppingPrice=  100;
    return pizzaToppingPrice
}
