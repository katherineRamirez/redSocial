$(document).ready(function(){
	var clickContactCont = 0
 	$('#btnFollow').click(function(){
 		clickContactCont++;
		$('#contact').html(clickContactCont);
	})//cierre función contador contactos...no tocar

 	$('.btn-categories').click(function(){
    var comment = $('#myComment').val();
    $('#myComment').val("");
    var container = $('.row-stair');
    container.append('<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 div-stair-news"><div>' +
		'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 div-stair-profile"><a href="#"><i class="fa fa-user-circle fa-3x" id="user-perfil" aria-hidden="true"></i></a>' +
		'<h3><a href="#"><span class="label label-warning">Categoría</span></a></h3><span>Lugar, hora</span></div>' +
		'<div class="div-stair-area"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' + 
		'<p>' + comment + '</p></div></div></div>' + '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 div-stair-categories">' +
		'<div class="btn-group"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Te leo</button>' +	
		'<ul class="dropdown-menu list-unstyled list-inline"><li><a href="#">Todo o nada</a></li>' +'<li><a href="#">Adivinando</a></li>' +
		'<li><a href="#">Generalizando</a></li><li><a href="#">Suponiendo</a></li><li><a href="#">Catastrofizando</a></li></ul>' +
		'<button type="button" class="btn btn-default" >Te ayudo</button></div></div>' +
		'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 div-stair-help"><div><div>' +
		'<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"><a href="#"><i class="fa fa-user-circle fa-2x" aria-hidden="true"></i></a>' +
		'</div><div class="col-xs-8 col-sm-10 col-md-10 col-lg-10"><input placeholder="Tus palabras de ánimo"></input></div>' +
		'<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"><a href="#"><i class="fa fa-smile-o" aria-hidden="true"></i></a>' +
		'<a href="#"><i class="fa fa-picture-o" aria-hidden="true"></i></a></div></div></div></div></div>');
  })//cierre función escribir posteo...no tocar

})//cierre llave documento.ready...no tocar

