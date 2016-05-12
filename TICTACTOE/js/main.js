$(document).ready(function(){

	for(var i=1;i<=3;i++){
		var claseFila =  i;
		$('#padre').append("<div class='" + claseFila + "'></div>");
		 for(var j=1;j<=3;j++){
				$("." + claseFila).append("<button class='btn' id='" + claseFila+j + "'>"+"</button>");		 
		};	
	}
	var c = 0;
	
	$('.btn').click(function(){
		c++;
		if(c % 2){
			$(this).each(function(){
				$(this).text("x");
				$(this).attr("disabled",true);
			})
		}else{
			$(this).each(function(){
				$(this).text("o");
				$(this).attr("disabled",true);
				
			})
		}

		if( $('#11').text()!="" && $('#11').text()==$('#22').text()  && $('#11').text()==$('#33').text()){
				alert($('#11').text() +" Ganaste");
		}
		if( $('#13').text()!="" && $('#13').text()==$('#22').text()  && $('#13').text()==$('#31').text()){
				alert($('#13').text() +" Ganaste");
		}
		if( $('#11').text()!="" && $('#11').text()==$('#12').text()  && $('#11').text()==$('#13').text()){
				alert($('#11').text() +" Ganaste");
		}
		if( $('#11').text()!="" && $('#11').text()==$('#21').text()  && $('#11').text()==$('#31').text()){
				alert($('#11').text() +" Ganaste");
		}
		if( $('#12').text()!="" && $('#12').text()==$('#22').text()  && $('#12').text()==$('#32').text()){
				alert($('#12').text() +" Ganaste");
		}
		if( $('#13').text()!="" && $('#13').text()==$('#23').text()  && $('#13').text()==$('#33').text()){
				alert($('#13').text() +" Ganaste");
		}
		if( $('#21').text()!="" && $('#21').text()==$('#22').text()  && $('#21').text()==$('#23').text()){
				alert($('#21').text() +" Ganaste");
		}
		if( $('#31').text()!="" && $('#31').text()==$('#32').text()  && $('#31').text()==$('#33').text()){
				alert($('#31').text() +" Ganaste");
		}
		// var temp = $('#11').text();
		// var esigual=true;

		// for (var n=1;n<=3;n++){
		// 	if(temp == $('#1'+n).text()){
		// 		esigual=false;
		// 	}
		// }

		// 	if(esigual==false){
		// 		alert($('#11').text() + "Ganaste");
		// 	}
		

	});

	
	


});