var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPaciente(form);
    

    var errores = validarPaciente(paciente);
    if(errores.length > 0){
        mostrarMensajesErrores(errores);
        return; //Cortando la funcion anonima si los datos son incorrectos
    }

    adicionarPacienteEnLaTabla(paciente);
    form.reset();

    var mensajesErrores = document.querySelector("#mensaje-error");
    mensajesErrores.innerHTML = "";

});


function capturarDatosPaciente(form){

//capturando los datos del formulario

    var paciente = {
        nombre:form.nombre.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
    }

    return paciente;
}

//----------------------------------------------------------------------

function construirTr(paciente){

   
    //Crear los tds y un tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    var nombreTd = construirTd(paciente.nombre,"info-nombre");
    var alturaTd = construirTd(paciente.peso,"info-peso");
    var pesoTd = construirTd(paciente.altura,"info-altura");
    var gorduraTd = construirTd(paciente.gordura,"info-gordura");
    var imcTd = construirTd(paciente.imc,"info-imc");


    //Asignacion al tr de los td y la tabla el tr
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);


    return pacienteTr;
}


function construirTd(dato,clase){

    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;

}

function validarPaciente(paciente){

    var errores = [];

    if(paciente.nombre.length == 0){
        errores.push("El nombre no puede estar vacio");
    }
    if(paciente.peso.length == 0){
        errores.push("El peso no puede estar vacio");
    } 
    if(paciente.altura.length == 0){
        errores.push("La altura no puede estar vacia");
    }
    if(paciente.gordura.length == 0){
        errores.push("La gordura no puede estar vacia");
    } 

    if(!validarPeso(paciente.peso)){
        errores.push("El peso es incorrecto");
    } 

    if(!validarAltura(paciente.altura)){
        errores.push("La altura es incorrecta");
    } 

   
    return errores;
}

function mostrarMensajesErrores(errores){

    var ul = document.querySelector("#mensaje-error");
    ul.innerHTML = "";
    errores.forEach(function(error){

        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });

}

function adicionarPacienteEnLaTabla(paciente){
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}