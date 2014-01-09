// INFO IE and Opera need some fixing to display the correct height of nested layouts.

function fixLayout() {
	var container = $('.atk-layout.atk-layout-cell');
	var height = $('.atk-layout.atk-layout-cell').parent().outerHeight();
	container.height(height);
}

$(function() {
	if ((navigator.userAgent.match(/msie/i)) || (navigator.userAgent.match(/opera/i))){
		fixLayout();
		$(window).resize(function() {
        	fixLayout();
    	});
	}
});