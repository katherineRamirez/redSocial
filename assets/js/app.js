/* Esta variable contiene los criterios que debe seguir para poder 
   validar el Email */
	var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function(){
/* Función con evento click para el botón ingresar */
  $('#btnLogin').click(function(){ 
/* Variables que contienen los valores de email y password en la
	sección de ingreso */
	var email = $('#txtEmail').val();
    var password =  $('#txtPassword').val();

/* Condicional para comparar el email ingresado con los criterios 
	válidos designados en la variable expr */
	if(email == "" || !expr.test(email)){
	   $('#message1').fadeIn();
	   return false;
	}else{
	   $('#message1').fadeOut();
/* Condicional para hacer aparecer el mensaje en el caso que no
	se ingrese nada en el input del password */
	if(password == ""){
	   $('#message2').fadeIn();
	   return false;
	}else{
	   $('#message2').fadeOut();
	}
	}
  })

});
