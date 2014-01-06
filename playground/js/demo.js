$(function(){

    $('.do-theme-switch').children().click(function(){
        $('link').attr('href','css/'+$(this).data('file')+'?'+(Math.random()*10000));
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
  $( "#dialog-buttonpane" ).dialog({
      resizable: false,
      modal: true,
      autoOpen: false,
      width: 400,
      buttons: {
        "Okay": function() {
          $( this ).dialog( "close" );
        },
        "Cancel": function() {
          $( this ).dialog( "close" );
        }
      }
  });
  $( "#dialog-menu" ).dialog({
    autoOpen: false,
    modal: true,
    dialogClass: 'atk-dialog'
  });
    $( "#opener" ).click(function() {
    	$('#dialog').dialog("open");
    });
    $( "#opener2" ).click(function() {
    	$('#dialog-buttonpane').dialog("open");
    });
    $( "#opener3" ).click(function() {
      $('#dialog-menu').dialog("open");
    });
    $('#example-icons').click(
      function(){
        $('#icons-library').fadeIn();
        $('#toggler').fadeOut();
        $(this).removeClass('atk-inline');
        $(this).parent().removeClass('atk-inline');
      }
    );
});
