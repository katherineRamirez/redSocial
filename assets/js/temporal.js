$(document).ready(function(){
	var clickContactCont = 0
 	$('#btnFollow').click(function(){
 		clickContactCont++;
		$('#contact').html(clickContactCont);
	})//cierre función contador contactos
})//cierre llave documento.ready...no tocar