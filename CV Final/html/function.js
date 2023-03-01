
   
function valida_envia(){
	if (document.contacto.nombre_y_apellido.value.length==0){
		   alert("Tiene que escribir su nombre y apellido")
		   document.contacto.nombre_y_apellido.focus()
		   return 0;
	}
 	
	if (document.contacto.email.value.length==0){
		   alert("Debe colocar su email de contacto")
		   document.contacto.email.focus()
		   return 0;
	}

	if (document.contacto.mensaje.value.length==0){
		alert("Debe escribir el motivo de su mensaje")
		document.contacto.mensaje.focus()
		return 0;
 	}
 
	alert("Muchas gracias por enviar el formulario");
	document.contacto.submit();
}
