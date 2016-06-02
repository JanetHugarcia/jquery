$(document).ready(function() {
	// var gmt=null;
	// INTERVALO DE TIEMPO Q ACTUALIZARÁ EL TIEMPO
	setInterval(obtenerData, 1000);
	$('#openBtn').click(function(){
		$('#myModal').modal({show:true})
	});
	$(".janet").click(eventoClick)

});

var data, hora,gmt,horaInt,offset,pais;

function eventoClick() {
	var isChecked = $(this).prop("checked");
	 offset = $(this).attr("data-pais");
	var id = $(this).attr("data-id");
	 pais = $(this).parent().text();
	if (isChecked) {
		// agregar html
		gmt = hora + 5 + parseInt(offset);
		horaInt = gmt + ":" + data.getMinutes() + ":" + data.getSeconds(); 
		$("#huso").append('<div  id="'+id+'" data-nombre="'+pais+'" data-hora="'+offset+'">'+ pais+" : "+ horaInt + "</div>")
			setInterval("actualizarDiv("+id+")",1000)
	} else {
		// quitar el html
		$("#"+id).remove();
	}

}
function actualizarDiv(id){
		var pais=$('#'+id).attr("data-nombre");
		var offset=$('#'+id).attr("data-hora");
		gmt = hora + 5 + parseInt(offset);
		horaInt = gmt + ":" + data.getMinutes() + ":" + data.getSeconds(); 
		$('#'+id).text( pais +' : '+ horaInt );
		
}
function numeroCero(num){
		if (num<10) {
			return "0"+num;
		}
		else{
			return num;
		}
}
function obtenerData() {
	data = new Date();
	var ho = data.getHours();
	var min = data.getMinutes();
	var seg = data.getSeconds();

	hora = numeroCero(ho);
	segundos = numeroCero(seg);
	minutos = numeroCero(min);

	$("#hora").text(hora + ":" + minutos + ":" + segundos);
	var nombreDias = ["Domingo","Lunes", "Martes","Miércoles","Jueves","Viernes","Sábado"];
	var nombreMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];
	var diaFecha = data.getDate();
	var dia = data.getDay();
	var mes = data.getMonth();
	$("#fecha").text(nombreDias[dia] + ", "+ diaFecha + " de " + nombreMeses[mes]);
}
