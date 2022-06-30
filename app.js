let option = prompt (`Elija un estado:
1: Feliz
2: Triste
3: Agotado
4: No me quiero ir sr stark
5: Que la fuerza te acompañe
`)
while (option !="ESC" && option !="esc") {
    
    switch (option) {
        case "1":
            console.log("Feliz");
            break;
        case "2":
            console.log("Triste");
            break;
        case "3":
            console.log("Agotado");
            break;
        case "4":
            console.log("No me quiero ir sr stark");
            break;
        case "5":
            console.log("Que la fuerza te acompañe");
            break;
        default:
            console.log("no ingresaste opcion valida")
            break;

        }
    
    }