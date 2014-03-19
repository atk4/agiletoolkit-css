$(function(){

  // Theme Switch
  $('.do-theme-switch').children().click(function(){
      $('link').attr('href','css/'+$(this).data('file')+'?'+(Math.random()*10000));
  });

  // Icons
  $('#icons-library').hide();
  $('#example-icons').click(
    function(){
      $('#icons-library').fadeIn();
      $('#toggler').fadeOut();
      $(this).removeClass('atk-inline');
      $(this).parent().removeClass('atk-inline');
    }
  );

  // Select
  $('select').selectmenu();

  // Datepicker
	$("#datepicker").datepicker();

  // Tabs
	$("#tabs").tabs();
  $("#tabs2").tabs();
  $("#tabs3").tabs();
  $("#tabs4").tabs();

  // Accordion
	$("#accordion").accordion({
		heightStyle: "content"
	});

  // Dialog
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

    $( "#opener" ).click(function() {
    	$('#dialog').dialog("open");
    });
    $( "#opener2" ).click(function() {
    	$('#dialog-buttonpane').dialog("open");
    });
    $( "#opener3" ).click(function() {
      $('#dialog-menu').dialog("open");
    });

    // Tooltips
    $('#example-jqueryui-tooltips').tooltip();

    // Expander
    var x;
    $('#table-expander .atk-table tbody tr:not(".atk-table-expander")').click(function(){
      if ( x != "open" ) {
        $(this).next('.atk-table-expander').show();
        $(this).find('.icon-right-dir').removeClass('icon-right-dir').addClass('icon-down-dir');
        x = "open";
      } else {
        $(this).next('.atk-table-expander').hide();
        $(this).find('.icon-down-dir').removeClass('icon-down-dir').addClass('icon-right-dir');
        x = "close";
      }

    });

});
