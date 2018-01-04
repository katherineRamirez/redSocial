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

// This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '{your-app-id}',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

