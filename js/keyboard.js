//28 keys for alphabet, numbers, and punctuation keys
var key_name_array = []; //text for all keys; 
var key_button_array = []; //button for all keys; 46 buttons
var key_array = []; //all keys, both names and button; 46 keys
var keyboard_option = "lowercase_alphabet"; //lowercase_alphabet, uppercase_alphabet, punctuation_numbers, accent_characters
var previous_mirror_text_type = "mirrored_text"; //previous mirror_text_type 
var mirror_text_type = "mirrored_font_text"; //mirrored_text, mirrored_font_text
//Key Groups
var mirrored_font_two_state_key_names_array = []; //punctuation_numbers, accent_chars, shift, caps_lock buttons; 14 keys 
var mirrored_two_state_key_names_array = []; //punctuation_numbers, accent_chars, shift, caps_lock buttons; 14 keys
var mirrored_font_single_state_key_names_array = []; //tab, backspace, enter; 3 keys
var mirrored_single_state_key_names_array = []; //tab, backspace, enter; 3 keys
var mirrored_font_option_key_names_array = []; //mirrored key names for additional key options; 7 key names
var mirrored_option_key_names_array = []; //mirrored key names for additional key options; 7 key names
//Arrays of Arrays
var mirrored_font_key_name_array = []; //text for custom mirrored font;
var mirrored_key_name_array = []; //normal text that has been mirrored;
//Index Array of mirrored_font_two_state_key_names_array for punctuation_number keys
var mirrored_font_punctuation_numbers_group_array = []; //group punctuation_numbers keys; 2 keys
var mirrored_punctuation_numbers_group_array = []; //group punctuation_numbers keys; 2 keys
var mirrored_font_alphabet_key_punctuation_numbers_group_array = []; //group punctuation_numbers alphabet_key keys; 2 keys
var mirrored_alphabet_key_punctuation_numbers_group_array = []; //group punctuation_numbers alphabet_key keys; 2 keys
//Index Array of mirrored_font_two_state_key_names_array for accent_chars keys
var mirrored_font_accent_chars_group_array = []; //group accent_chars keys; 2 keys
var mirrored_accent_chars_group_array = []; //group accent_chars keys; 2 keys
var mirrored_font_alphabet_key_accent_chars_group_array = []; //group accent_chars alphabet_key keys; 2 keys
var mirrored_alphabet_key_accent_chars_group_array = []; //group accent_chars alphabet_key keys; 2 keys
//Index Array of mirrored_font_two_state_key_names_array for shift keys
var mirrored_font_shift_group_array = []; //group shift keys; 2 keys
var mirrored_shift_group_array = []; //group shift keys; 2 keys
var mirrored_font_unshift_group_array = []; //group unshift keys; 2 keys
var mirrored_unshift_group_array = []; //group unshift keys; 2 keys
//Index Array of mirrored_font_two_state_key_names_array for caps_lock key
var mirrored_font_caps_lock_group_array = []; //group caps lock keys; 2 keys
var mirrored_caps_lock_group_array = []; //group caps lock keys; 2 keys
var mirrored_font_caps_unlock_group_array = []; //group caps unlock keys; 2 keys
var mirrored_caps_unlock_group_array = []; //group caps unlock keys; 2 keys
//Alphabet Keys
var mirrored_font_uppercase_letter_comma_period_array = []; //group mirrored font uppercase_letter plus comma and period; 28 key names
var mirrored_font_lowercase_letter_comma_period_array = []; //group mirrored font lowercase_letter plus comma and period; 28 key names
var mirrored_uppercase_letter_comma_period_array = []; //group mirrored uppercase_letter plus comma and period; 28 key names
var mirrored_lowercase_letter_comma_period_array = []; //group mirrored lowercase_letter plus comma and period; 28 key names

var uppercase_letter_comma_period_array = [
	"q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
	"a", "s", "d", "f", "g", "h", "j", "k", "l",
	"z", "x", "c", "v", "b", "n", "m",  ",", "."
]

window.addEventListener("load", keyboard_set_up);

function keyboard_set_up() {
	//populate all key buttons array
	for (i = 0; i < 46; i++) {
		key_array[i] = document.getElementsByClassName("key_button_and_name")[i];
		key_button_array[i] = document.getElementsByClassName("key_button")[i];
	}
	//populate mirrored font and mirrored uppercase and lowercase key names arrays
	for (i = 0; i < 26; i++) {
		mirrored_font_uppercase_letter_comma_period_array[i] = document.getElementsByClassName("uppercase_letter mirrored_font_key_name")[i];
		mirrored_font_lowercase_letter_comma_period_array[i] = document.getElementsByClassName("lowercase_letter mirrored_font_key_name")[i];
		mirrored_uppercase_letter_comma_period_array[i] = document.getElementsByClassName("uppercase_letter mirrored_key_name")[i];
		mirrored_lowercase_letter_comma_period_array[i] = document.getElementsByClassName("lowercase_letter mirrored_key_name")[i];
	}
	//preappend comma and period in mirrored font and mirrored uppercase and lowercase key names arrays
	mirrored_font_uppercase_letter_comma_period_array.unshift(document.getElementById("comma").getElementsByClassName("mirrored_font_key_name")[0]);
	mirrored_font_uppercase_letter_comma_period_array.unshift(document.getElementById("period").getElementsByClassName("mirrored_font_key_name")[0]);
	mirrored_font_lowercase_letter_comma_period_array.unshift(document.getElementById("comma").getElementsByClassName("mirrored_font_key_name")[0]);
	mirrored_font_lowercase_letter_comma_period_array.unshift(document.getElementById("period").getElementsByClassName("mirrored_font_key_name")[0]);
	mirrored_uppercase_letter_comma_period_array.unshift(document.getElementById("comma").getElementsByClassName("mirrored_key_name")[0]);
	mirrored_uppercase_letter_comma_period_array.unshift(document.getElementById("period").getElementsByClassName("mirrored_key_name")[0]);
	mirrored_lowercase_letter_comma_period_array.unshift(document.getElementById("comma").getElementsByClassName("mirrored_key_name")[0]);
	mirrored_lowercase_letter_comma_period_array.unshift(document.getElementById("period").getElementsByClassName("mirrored_key_name")[0]);
 	//populate single state key names array
	for (i = 0; i < 3; i++) {
		mirrored_font_single_state_key_names_array[i] = document.getElementsByClassName("single_state_key_names mirrored_font_key_name")[i];
		mirrored_single_state_key_names_array[i] = document.getElementsByClassName("single_state_key_names mirrored_key_name")[i];
	}
	//populate two state key names array
	for (i = 0; i < 14; i++) {
		mirrored_font_two_state_key_names_array[i] = document.getElementsByClassName("two_state_key_names mirrored_font_key_name")[i];
		mirrored_two_state_key_names_array[i] = document.getElementsByClassName("two_state_key_names mirrored_key_name")[i];
	}
	//populate options key names arrays
	for (i = 0; i < 7; i++) {
		mirrored_font_option_key_names_array[i] = document.getElementsByClassName("option_key_names mirrored_font_key_name")[i];
		mirrored_option_key_names_array[i] = document.getElementsByClassName("option_key_names mirrored_key_name")[i];
	}

	//populate mirrored_font_key_name_array
	mirrored_font_key_name_array.push(mirrored_font_uppercase_letter_comma_period_array);
	mirrored_font_key_name_array.push(mirrored_font_lowercase_letter_comma_period_array);
	mirrored_font_key_name_array.push(mirrored_font_single_state_key_names_array);
	mirrored_font_key_name_array.push(mirrored_font_two_state_key_names_array);
	mirrored_font_key_name_array.push(mirrored_font_option_key_names_array);
	//populate mirrored_key_name_array
	mirrored_key_name_array.push(mirrored_uppercase_letter_comma_period_array);
	mirrored_key_name_array.push(mirrored_lowercase_letter_comma_period_array);
	mirrored_key_name_array.push(mirrored_single_state_key_names_array);
	mirrored_key_name_array.push(mirrored_two_state_key_names_array);
	mirrored_key_name_array.push(mirrored_option_key_names_array);

	//populate two state punctuation_numbers key name arrays with index of punctuation_numbers_group_array
	mirrored_font_punctuation_numbers_group_array.push(0); 
	mirrored_font_punctuation_numbers_group_array.push(6);
	mirrored_font_alphabet_key_punctuation_numbers_group_array.push(1);
	mirrored_font_alphabet_key_punctuation_numbers_group_array.push(7);
	mirrored_punctuation_numbers_group_array.push(0);
	mirrored_punctuation_numbers_group_array.push(6);
	mirrored_alphabet_key_punctuation_numbers_group_array.push(1);
	mirrored_alphabet_key_punctuation_numbers_group_array.push(7);
	
	//populate two state accent_chars key name arrays with index of mirrored_font_two_state_key_names_array
	mirrored_font_accent_chars_group_array.push(2);
	mirrored_font_accent_chars_group_array.push(4);
	mirrored_font_alphabet_key_accent_chars_group_array.push(3);
	mirrored_font_alphabet_key_accent_chars_group_array.push(5);
	mirrored_accent_chars_group_array.push(2);
	mirrored_accent_chars_group_array.push(4);
	mirrored_alphabet_key_accent_chars_group_array.push(3);
	mirrored_alphabet_key_accent_chars_group_array.push(5);

	//populate two state shift key name arrays with index of mirrored_font_two_state_key_names_array
	mirrored_font_shift_group_array.push(8);
	mirrored_font_shift_group_array.push(10);
	mirrored_font_unshift_group_array.push(9);
	mirrored_font_unshift_group_array.push(11);
	mirrored_shift_group_array.push(8);
	mirrored_shift_group_array.push(10);
	mirrored_unshift_group_array.push(9);
	mirrored_unshift_group_array.push(11);

	//populate two state shift key name arrays with index of mirrored_font_two_state_key_names_array
	mirrored_font_unshift_group_array.push(12);
	mirrored_font_unshift_group_array.push(13);
	mirrored_shift_group_array.push(12);
	mirrored_shift_group_array.push(13);

	mirror_text_type_selection();

	mouse_click_input();

	 
	//Debug 
	document.getElementById("introduction").innerHTML = "\n";
	for (i = 18; i < 28; i++) {
		var count = 0;
		document.getElementById("introduction").innerHTML += i + ". " + mirrored_font_lowercase_letter_comma_period_array[i].textContent + "	";
		mirrored_font_lowercase_letter_comma_period_array[i].textContent = count;
		count += 1;
		document.getElementById("introduction").innerHTML += i + ". " + mirrored_font_lowercase_letter_comma_period_array[i].textContent + "	";
	}
	document.getElementById("introduction").innerHTML += "\n"; 
}

function mirror_text_type_selection() {
	if (previous_mirror_text_type != mirror_text_type) {
		//toggle visibility of alphabet key names
		for (i = 0; i < 28; i++) {
			mirrored_font_lowercase_letter_comma_period_array[i].classList.toggle("hide");
			mirrored_lowercase_letter_comma_period_array[i].classList.toggle("hide");
		}
		//toggle visibility of single state key names
		for (i = 0; i < 3; i++) {
			mirrored_font_single_state_key_names_array[i].classList.toggle("hide");
			mirrored_single_state_key_names_array[i].classList.toggle("hide");
		}
		//toggle visibility of two state key names
		for (i = 0; i < 14; i += 2) {
			mirrored_font_two_state_key_names_array[i].classList.toggle("hide");
			mirrored_two_state_key_names_array[i].classList.toggle("hide");
		}
		//toggle visibility of option key names
		for (i = 0; i < 7; i++) {
			mirrored_font_option_key_names_array[i].classList.toggle("hide");
			mirrored_option_key_names_array[i].classList.toggle("hide");
		}
	}
}

function input(event_type) {
	key_array[0].addEventListener(event_type, function(event) {
		event.preventDefault(); //takes care of multiple event listener inputs
	}); //right .?123
	key_array[1].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
	}); //right accent chars
	key_array[2].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(32);
	}); //space (32)
	key_array[3].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
	}); //left accent chars
	key_array[4].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
	}); //left .?123
	key_array[5].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		shift_function();
	}); //right shift

	key_array[6].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(46);
	}); //period (46)
	key_array[7].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(44);
	}); //comma (44)
	key_array[8].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(109, 77);
	}); //m (109), M (77),
	key_array[9].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(110, 78);
	}); //n (110), N (78),
	key_array[10].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(98, 66);
	}); //b (98), B (66),
	key_array[11].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(118, 86);
	}); //v (118), V (86),
	key_array[12].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(99, 67);
	}); //c (99), C (67),
	key_array[13].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(120, 88);
	}); //x (120), X (88),
	key_array[14].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(122, 90);
	}); //z (122), Z (90),

	key_array[15].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		shift_function();
	}); //left shift
	key_array[16].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(13);
	}); //enter (13)

	key_array[17].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(108, 76);
	}); //l (108), L (76),
	key_array[18].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(107, 75);
	}); //k (107), K (75),
	key_array[19].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(106, 74);
	}); //j (106), J (74),
	key_array[20].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(104, 72);
	}); //h (104), H (72),
	key_array[21].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(103, 71);
	}); //g (103), G (71),
	key_array[22].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(102, 70);
	}); //f (102), F (70),
	key_array[23].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(100, 68);
	}); //d (100), D (68),
	key_array[24].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(115, 83);
	}); //s (115), S (83),
	key_array[25].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(97, 65);
	}); //a (97), A (65),

	key_array[26].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		capitalize_alphabet();
	}); //caps lock
	key_array[27].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		
	}); //backspace

	key_array[28].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(112, 80);
	}); //p (112), P (80),
	key_array[29].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(111, 79);
	}); //o (111), O (79),
	key_array[30].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(105, 73);
	}); //i (105), I (73),
	key_array[31].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(117, 85);
	}); //u (117), U (85),
	key_array[32].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(121, 89);
	}); //y (121), Y (89),
	key_array[33].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(116, 84);
	}); //t (116), T (84),
	key_array[34].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(114, 82);
	}); //r (114), R (82),
	key_array[35].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(101, 69);
	}); //e (101), E (69),
	key_array[36].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(119, 87);
	}); //w (119), W (87),
	key_array[37].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(113, 81);
	}); //q (113), Q (81),

	key_array[38].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(9);
	}); //horizonal tab (9)
	key_array[39].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		
	}); //keyboard option 6
	key_array[40].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		
	}); //keyboard option 5
	key_array[41].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		
	}); //keyboard option 4
	key_array[42].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		
	}); //keyboard option 3
	key_array[43].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		keyboard_option = "punctuation_numbers";
	}); //keyboard option 2
	key_array[44].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		keyboard_option = "accent_characters";
	}); //keyboard option 1; accent characters
	key_array[45].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		keyboard_option = "lowercase_alphabet";
	}); //keyboard option 0; alphabet
	
}

function mouse_click_input() {
	input("click");
}

function touch_screen_input() {
	input("touchend");
}

function keyboard_input() {

}

function edit_textarea(lowercase_alphabet_ascii_code, uppercase_alphabet_ascii_code, punctuation_number_ascii_code, accent_ascii_code) {
	if (uppercase_alphabet_ascii_code == null) { //one argument passed
		uppercase_alphabet_ascii_code = lowercase_alphabet_ascii_code;
	} 
	if (punctuation_number_ascii_code == null && uppercase_alphabet_ascii_code == null) { //one argument passed
		punctuation_number_ascii_code = lowercase_alphabet_ascii_code;
	} else if (punctuation_number_ascii_code == null) { //two arguments passed
		punctuation_number_ascii_code = uppercase_alphabet_ascii_code;
	}
	if (punctuation_number_ascii_code == null && uppercase_alphabet_ascii_code == null && accent_ascii_code == null) { //one argument passed
		accent_ascii_code = lowercase_alphabet_ascii_code;
	} else if (punctuation_number_ascii_code == null && accent_ascii_code == null) { //two arguments passed
		accent_ascii_code = uppercase_alphabet_ascii_code;
	} else if (accent_ascii_code == null) { //three arguments passed
		accent_ascii_code = punctuation_number_ascii_code;
	}
	if (keyboard_option == "lowercase_alphabet") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(lowercase_alphabet_ascii_code);
	} else if (keyboard_option == "uppercase_alphabet") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(uppercase_alphabet_ascii_code);
	} else if (keyboard_option == "punctuation_numbers") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(punctuation_number_ascii_code);
	} else if (keyboard_option == "accent_characters") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(accent_ascii_code);
	} 
}

function capitalize_alphabet() {
	if (keyboard_option == "lowercase_alphabet") {
		keyboard_option = "uppercase_alphabet";
	} else {
		keyboard_option = "lowercase_alphabet";
	}
	if (mirror_text_type == "mirrored_font_text") {
		mirrored_font_two_state_key_names_array[8].classList.toggle("hide");
		mirrored_font_two_state_key_names_array[9].classList.toggle("hide");
		mirrored_font_two_state_key_names_array[10].classList.toggle("hide");
		mirrored_font_two_state_key_names_array[11].classList.toggle("hide");
		for (i = 0; i < 28; i++) {
			mirrored_font_lowercase_letter_comma_period_array[i].classList.toggle("hide");
			mirrored_font_uppercase_letter_comma_period_array[i].classList.toggle("hide");
		}
	} else {
		mirrored_two_state_key_names_array[8].classList.toggle("hide");
		mirrored_two_state_key_names_array[9].classList.toggle("hide");
		mirrored_two_state_key_names_array[10].classList.toggle("hide");
		mirrored_two_state_key_names_array[11].classList.toggle("hide");
		for (i = 0; i < 28; i++) {
			mirrored_lowercase_letter_comma_period_array[i].classList.toggle("hide");
			mirrored_uppercase_letter_comma_period_array[i].classList.toggle("hide");
		}
	}
}

function shift_function() {
	one_time_event_listener(document.getElementById("onscreen_keyboard"), "click", capitalize_alphabet);
}

/*creates a one time event*/
function one_time_event_listener(node, type, callback) {
	node.addEventListener(type, function(event) {
		event.target.removeEventListener(event.type, arguments.callee);
		return callback(event);
	});
}