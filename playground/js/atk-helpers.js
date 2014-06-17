// INFO IE and Opera need some fixing to display the correct height of nested grids.

// NOTE Fortunately IE *and* Opera both implement attachEvent() and they seem to be
//      the only browsers, so we can use it as a filter as well.
if (window.attachEvent) {
	function fixGrid() {
		var grid = document.getElementById('atk-layout-content');
		grid.style.height = null; // NOTE Remove old height before getting new value.
		grid.style.height = grid.parentNode.offsetHeight+'px';
	}
	window.attachEvent('onload', fixGrid);
	window.attachEvent('onresize', fixGrid);
}