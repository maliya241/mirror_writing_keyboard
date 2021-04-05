var textarea = document.getElementById("mirrored_textarea");

window.addEventListener("load", main_set_up);

function main_set_up() {
    textarea.addEventListener('input', autoResize, false);

}

function autoResize() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

function save_as_png() {
	html2canvas(document.getElementById('mirrored_textarea'), {scale: 2.5}).then(function(canvas) {
		document.body.appendChild(canvas);
		Canvas2Image.saveAsPNG(canvas); //saves png
	});
}
