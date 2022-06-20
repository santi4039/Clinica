
//var pacientes = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick",function(event){    //Event Bubbling
    event.target.parentNode.classList.add("fadeOut"); 
    setTimeout(function(){                                //setTimeout borra al paciente en 0,5 segundos, le paso la funcion como parametro y el tiempo
        event.target.parentNode.remove();   //le dice que borre el padre nodo
    },500);
});


//Eliminar Paciente
/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        this.remove();
    });
});*/