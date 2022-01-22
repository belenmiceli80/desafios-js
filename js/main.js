let nombre = prompt("Bienvenido. Ingrese su nombre").toUpperCase();
let howgarts = prompt("Hola " + nombre + " ¿Te gusta Harry Potter?").toUpperCase();

if (howgarts == "SI") {
    let casa = prompt("¿Cual es tu casa?").toUpperCase();

        while(casa != " ") {
        
            switch (casa) {
                case "GRYFFINDOR":
                    alert("Entra en la Sala Común de los leones");
                    break;
                case "RAVENCLAW":
                    alert("Entra a la Sala Común de las águilas");
                    break;
                case "HUFFLEPUFF":
                    alert("Entra a la Sala Común de los tejones");
                    break;
                case "SLYTHERIN":
                    alert("Entra a la Sala Común de las serpientes");
                    break;
                default:
                    alert("Mortífago");
                    break;
            }
            break;
        }
} else {
    alert("Te recomiendo la saga");
}
