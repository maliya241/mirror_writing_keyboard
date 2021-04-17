var textarea_element = document.getElementById("mirrored_textarea");

window.addEventListener("load", main_set_up);

function main_set_up() {
    textarea_element.addEventListener("input", auto_resize, false);
    textarea_element.addEventListener("input", update_printable_table, false);
    document.getElementById("print_button").addEventListener("click", prepare_to_print);
    change_font_family();
}

/*
auto_resize function resizes the textarea height as needed.
Executes after the textarea value has been changed.
*/
function auto_resize() {
    textarea_element.style.height = 'auto';
    textarea_element.style.height = textarea_element.scrollHeight + 'px';
}

/*
update_printable_table function updates the print_formating table when the textarea value has been changed.
Executes when the textarea value has been changed.
*/
function update_printable_table() {
    document.getElementById("mirror_writing_printable_content").innerText = textarea_element.value;
}

/*
prepare_to_print function opens the print screen when the print button has been pressed.
Executes when the print button has been click on.
*/
function prepare_to_print() {
    window.print();
}

/*
change_font_family function changes the font family of all the text in the body based on the selected font from font_selection.
Executes when the selected font has been changed in font_selection.
*/
function change_font_family() {
    var selected_font = document.getElementById("font_selection").value;
    document.body.style.fontFamily = selected_font;
    textarea_element.style.fontFamily = selected_font;
    document.getElementById("print_button").style.fontFamily = selected_font;
    document.getElementById("font_selection").style.fontFamily = selected_font;
}
