$(document).ready(function(){

	for(var i=1;i<=3;i++){
		var claseFila =  i;
		$('#padre').append("<div class='" + claseFila + "'></div>");
		 for(var j=1;j<=3;j++){
				$("." + claseFila).append("<button class='btn boton' id='" + claseFila+j + "'>"+"</button>");		 
		};	
			
	}
	var c = 0;
	$('.boton').text("+");
	$('.boton').click(function(){
		c++;
		if(c % 2){
			$(this).each(function(){
				$(this).text("x").css('color','blue');
				$(this).attr("disabled",true);
			})
		}else{
			$(this).each(function(){
				$(this).text("o").css('color','red');;
				$(this).attr("disabled",true);
				
			})
		}

		if( $('#11').text()!="+" && $('#11').text()==$('#22').text()  && $('#11').text()==$('#33').text()){
				alert(" Ganó: "+$('#11').text() );
				$('.boton').attr("disabled",true);
		}
		if( $('#13').text()!="+" && $('#13').text()==$('#22').text()  && $('#13').text()==$('#31').text()){
				alert(" Ganó: "+$('#13').text() );
				$('.boton').attr("disabled",true);
		}
		if( $('#11').text()!="+" && $('#11').text()==$('#12').text()  && $('#11').text()==$('#13').text()){
				alert(" Ganó: "+$('#11').text() );
				$('.boton').attr("disabled",true);
		}
		if( $('#11').text()!="+" && $('#11').text()==$('#21').text()  && $('#11').text()==$('#31').text()){
				alert(" Ganó: "+$('#11').text() );
				$('.boton').attr("disabled",true);
		}
		if( $('#12').text()!="+" && $('#12').text()==$('#22').text()  && $('#12').text()==$('#32').text()){
				alert(" Ganó: "+$('#12').text() );
				$('.boton').attr("disabled",true);

		}
		if( $('#13').text()!="+" && $('#13').text()==$('#23').text()  && $('#13').text()==$('#33').text()){
				alert(" Ganó: "+$('#13').text() );
				$('.boton').attr("disabled",true);
		}
		if( $('#21').text()!="+" && $('#21').text()==$('#22').text()  && $('#21').text()==$('#23').text()){
				alert(" Ganó: "+$('#21').text() );
				$('.boton').attr("disabled",true);
		}
		if( $('#31').text()!="+" && $('#31').text()==$('#32').text()  && $('#31').text()==$('#33').text()){
				alert(" Ganó: "+$('#31').text() );
				$('.boton').attr("disabled",true);
		}
		// var temp = $('#11').text();
		// var esigual=true;
		// for(var m =1;m<=3;m++){
		// 	for(var n=1;n<=3;n++){
		// 		 // $('#'+m.toString()+n.toString()).hide();
		// 		 if(m==n){
		// 		 	$('#'+m.toString()+n.toString()).text("u");
		// 		 	 // alert(m.toString()+n.toString()+"\n");
		// 		 }
				
		// 	}
		// }
		

	});

	$('.btnNew').click(function(){
		$('.boton').text("+").css('color','black');
		$('.boton').attr("disabled",false);
	});
	


});