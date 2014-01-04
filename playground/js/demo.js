$(function(){

    $('.do-theme-switch').children().click(function(){
        $('link').attr('href','css/'+$(this).data('file'));
    });

  $('select').selectmenu();
	$("#datepicker").datepicker();
	$("#tabs" ).tabs();
  $('#icons-library').hide();
	$("#accordion").accordion({
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
    $('#example-icons').click(
      function(){
        $('#icons-library').fadeIn();
        // $(this).html("Hide Icons").addClass("atk-push");
        $('#toggler').fadeOut();
        $(this).removeClass('atk-inline');
        $(this).parent().removeClass('atk-inline');
      }
      // ,
      // function() {
      //   $('#icons-library').slideUp();
      //   $(this).html("Show");
      // }
    );
});
