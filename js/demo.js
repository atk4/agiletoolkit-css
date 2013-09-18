$(function(){
	$( "#datepicker" ).datepicker();
	$( "#tabs" ).tabs();
	$( "#accordion" ).accordion({
		heightStyle: "content"
	});
  $( "#dialog" ).dialog({
  	autoOpen: false,
  	modal: true
  });
  $( "#dialog-minimal" ).dialog({
  	autoOpen: false,
  	modal: true,
  	dialogClass: "atk-dialog-minimal"
  });
    $( "#opener" ).click(function() {
    	$('#dialog').dialog("open");
    });
    $( "#opener2" ).click(function() {
    	$('#dialog-minimal').dialog("open");
    });
});