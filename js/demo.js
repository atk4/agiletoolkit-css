$(function(){
  $('select').selectmenu();
	$( "#datepicker" ).datepicker();
	$( "#tabs" ).tabs();
  $('#icons-library').hide();
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
    $('#icons-toggle').click(
      function(){
        $('#icons-library').fadeIn();
        // $(this).html("Hide Icons").addClass("atk-push");
        $(this).fadeOut();
      }
      // ,
      // function() {
      //   $('#icons-library').slideUp();
      //   $(this).html("Show");
      // }
    );
});