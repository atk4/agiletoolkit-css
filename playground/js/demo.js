$.widget( "ui.dialog", $.ui.dialog, {
    _createButtons: function() {
            var that = this,
                    buttons = this.options.buttons;

            // if we already have a button pane, remove it
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();

            if ( $.isEmptyObject( buttons ) || ($.isArray( buttons ) && !buttons.length) ) {
                    this.uiDialog.removeClass( "ui-dialog-buttons" );
                    return;
            }

            $.each( buttons, function( name, props ) {
                    var click, buttonOptions;
                    props = $.isFunction( props ) ?
                            { click: props, text: name } :
                            props;
                    // Default to a non-submitting button
                    props = $.extend( { type: "button" }, props );
                    // Change the context for the click callback to be the main element
                    click = props.click;
                    props.click = function() {
                            click.apply( that.element[ 0 ], arguments );
                    };
                    buttonOptions = {
                            icons: props.icons,
                            text: props.showText
                    };
                    delete props.icons;
                    delete props.showText;
                    $( "<a></a>", props )
                            .button( buttonOptions )
                            .appendTo( that.uiButtonSet );
            });
            this.uiDialog.addClass( "ui-dialog-buttons" );
            this.uiDialogButtonPane.appendTo( this.uiDialog );
    }
});
 
$( "<div>" ).dialog();



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
      buttons: {
        "Delete all items": function() {
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        },
        "Testing": function() {
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
    $('#example-icons').click(
      function(){
        $('#icons-library').fadeIn();
        $('#toggler').fadeOut();
        $(this).removeClass('atk-inline');
        $(this).parent().removeClass('atk-inline');
      }
    );
});
