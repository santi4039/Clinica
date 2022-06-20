var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;  // accediendo al contenido de ese td
            var expresion = new RegExp(this.value,"i");

           // a Pedro, a no esta en pedro, por lo que oculta a pedro
            if(!expresion.test(nombre)){
                paciente.classList.add("invisible");
            } else {
                paciente.classList.remove("invisible");
            }
    
        }
    } else {
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }

    }
  
});

