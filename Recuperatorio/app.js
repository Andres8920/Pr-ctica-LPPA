window.onload = function() {}
  var form = document.getElementById("formulario")
  form.onsubmit = function(evt) {
    evt.preventDefault();
                                    let nombre = formulario.elements['nombre'].value
                                    let apellido = formulario.elements['apellido'].value
                                    let email = formulario.elements['email'].value
                                    let edad = formulario.elements['edad'].value
                                    let sexo = formulario.elements['sexo'].value
                                    let informatica = document.forms['formulario']["informatica"].checked
                                    let matematicas = document.forms['formulario']["matematicas"].checked
                                    let psicologia = document.forms['formulario']["psicologia"].checked
                                    let series = document.forms['formulario']["series"].checked
                                    let provincia = formulario.elements['provincia'].value 
                                    let localidad = formulario.elements['localidad'].value                                   
                                    /*Verifica la longitud de los campos Nombre y Apellidos*/
                                    if (nombre.length<3 || apellido.length<3) 
                                            {
                                               alert("La longitud minima de los campos Nombre y Apellido es de 3 caracteres")
                                               return false
                                               /*Verifica que no se ingresen numeros*/ 
                                            } else if(!isNaN(nombre) || !isNaN(apellido))
                                                    {
                                                        alert("Los campos Nombre y Apellido solo admiten letras")
                                                        return false
                                                        /*Verifica que el numero ingresa este dentro del rango 5 - 100*/ 
                                                    }else if (edad>100 || edad<5)
                                                            {
                                                                alert("La edad permitida es de 5 a 100 años")
                                                                return false
                                                                /*Valida que al menos una de las opciones sea seleccionada*/
                                                            } else if (informatica == false && matematicas == false && psicologia == false && series == false)
                                                                   {  
                                                                    alert("Seleccionar al menos una de las opciones")
                                                                    return false
                                                                   } else 
                                                                   console.log(nombre,apellido,email,edad,sexo,provincia,informatica,matematicas,psicologia,series)
                                                                }   
