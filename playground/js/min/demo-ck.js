$(function(){$(".do-theme-switch").children().click(function(){$("link").attr("href","css/"+$(this).data("file")+"?"+1e4*Math.random())}),$("#icons-library").hide(),$("#example-icons").click(function(){$("#icons-library").fadeIn(),$("#toggler").fadeOut(),$(this).removeClass("atk-inline"),$(this).parent().removeClass("atk-inline")}),$("select").selectmenu(),$("#datepicker").datepicker(),$("#datepicker2").datepicker({changeMonth:!0,changeYear:!0}),$("#tabs").tabs(),$("#tabs2").tabs(),$("#tabs3").tabs(),$("#tabs4").tabs(),$("#accordion").accordion({heightStyle:"content"}),$("#dialog").dialog({autoOpen:!1,modal:!0}),$("#dialog-buttonpane").dialog({resizable:!1,modal:!0,autoOpen:!1,width:400,buttons:{Okay:function(){$(this).dialog("close")},Cancel:function(){$(this).dialog("close")}}}),$("#opener").click(function(){$("#dialog").dialog("open")}),$("#opener2").click(function(){$("#dialog-buttonpane").dialog("open")}),$("#opener3").click(function(){$("#dialog-menu").dialog("open")}),$("#example-jqueryui-tooltips").tooltip();var e;$('#table-expander .atk-table tbody tr:not(".atk-table-expander")').click(function(){"open"!=e?($(this).next(".atk-table-expander").show(),$(this).find(".icon-right-dir").removeClass("icon-right-dir").addClass("icon-down-dir"),e="open"):($(this).next(".atk-table-expander").hide(),$(this).find(".icon-down-dir").removeClass("icon-down-dir").addClass("icon-right-dir"),e="close")});var n;$("#banner-loader-start").click(function(){"open"!=n&&($("#banner-loader").addClass("atk-visible"),n="open")}),$("#banner-loader").click(function(){$("#banner-loader").removeClass("atk-visible"),n="close"});var i;$("#banner-notification-start").click(function(){"open"!=i&&($("#banner-notification").addClass("atk-visible"),i="open")}),$("#banner-notification").click(function(){$("#banner-notification").removeClass("atk-visible"),i="close"})});