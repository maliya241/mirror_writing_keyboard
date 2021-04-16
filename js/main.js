var textarea_element = document.getElementById("mirrored_textarea");

window.addEventListener("load", main_set_up);

function main_set_up() {
    textarea_element.addEventListener("input", auto_resize, false);
}

function auto_resize() {
    textarea_element.style.height = 'auto';
    textarea_element.style.height = textarea_element.scrollHeight + 'px';
}

function save_as_png() {
	html2canvas(document.getElementById('mirrored_textarea'), {scale: 2.5}).then(function(canvas) {
		document.body.appendChild(canvas);
		Canvas2Image.saveAsPNG(canvas); //saves png
	});
}
