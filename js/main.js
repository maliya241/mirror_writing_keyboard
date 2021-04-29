var textarea_element = document.getElementById("mirrored_textarea");
var font_selection_radio;
var selected_font = "times_new_roman";
var previous_selected_font = "times_new_roman";
var selected_font_size = "24px";
var previous_selected_font_size = "24px";


window.addEventListener("load", main_set_up);

function main_set_up() {

    textarea_element.addEventListener("input", auto_resize, false);
    textarea_element.addEventListener("input", update_printable_table, false);

    button_input("click"); //mouse click events
	button_input("touchend"); //touch screen events
	button_input("keydown"); //physical keyboard events

    change_font_family(document.getElementById("times_new_roman_font"));
    change_font_size(document.getElementById("eighteen_font_size"));
}

/*
button_input function gives each button its function for a given event type.
event_type parameter: accepts events in quotation such as "click" as arguments
Executes in main_set_up.
*/
function button_input(event_type) {
    document.getElementById("font_dropdown_button").addEventListener(event_type, function(event) {
        if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
            if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
                toggle_button(event.target);
                event.preventDefault();
                dropdown("font_dropdown");
            }
        } else {
            event.preventDefault();//takes care of multiple event listener inputs
            dropdown("font_dropdown");
        }
    });
    document.getElementById("font_size_dropdown_button").addEventListener(event_type, function(event) {
        if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
            if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
                toggle_button(event.target);
                event.preventDefault();
                dropdown("font_size_dropdown");
            }
        } else {
            event.preventDefault();//takes care of multiple event listener inputs
            dropdown("font_size_dropdown");
        }
    });
    document.getElementById("print_button").addEventListener(event_type, function(event) {
        if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
            if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
                toggle_button(event.target);
                event.preventDefault();
                prepare_to_print();
            }
        } else {
            event.preventDefault();//takes care of multiple event listener inputs
            prepare_to_print();
        }
    });
}

/*
toggle_button function changes the aria-pressed attribute to true.
ele parameter: takes event.target
Executes when specific physical keys are pressed down.
*/
function toggle_button(ele) {
	ele.setAttribute(
	  "aria-pressed",
	  ele.getAttribute("aria-pressed") === "true" ? "false" : "true"
	);
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
radio_font: input element of the selected font
Executes when the selected font has been changed in font_selection.
*/
function change_font_family(radio_font) {
    previous_selected_font = selected_font;
    selected_font = radio_font.value;
    var font_input_radio_button_id = selected_font + "_font";
    document.getElementById("font_dropdown_button").innerText = document.getElementById(selected_font).innerText + " " + String.fromCharCode("9660");

    document.getElementById(font_input_radio_button_id).checked = true;

    document.body.classList.remove(previous_selected_font);
    textarea_element.classList.remove(previous_selected_font);
    document.getElementById("print_button").classList.remove(previous_selected_font);
    document.getElementById("font_dropdown_button").classList.remove(previous_selected_font);
    document.getElementById("font_size_dropdown_button").classList.remove(previous_selected_font);
    document.getElementById("font_dropdown").classList.remove(selected_font);
    document.body.classList.add(selected_font);
    textarea_element.classList.add(selected_font);
    document.getElementById("print_button").classList.add(selected_font);
    document.getElementById("font_dropdown_button").classList.add(selected_font);
    document.getElementById("font_size_dropdown_button").classList.add(selected_font);
}

/*
change_font_size function changes the font size of the textarea and the printable content based on the selected font size from font_size_selection.
radio_font_size: input element of the selected font
Executes when the selected font size has been changed in font_size_selection.
*/
function change_font_size(radio_font_size) {
    var pt_to_px_number = 4/3;
    previous_selected_font_size = selected_font_size;
    selected_font_size = (Number(document.getElementById(radio_font_size.value).innerHTML)*pt_to_px_number).toString() + "px";
    var font_input_radio_button_id = radio_font_size.value + "_font_size";
    document.getElementById("font_size_dropdown_button").innerText = Number(document.getElementById(radio_font_size.value).innerHTML) + " pt " + String.fromCharCode("9660");

    document.getElementById(font_input_radio_button_id).checked = true;

    textarea_element.style.fontSize = selected_font_size;
    document.getElementById("mirror_writing_printable_content").style.fontSize = selected_font_size;
}

/*
dropdown function handles the opening and closing of the dropdown content.
dropdown_id: id of the dropdown content 
Executes when the corresponding dropdown button is pressed. 
*/
function dropdown(dropdown_id) {
    var dropdown_content_class = document.getElementsByClassName("dropdown_content");
    for (i = 0; i < dropdown_content_class.length; i++) {
        if (dropdown_content_class[i].id != dropdown_id && dropdown_content_class[i].classList.contains("show")) {
            dropdown_content_class[i].classList.remove("show");
        }
    }

    dropdown_element_class = dropdown_id + "_element";
    document.getElementById(dropdown_id).classList.toggle("show");
    document.body.addEventListener("click", function(e) {
        if (!e.target.classList.contains(dropdown_element_class)) { 
            document.getElementById(dropdown_id).classList.remove("show");
        }
    }, false);
    document.body.addEventListener("touchend", function(e) {
        if (!e.target.classList.contains(dropdown_element_class)) { 
            document.getElementById(dropdown_id).classList.remove("show");
        }
    }, false);
}


