$(document).ready(function(){

	var list=["","code","#myid",".myclass","code,#myid,.myclass","#myid code","li > ul","strong + em","strong ~ em","li:first","li:last","li:not(li:first)","li:even","li:odd","li:eq(1)","li:gt(2)","li:lt(2)",":header",":animated","li:contains(second-level)",":empty","li:has(a)","p:parent",":hidden",":visible","li[class]","a[rel=\"self\"]","a[rel!=\"nofollow\"]","[class^=\"my\"","a[title\$=\"blog\"]","a[href*=\"zip\"]","a[rel][href][title\$=\"blog\"]","li:nth-child(even)","li:nth-child(odd)","li:nth-child(2)","li:nth-child(2n)","li:first-child","li:last-child","code:only-child",":input",":text",":password",":radio",":checkbox",":submit",":image",":reset",":button",":file",":hidden","input:enabled",":disabled",":checked",":selected"];
	var j=0;

	$('#principal').val(list[j+1]);
	$(list[j]).addClass('highlight').animate({ marginLeft: 10}, 'fast');


	$('#nexted').click(function(){

		$(list[j]).removeClass('highlight').animate({ marginLeft: 0}, 'fast');
		// $('#principal').val(list[j]);
		j+=1;
		$('#principal').val(list[j]);
		$(list[j]).addClass('highlight').animate({ marginLeft: 10}, 'fast');
		// alert(list[j]);

		
	});
	$('#befored').click(function(){

		$(list[j]).removeClass('highlight').animate({ marginLeft: 0}, 'fast');
		j-=1;
		$('#principal').val(list[j]);
		$(list[j]).addClass('highlight').animate({ marginLeft: 10}, 'fast');	
	});
	// $('#principal').change(function(){
	// 	$(list[j]).removeClass('highlight').animate({ marginLeft: -10}, 'fast');
	// });
	
});