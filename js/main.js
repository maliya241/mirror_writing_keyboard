var textarea_element = document.getElementById("mirrored_textarea");
var selected_font = "times_new_roman";
var previous_selected_font = "times_new_roman";
var selected_font_size = "24px";
var selected_page_size = "8.5in 11in";
var selected_page_layout = "portrait";

window.addEventListener("load", main_set_up);

function main_set_up() {
    textarea_element.addEventListener("input", update_printable_table, false);
	
	change_font_family(document.getElementById("times_new_roman_font"));
    
    button_input("click"); //mouse click events
	button_input("touchend"); //touch screen events
	button_input("keydown"); //physical keyboard events
}

/*
button_input function gives each button its function for a given event type.
event_type parameter: accepts events in quotation such as "click" as arguments
Executes in main_set_up.
*/
function button_input(event_type) {
    button_input_event_listener("font_dropdown_button", event_type, dropdown, "font_dropdown");
    button_input_event_listener("font_size_dropdown_button", event_type, dropdown, "font_size_dropdown");
    button_input_event_listener("page_size_dropdown_button", event_type, dropdown, "page_size_dropdown");
    button_input_event_listener("page_layout_dropdown_button", event_type, dropdown, "page_layout_dropdown");
    button_input_event_listener("print_button", event_type, prepare_to_print);
    button_input_event_listener("screen_read_button", event_type, screen_read_text);
    button_input_event_listener("hide_keyboard_button", event_type, hide_keyboard);
}

/*
button_input_event_listener function add the event listener to each button.
element_id parameter: id of the button element
event_type parameter: accepts events in quotation such as "click" as arguments
button_function parameter: function for the button to be executed
function_argument: arugment for the function
Executes in button_input.
*/
function button_input_event_listener(element_id, event_type, button_function, function_argument) {
    document.getElementById(element_id).addEventListener(event_type, function(event) {
        if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
            if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
                toggle_button(event.target);
                event.preventDefault(); //takes care of multiple event listener inputs
                if (function_argument != null) {
                    button_function(function_argument);
                } else {
                    button_function();
                }
            }
        } else {
            event.preventDefault();
            if (function_argument != null) {
                button_function(function_argument);
            } else {
                button_function();
            }
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
radio_font parameter: input element of the selected font
Executes when the selected font has been changed in font_selection.
*/
function change_font_family(radio_font) {
    previous_selected_font = selected_font;
    selected_font = radio_font.value;
    var font_input_radio_button_id = selected_font + "_font";
    var button_array = document.getElementsByTagName("button");
    var key_text_array = document.getElementsByClassName("key_name");
    document.getElementById("font_dropdown_button").innerHTML= document.getElementById(selected_font).innerText + " " + "<span aria-hidden='true'>&#9660;</span>"; //change font family label to selected font 

    document.getElementById(font_input_radio_button_id).checked = true;


    document.body.classList.remove(previous_selected_font);
    textarea_element.classList.remove(previous_selected_font);
    for (i = 0; i < button_array.length; i++) {
        button_array[i].classList.remove(previous_selected_font);
    }
    for (i = 0; i < key_text_array.length; i++) {
        key_text_array[i].classList.remove(previous_selected_font);
    }
    document.getElementById("font_dropdown").classList.remove(selected_font);
    document.body.classList.add(selected_font);
    textarea_element.classList.add(selected_font);
    for (i = 0; i < button_array.length; i++) {
        button_array[i].classList.add(selected_font);
    }
    for (i = 0; i < key_text_array.length; i++) {
        key_text_array[i].classList.add(selected_font);
    }
    auto_resize();
}

/*
change_font_size function changes the font size of the textarea and the printable content based on the selected font size from font_size_selection.
radio_font_size parameter: input element of the selected font
Executes when the selected font size has been changed in font_size_selection.
*/
function change_font_size(radio_font_size) {
    var pt_to_px_number = 4/3;
    selected_font_size = (Number(document.getElementById(radio_font_size.value).innerHTML)*pt_to_px_number).toString() + "px";
    var font_input_radio_button_id = radio_font_size.value + "_font_size";
    document.getElementById("font_size_dropdown_button").innerHTML= document.getElementById(radio_font_size.value).innerHTML + " pt " + "<span aria-hidden='true'>&#9660;</span>"; //change font size label to the selected font size

    document.getElementById(font_input_radio_button_id).checked = true;

    textarea_element.style.fontSize = selected_font_size;
    document.getElementById("mirror_writing_printable_content").style.fontSize = selected_font_size;
    auto_resize();
}

/*
change_page_size function changes the size of the mirrored text for printing; does not change it for actual print page setting.
radio_font_size parameter: input element of the selected page size
Executes when the selected page size has been changed in the page_size_selection or called by change_page_layout.
*/
function change_page_size(radio_page_size) {
    if (radio_page_size != null) {
        selected_page_size = radio_page_size.value.split(" "); //array: width, height in inches 
        var radio_page_size_label_id = radio_page_size.id.replace("_page_size", "");
        document.getElementById("page_size_dropdown_button").innerHTML= document.getElementById(radio_page_size_label_id).innerText + "<span aria-hidden='true'>&#9660;</span>"; //change page size label to the selected page size
        radio_page_size.checked = true;
    } else {
        change_page_layout();
    }

    if (selected_page_layout == "landscape") {
        document.getElementById("print_formating").style.width = selected_page_size[1];
    } else { //default is protrait
        document.getElementById("print_formating").style.width = selected_page_size[0];
    }
}

/*
change_page_layout function changes the layout of the mirrored text for printing; does not change it for actual print page setting.
radio_font_layout parameter: input element of the selected page layout
Executes when the selected page layout has been changed in the page_layout_selection or called by change_page_size.
*/
function change_page_layout(radio_page_layout) {
    if (radio_page_layout != null) {
        selected_page_layout = radio_page_layout.value; 
        var radio_page_layout_label_id = radio_page_layout.id.replace("_page_layout", "");
        document.getElementById("introduction").innerHTML += radio_page_layout_label_id;
        document.getElementById("page_layout_dropdown_button").innerHTML= document.getElementById(radio_page_layout_label_id).innerText + "<span aria-hidden='true'>&#9660;</span>"; //change page layout label to the selected page layout
        radio_page_layout.checked = true;
    }
     change_page_size();
}

/*
dropdown function handles the opening and closing of the dropdown content.
dropdown_id parameter: id of the dropdown content 
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


/*
screen_read_text function creates a visually hidden input and adds the mirrored text value to it and then focuses on it to make the screen reader read it. 
Important Note: Screen reader may say something like "Edit" before reading the mirrored text because of the input.
Executes when the Screen Read Mirrored Text is pressed.
*/
function screen_read_text() {
    if (document.getElementById("screen_read_textarea") != null) {
        document.getElementById("screen_read_textarea").remove();
    }
    var screen_reader_paragraph = document.createElement("input");
    screen_reader_paragraph.setAttribute("id", "screen_read_textarea");
	screen_reader_paragraph.value = textarea_element.value;
   	screen_reader_paragraph.classList.add("screen_reader_only"); //visually hide the new paragraph
	
    document.body.appendChild(screen_reader_paragraph);
	
	screen_reader_paragraph.focus();
}

/*
hide_keyboard funtion toggles the visibility of the onscreen keyboard.
Executes when the hide keyboard is pressed.
*/
function hide_keyboard() {
    document.getElementById("onscreen_keyboard").classList.toggle("hide");
    if (document.getElementById("hide_keyboard_button").innerHTML == "Hide Keyboard") {
        document.getElementById("hide_keyboard_button").innerHTML = "Unhide Keyboard";
    } else {
        document.getElementById("hide_keyboard_button").innerHTML = "Hide Keyboard";
    }
}
