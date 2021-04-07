$(document).on("ready", function(){
	$("mostrar-modal").on("clik", function(){
		$("#modal").addClass("mostrar-modal");
	});

	$("cerrar-modal").on("clik", function(){
		$("#modal").removeClass("mostrar-modal");
	});
})

