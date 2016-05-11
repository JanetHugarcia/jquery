$(document).ready(function(){
	$('#nexted').click(function(){
		var string=$('#principal').val();
		$(string).addClass('highlight').animate({ marginLeft: 10}, 'slow');
	});
});