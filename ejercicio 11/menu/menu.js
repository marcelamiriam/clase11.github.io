var pedido = prompt("Ingrese su pedido ");

switch(pedido.toLowerCase()) {
    case"carne":
       console.log ("le ofrecemos vino tinto");
       break;
    case "pescado":
      console.log ("le ofrecemos vino blanco");
          break;
    case "verdura":
       console.log ("le ofrecemos agua");
       break;
default:
console.log("elija carne, pescado o verdura");
}
console.log("Fin switch case");