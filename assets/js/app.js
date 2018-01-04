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

    if(email == ""){
	   $('#message1').fadeIn();
	   return false;
	}else{
	   $('#message1').fadeOut();
	}
/* Condicional para comparar el email ingresado con los criterios 
	válidos designados en la variable expr */
	if(email == "" || !expr.test(email)){
	   $('#message1-5').fadeIn();
	   return false;
	}else{
	   $('#message1-5').fadeOut();
	  }
/* Condicional para hacer aparecer el mensaje en el caso que no
	se ingrese nada en el input del password */
	if(password == ""){
	   $('#message2').fadeIn();
	 
	}else{
	   $('#message2').fadeOut();

	}else{
		$('#enter').attr('href','assets/html/perfil.html');
	}

  });

  $('#btnSignUp').click(function(){ 
/* Variables que contienen los valores de los inputs en la
	sección de REGISTRATE */
	var name = $('#inputName').val();
	var lastName = $('#inputLastName').val();
	var age = $('#inputAge').val();
	var inputEmail = $('#inputEmail').val();
    var inputPassword =  $('#inputPassword').val();
    var inputRepassword = $('#inputRepassword').val();

    if(name == ""){
    	$('#message3').fadeIn();
    	return false;
    }else{
    	$('#message3').fadeOut();
    if(lastName == ""){
    	$('#message4').fadeIn();
    	return false;
    }else{
    	$('#message4').fadeOut();
    }
    if(age == ""){
    	$('#message5').fadeIn();
    	return false;
    }else{
    	$('#message5').fadeOut();
    }
    if(inputEmail == ""){
	   $('#message6').fadeIn();
	   return false;
	}else{
	   $('#message6').fadeOut();
	}
/* Condicional para comparar el email ingresado con los criterios 
	válidos designados en la variable expr */
	if(inputEmail == "" || !expr.test(inputEmail)){
	   $('#message6-5').fadeIn();
	   return false;
	}else{
	   $('#message6-5').fadeOut();
	}
/* Condicional para hacer aparecer el mensaje en el caso que no
	se ingrese nada en el input del password */
	if(inputPassword == ""){
	   $('#message7').fadeIn();
	   return false;
	}else{
	   $('#message7').fadeOut();
	}
	if(inputRepassword == ""){
	   $('#message8').fadeIn();
	   return false;
	}else{
	   $('#message8').fadeOut();
	}
	if(inputRepassword !== inputPassword){
		$('#message9').fadeIn();
	}else{
	   $('#message9').fadeOut();
	}
	}
  })

  
  
});

