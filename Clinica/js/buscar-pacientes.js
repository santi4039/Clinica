var botonBuscar = document.querySelector("#buscar-paciente");



botonBuscar.addEventListener("click",function(){
    console.log("Buscando Pacientes.............");
    var xhr = new XMLHttpRequest;
    
   
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    xhr.addEventListener("load",function(){
       
        var errorAjax = document.querySelector("#error-ajax");
       
    
        if(xhr.status == 200){
            errorAjax.classList.add("invisible");
            var respuesta = xhr.responseText;
            var pacientes = JSON.parse(respuesta);
            pacientes.forEach(function(paciente){
            adicionarPacienteEnLaTabla(paciente);
            botonBuscar.disabled = true;  //hace que el boton se pueda usar una unica vez
            });
        }else{
            errorAjax.classList.remove("invisible");
            console.log(xhr.status);
            console.log(this.responseText);
        }
        
    });
    
    /*var disableButton = function() { this.disabled = true; };
    botonBuscar.addEventListener('click', disableButton , false);*/
    
    xhr.send();
    
    document.getElementById("#buscar-paciente").disabled = true;
});




