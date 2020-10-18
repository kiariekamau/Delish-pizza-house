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
    var toppings =$("#toppings").val();
    var pizzaToppingPrice=  100;
    return pizzaToppingPrice
}
function numberOfPizzaPrice () {
    var numberOfPizza = $("#numberOfPizza").val();
    return parseInt(numberOfPizza);
}
function pizzaPrice () {
    var totalPrice = parseInt(sizePrice()+ crustPrice()+ toppingsPrice()) + numberOfPizzaPrice();
    console.log(totalPrice);

    $("#price").text(+ totalPrice)
}

function Pizza( type,size,crust,topping,numberOfPizzas) {
    this.type = type
    this.size = size
    this.crust = crust
    this.topping = topping
    this.numberOfPizzas = numberOfPizzas
}

Pizza.prototype.addEverything = function () {
    return this.type + "," + this.size + "," + this.crust + "," + this.topping + "," + this.numberOfPizzas 
}

function checkout () {
    alert("Your order has been received!");
}

$(document).ready(function(){
    $("#pickUp").click(function(event){
        event.preventDefault();

        $("#pickUp").show();
        $("#delivery").hide();

     var type = $("#pizzaType").val();
     var size = $("#pizzaSize").val();
     var crust = $("#pizzaCrust").val();
     var topping = $("#toppings").val();
     var numberOfPizzas =$("#numberOfPizzas").val();

     var pizzaOrder = new Pizza(type, size, crust, topping, numberOfPizzas)

     $("#pizzaForPickUp").show();
     $("#pizzaForDelivery").hide();
     $("ul#pizzaForPickUp").append("<li>" + pizzaOrder.addEverything() + "<li>");
    })
    

})
