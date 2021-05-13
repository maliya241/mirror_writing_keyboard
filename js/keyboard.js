//28 keys for alphabet, numbers, and punctuation keys
var key_name_array = []; //text for all keys; 
var key_button_array = []; //button for all keys; 46 buttons
var key_array = []; //all keys, both names and button; 46 keys
var virtual_keyboard_option = "lowercase_alphabet"; //lowercase_alphabet, uppercase_alphabet, punctuation_numbers_one, punctuation_numbers_two, lowercase_accent_characters_one, uppercase_accent_characters_one, lowercase_accent_characters_two, uppercase_accent_characters_two,lowercase_accent_characters_three, uppercase_accent_characters_three,lowercase_accent_characters_four, uppercase_accent_characters_four
var previous_mirror_text_type = "mirrored_text"; //previous mirror_text_type 
var mirror_text_type = "mirrored_text"; //mirrored_text, mirrored_font_text

var textarea_element = document.getElementById("mirrored_textarea");

//Key Groups
var mirrored_font_two_state_key_names_array = []; //punctuation_numbers, accent_chars, caps_lock buttons; 12 keys 
var mirrored_two_state_key_names_array = []; //punctuation_numbers, accent_chars, caps_lock buttons; 12 keys
var mirrored_font_single_state_key_names_array = []; //delete, backspace, tab, enter; 4 keys
var mirrored_single_state_key_names_array = []; //delete, backspace, tab, enter; 4 keys
var mirrored_font_option_key_names_array = []; //mirrored key names for additional key options; 7 key names
var mirrored_option_key_names_array = []; //mirrored key names for additional key options; 7 key names

//Arrays of Arrays
var mirrored_font_key_name_array = []; //text for custom mirrored font;
var mirrored_key_name_array = []; //normal text that has been mirrored;

//Alphabet Keys
var mirrored_font_alphanumeric_punctuation_key_names_arrray = []; //group alphanumeric_punctuation key names; 28 keys
var mirrored_alphanumeric_punctuation_key_names_arrray = []; //group alphanumeric_punctuation key names; 28 keys

var modifier_key_pressed = false;
var start;
var end;

/*
Character Keyboard Arrays 
contains the unicode value of the characters
characters are arranged in the order of keyboard from top left to bottom right
*/
var lowercase_letter_comma_period_utf_8_array = [
	113, 119, 101, 114, 116, 121, 117, 105, 111, 112,
	//q (113), w (119), e (101), r (114), t (116), y (121), u (117), i (105), o (111), p (112)
	97, 115, 100, 102, 103, 104, 106, 107, 108,
	//a (97), s (115), d (100), f (102), g (103), h (104), j (106),  k (107), l (108)
	122, 120, 99, 118, 98, 110, 109, 44, 46
	// z (122), x (120), c (99), v (118), b (98), n (110), m (109), (44), , . (46)

];
var uppercase_letter_comma_period_utf_8_array = [ 
	81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 
	// Q (81), W (87), E (69), R (82), T (84), Y (89), U (85), I (73), O (79), P (80)
	65, 83, 68, 70, 71, 72, 74, 75, 76,
	// A (65), S (83), D (68), F (70), G (71), H (72), J (74), K (75), L (76)
	90, 88, 67, 86, 66, 78, 77, 33, 63
	// Z (90), X (88), C (67), V (86), B (66), N (78), M (77), ! (33), ? (63)
];
var punctuation_numbers_one_utf_8_array = [ 
	49, 50, 51, 52, 53, 54, 55, 56, 57, 48,
	// 1 (49), 2 (50), 3 (51), 4 (52), 5 (53), 6 (54), 7 (55), 8 (56), 9 (57), 0 (48)
	64, 35, 36, 38, 42, 40, 41, 39, 34,
	// @ (64), # (35), $ (36), & (38), * (42),  ( (40), ) (41), ' (39), " (34)
	37, 45, 43, 61, 47, 59, 58, 33, 63
	// % (37), - (45), + (43), = (61), / (47), ; (59), : (58), ! (33), ? (63)
];
var punctuation_numbers_two_utf_8_array = [
	49, 50, 51, 52, 53, 54, 55, 56, 57, 48,
	// 1 (49), 2 (50), 3 (51), 4 (52), 5 (53), 6 (54), 7 (55), 8 (56), 9 (57), 0 (48)
	8364, 163, 165, 95, 94, 91, 93, 123, 125,
	// € (8364), £ (163) , ¥ (165), _ (95), ^ (94), [ (91), ] (93), { (123), } (125)
	167, 124, 126, 8230, 92, 60, 62, 161, 191
	// § (167), | (124), ~ (126) , … (8230), \ (92), < (60), > (62), ¡ (161), ¿ (191)
];
var lowercase_accent_characters_one_utf_8_array = [
	225, 224, 226, 228, 227, 257, 229, 259, 261, 230,
	// á (225), à (224), â (226), ä (228), ã (227), ā (257), å (229), ă (259), ą (261), æ (230)
	233, 232, 234, 235, 275, 283, 277, 279, 281,
	// é (233), è (232), ê (234), ë (235), ē (275), ě (283), ĕ (277), ė (279), ę (281)
	237, 236, 238, 239, 297, 299, 301, 105, 303
	// í (237), ì (236), î (238), ï (239), ĩ (297), ī (299), ĭ (301), i (105), į (303)
];
var uppercase_accent_characters_one_utf_8_array = [
	193, 192, 194, 196, 195, 256, 197, 258, 260, 198,
	// Á (193), À (192), Â (194), Ä (196), Ã (195), Ā (256), Å (197), Ă (258), Ą (260), Æ (198)
	201, 200, 202, 203, 274, 282, 276, 278, 280,
	// É (201), È (200), Ê (202), Ë (203), Ē (274), Ě (282), Ĕ (276), Ė (278), Ę (280)
	205, 204, 206, 207, 296, 298, 300, 304, 302
	// Í (205), Ì (204), Î (206), Ï (207), Ĩ (296), Ī (298), Ĭ (300), İ (304), Į (302)
];
var lowercase_accent_characters_two_utf_8_array = [
	250, 249, 251, 252, 361, 363, 367, 365, 371, 369,
	// ú (250), ù (249), û (251), ü (252), ũ (361), ū (363), ů (367), ŭ (365), ų (371), ű (369)
	243, 242, 244, 246, 245, 333, 335, 337, 248,
	// ó (243), ò (242), ô (244), ö (246), õ (245), ō (333), ŏ (335), ő (337), ø (248)
	339, 263, 265, 269, 267, 231, 271, 7691, 273
	// œ (339), ć (263), ĉ (265), č (269), ċ (267), ç (231), ď (271), ḋ (7691), đ (273)
];
var uppercase_accent_characters_two_utf_8_array = [
	218, 217, 219, 220, 360, 362, 366, 364, 370, 368,
	// Ú (218), Ù (217), Û (219), Ü (220), Ũ (360), Ū (362), Ů (366), Ŭ (364), Ų (370), Ű (368)
	211, 210, 212, 214, 213, 332, 334, 336, 216,
	// Ó (211), Ò (210), Ô (212), Ö (214), Õ (213), Ō (332), Ŏ (334), Ő (336), Ø (216)
	338, 262, 264, 268, 266, 199, 270, 7690, 272
	// Œ (338), Ć (262), Ĉ (264), Č (268), Ċ (266), Ç (199), Ď (270), Ḋ (7690), Đ (272)	
];
var lowercase_accent_characters_three_utf_8_array = [
	501, 285, 287, 289, 291, 293, 295, 309, 7729, 311,
	// ǵ (501), ĝ (285), ğ (287), ġ (289), ģ (291), ĥ (293), ħ (295), ĵ (309), ḱ (7729), ķ (311)
	314, 318, 320, 316, 322, 324, 241, 328, 326,
	// ĺ (314), ľ (318), ŀ (320), ļ (316), ł (322), ń (324), ñ (241), ň (328), ņ (326)
	341, 345, 343, 347, 349, 353, 351, 537, 223
	// ŕ (341), ř (345), ŗ (343), ś (347), ŝ (349), š (353), ş (351), ș (537), ß (223)
];
var uppercase_accent_characters_three_utf_8_array = [ 
	500, 284, 286, 288, 290, 292, 294, 308, 7728, 310,
	// Ǵ (500), Ĝ (284), Ğ (286), Ġ (288), Ģ (290), Ĥ (292), Ħ (294), Ĵ (308), Ḱ (7728), Ķ (310)
	313, 317, 319, 315, 321, 323, 209, 327, 325,
	// Ĺ (313), Ľ (317), Ŀ (319), Ļ (315), Ł (321), Ń (323), Ñ (209), Ň (327), Ņ (325)
	340, 344, 342, 346, 348, 352, 350, 536, 7838
	// Ŕ (340), Ř (344), Ŗ (342), Ś (346), Ŝ (348), Š (352), Ş (350), Ș (536), ẞ (7838)
];
var lowercase_accent_characters_four_utf_8_array = [
	357, 355, 359, 7811, 373, 7813, 253, 7923, 375, 255,
	// ť (357), ţ (355), ŧ (359), ẃ (7811), ŵ (373), ẅ (7813), ý (253), ỳ (7923), ŷ (375), ÿ (255)
	378, 7825, 382, 380, 8288, 240, 254, 170, 186, 
	// ź (378), ẑ (7825), ž (382), ż (380), no break 8288, ð (240), þ (254), ª (170), º (186)
	8288, 8288, 8288, 8288, 8288, 8288, 8288, 8288, 8288
];
var uppercase_accent_characters_four_utf_8_array = [
	356, 354, 358, 7810, 372, 7812, 221, 7922, 374, 376,
	// Ť (356), Ţ (354), Ŧ (358), Ẃ (7810), Ŵ (372), Ẅ (7812), Ý (221), Ỳ (7922), Ŷ (374), Ÿ (376)
	377, 7824, 381, 379,  8288, 208, 222, 170, 186,
	// Ź (377), Ẑ (7824), Ž (381), Ż (379), no break (8288), Ð (208), Þ (222), ª (170), º (186)
	8288, 8288, 8288, 8288, 8288, 8288, 8288, 8288, 8288,
];

window.addEventListener("load", virtual_keyboard_set_up);

/*
virtual_keyboard_set_up function populates the arrays with the svg elements, handles switching keyboards based on mirror_text_type, and executes eventListener functions.
Executes automatically after the website loads.
*/
function virtual_keyboard_set_up() {
	//populate all key buttons array
	for (i = 0; i < 46; i++) {
		key_array[i] = document.getElementsByClassName("key_button_and_name")[i];
		key_button_array[i] = document.getElementsByClassName("key_button")[i];
	}
	//populate alphanumeric_puncutation key names arrays with lowrcase text
	for (i = 0; i < 28; i++) {
		mirrored_font_alphanumeric_punctuation_key_names_arrray[i] = document.getElementsByClassName("mirrored_font_key_name alphanumeric_punctuation")[i];
		mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_letter_comma_period_utf_8_array[i]); 
		mirrored_alphanumeric_punctuation_key_names_arrray[i] = document.getElementsByClassName("mirrored_key_name alphanumeric_punctuation")[i];
		mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_letter_comma_period_utf_8_array[i]); 
	}
 	//populate single state key names array
	for (i = 0; i < 4; i++) {
		mirrored_font_single_state_key_names_array[i] = document.getElementsByClassName("single_state_key_names mirrored_font_key_name")[i];
		mirrored_single_state_key_names_array[i] = document.getElementsByClassName("single_state_key_names mirrored_key_name")[i];
	}
	//populate two state key names array
	for (i = 0; i < 12; i++) {
		mirrored_font_two_state_key_names_array[i] = document.getElementsByClassName("two_state_key_names mirrored_font_key_name")[i];
		mirrored_two_state_key_names_array[i] = document.getElementsByClassName("two_state_key_names mirrored_key_name")[i];
	}
	//populate options key names arrays
	for (i = 0; i < 7; i++) {
		mirrored_font_option_key_names_array[i] = document.getElementsByClassName("option_key_names mirrored_font_key_name")[i];
		mirrored_option_key_names_array[i] = document.getElementsByClassName("option_key_names mirrored_key_name")[i];
	}

	//populate mirrored_font_key_name_array
	mirrored_font_key_name_array.push(mirrored_font_alphanumeric_punctuation_key_names_arrray);
	mirrored_font_key_name_array.push(mirrored_font_single_state_key_names_array);
	mirrored_font_key_name_array.push(mirrored_font_two_state_key_names_array);
	mirrored_font_key_name_array.push(mirrored_font_option_key_names_array);
	//populate mirrored_key_name_array
	mirrored_key_name_array.push(mirrored_alphanumeric_punctuation_key_names_arrray);
	mirrored_key_name_array.push(mirrored_single_state_key_names_array);
	mirrored_key_name_array.push(mirrored_two_state_key_names_array);
	mirrored_key_name_array.push(mirrored_option_key_names_array);

	mirror_text_type_selection();

	input("click"); //mouse click events
	input("touchend"); //touch screen events
	input("keydown"); //physical keyboard events

	document.addEventListener("keydown", function(event)  {
		if (event.defaultPrevented) {
			return; // Do nothing if event already handled
		}
		if (event.key == "Control" || event.key == "Alt" || event.key == "Shift"){
			toggle_button(event.target);
			modifier_key_pressed = true;
			event.preventDefault();
		}
	});

	document.addEventListener("keyup", function(event)  {
		if (event.defaultPrevented) {
			return; // Do nothing if event already handled
		}
		if (event.key == "Control" || event.key == "Alt" || event.key == "Shift") {
			toggle_button(event.target);
			modifier_key_pressed = false;
			event.preventDefault();
		}
	});

	//switch arrow key directions because the textarea is mirrored
    textarea_element.addEventListener("keydown", function(event) {
        if (event.defaultPrevented) {
			return; // Do nothing if event already handled
		}
        if (event.code == "ArrowLeft") {
            start = textarea_element.selectionStart;
            textarea_element.selectionEnd++;
            textarea_element.selectionStart = textarea_element.selectionEnd;
            event.preventDefault();
        }
        if (event.code == "ArrowRight") {
            end = textarea_element.selectionEnd;
			if (textarea_element.selectionStart > 0) {
				textarea_element.selectionStart--;
            } else if (textarea_element.selectionStart <= 0) {
				textarea_element.selectionStart = 0;
			}
            textarea_element.selectionEnd = textarea_element.selectionStart;
            event.preventDefault();
        }
		//Select with arrow keys
        if (event.code == "ArrowLeft" && modifier_key_pressed == true) {
            end = textarea_element.selectionEnd++;
            textarea_element.setSelectionRange(start, end);
            event.preventDefault();
        }
        if (event.code == "ArrowRight" && modifier_key_pressed == true) {
			if (textarea_element.selectionStart > 0) {
				start = textarea_element.selectionStart--;
            } else if (textarea_element.selectionStart <= 0) {
				start = 0;
			}
            textarea_element.setSelectionRange(start, end);
            event.preventDefault();
        }
    });
}

/*
mirror_text_type_selection function switches the keyboard text based on mirror_text_type.
Executes in vitual_keyboard_set_up.
*/
function mirror_text_type_selection() {
	if (previous_mirror_text_type != mirror_text_type) {
		//toggle visibility of alphabet key names
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].classList.toggle("hide");
			mirrored_alphanumeric_punctuation_key_names_arrray[i].classList.toggle("hide");
		}
		//toggle visibility of single state key names
		for (i = 0; i < 4; i++) {
			mirrored_font_single_state_key_names_array[i].classList.toggle("hide");
			mirrored_single_state_key_names_array[i].classList.toggle("hide");
		}
		//toggle visibility of two state key names
		for (i = 0; i < 12; i += 2) {
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

/*
input function gives each key its function for a given event type.
event_type parameter: accepts events in quotation such as "click" as arguments
Executes in vitual_keyboard_set_up.
*/
function input(event_type) {
	input_keyboard_options_with_one_state(0, event_type, "lowercase_alphabet"); //virtual_keyboard option 0; alphabet
	input_keyboard_options_with_two_states(1, event_type, "lowercase_accent_characters_one", 8, 9); //virtual_keyboard option 1; accent characters one
	input_keyboard_options_with_two_states(2, event_type, "lowercase_accent_characters_two", 10, 11); //virtual_keyboard option 2; accent characters two
	input_keyboard_options_with_one_state(3, event_type, "lowercase_accent_characters_three"); //virtual_keyboard option 3; accent characters three
	input_keyboard_options_with_one_state(4, event_type, "lowercase_accent_characters_four"); //virtual_keyboard option 4; accent characters four
	input_keyboard_options_with_two_states(5, event_type, "punctuation_numbers_one", 4, 5); //virtual_keyboard option 5; punctuation and numbers
	input_keyboard_options_with_two_states(6, event_type, "punctuation_numbers_two", 6, 7); //virtual_keyboard option 6; punctuation

	input_editing_keys(7, event_type, delete_function, "Delete"); //delete 
	input_character_keys(8, event_type, 0, "KeyQ") //q (113), Q (81), 1 (49)
	input_character_keys(9, event_type, 1, "KeyW"); //w (119), W (87), 2 (50)
	input_character_keys(10, event_type, 2, "KeyE"); //e (101), E (69), 3 (51)
	input_character_keys(11, event_type, 3, "KeyR"); //r (114), R (82), 4 (52)
	input_character_keys(12, event_type, 4, "KeyT"); //t (116), T (84), 5 (53)
	input_character_keys(13, event_type, 5, "KeyY"); //y (121), Y (89), 6 (54)
	input_character_keys(14, event_type, 6, "KeyU"); //u (117), U (85), 7 (55)
	input_character_keys(15, event_type, 7, "KeyI"); //i (105), I (73), 8 (56)
	input_character_keys(16, event_type, 8, "KeyO"); //o (111), O (79), 9 (57)
	input_character_keys(17, event_type, 9, "KeyP"); //p (112), P (80), 0 (48)
	input_editing_keys(18, event_type, backspace_function, "Backspace") //backspace
	
	input_whitespace_keys(19, event_type, 9, "Tab"); //horizonal tab (9)
	input_character_keys(20, event_type, 10, "KeyA"); //a (97), A (65), @ (64)
	input_character_keys(21, event_type, 11, "KeyS"); //s (115), S (83), # (35)
	input_character_keys(22, event_type, 12, "KeyD"); //d (100), D (68), $ (36)
	input_character_keys(23, event_type, 13, "KeyF"); //f (102), F (70), & (38)
	input_character_keys(24, event_type, 14, "KeyG"); //g (103), G (71), * (42)
	input_character_keys(25, event_type, 15, "KeyH"); //h (104), H (72), ( (40)
	input_character_keys(26, event_type, 16, "KeyJ"); //j (106), J (74), ) (41)
	input_character_keys(27, event_type, 17, "KeyK"); //k (107), K (75),' (39)
	input_character_keys(28, event_type, 18, "KeyL"); //l (108), L (76), " (34)
	input_whitespace_keys(29, event_type, 13, "Enter") //enter (13)

	input_caps_lock(30, event_type, 0, 1, 2, 3, "CapsLock"); //left caps lock
	input_character_keys(31, event_type, 19, "KeyZ"); //z (122), Z (90), % (37)
	input_character_keys(32, event_type, 20, "KeyX"); //x (120), X (88), - (45)
	input_character_keys(33, event_type, 21, "KeyC"); //c (99), C (67), + (43)
	input_character_keys(34, event_type, 22, "KeyV"); //v (118), V (86), = (61)
	input_character_keys(35, event_type, 23, "KeyB"); //b (98), B (66), / (47)
	input_character_keys(36, event_type, 24, "KeyN"); //n (110), N (78), semicolon (59)
	input_character_keys(37, event_type, 25, "KeyM"); //m (109), M (77), colon (59)
	input_character_keys(38, event_type, 26, "Comma"); //comma (44), exclamtion mark (33)
	input_character_keys(39, event_type, 27, "Period"); //full stop (46), question mark (63)
	input_caps_lock(40, event_type, 0, 1, 2, 3, "CapsLock"); //right caps lock

	input_keyboard_options_with_two_states(41, event_type, "punctuation_numbers_one", 4, 5); // punctuation numbers 
	input_keyboard_options_with_two_states(42, event_type, "punctuation_numbers_two", 6, 7);//punctuation 2
	input_whitespace_keys(43, event_type, 32, "Space"); //space (32)
	input_keyboard_options_with_two_states(44, event_type, "lowercase_accent_characters_one", 8, 9); //accent chars
	input_keyboard_options_with_two_states(45, event_type, "lowercase_accent_characters_two", 10, 11); //accent chars 2	
}

/*
input_keyboard_options_with_one_state function adds the event listener to reset the keyboard option keys to their initial state and switch the virtual keyboard to the given keyboard option.
key_array_index parameter: given index for key_array as a number
event_type parameter: passed from input function
given_virtual_keyboard_option paramter: given virtual keyboard option as a string
Executes when called in the input function.
*/
function input_keyboard_options_with_one_state(key_array_index, event_type, given_virtual_keyboard_option) {
	key_array[key_array_index].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				virtual_keyboard_option = given_virtual_keyboard_option;
				virtual_keyboard_toggle_reset();
				switch_virtual_keyboard();
				textarea_element.focus();
			}
		} else {
			event.preventDefault();
			virtual_keyboard_option = given_virtual_keyboard_option;
			virtual_keyboard_toggle_reset();
			switch_virtual_keyboard();
			textarea_element.focus();
		}
	});
}

/* 
input_keyboard_options_with_two_states function adds the event listener to reset the keyboard option keys to their initial state and switch the virtual keyboard to the given keyboard option. The corresponding keyboard option key will toggle between key states that indicates what the keyboard can change to.
key_array_index parameter: given index for key_array as a number
event_type parameter: passed from input function
given_virtual_keyboard_option paramter: given virtual keyboard option as a string
first_state_index parameter: index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to initial state for the key
second_state_index parameter: index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to other state for the key
Executes when called in the input function.
*/
function input_keyboard_options_with_two_states(key_array_index, event_type, given_virtual_keyboard_option, first_state_index, second_state_index) {
	key_array[key_array_index].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				virtual_keyboard_toggle(first_state_index, second_state_index, given_virtual_keyboard_option);
				textarea_element.focus();
			}
		} else {
			event.preventDefault();
			virtual_keyboard_toggle(first_state_index, second_state_index, given_virtual_keyboard_option);
			textarea_element.focus();
		}
	});
}

/*
input_caps_lock function adds the event listener to switch the keyboard to its capitalized state if it has one.
key_array_index parameter: given index for key_array as a number
event_type parameter: passed from input function
first_state_index parameter: index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to initial state for the key
second_state_index parameter: index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to other state for the key
first_state_index_two parameter: second index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to initial state for the key because there are two keys that control capitalization
second_state_index_two parameter: second index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to other state for the key because there are two keys that control capitalization
Executes when called in the input function.
*/
function input_caps_lock(key_array_index, event_type, first_state_index, second_state_index, first_state_index_two, second_state_index_two, key_code) {
	key_array[key_array_index].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				capitalize_alphabet(first_state_index, second_state_index, first_state_index_two, second_state_index_two);
				textarea_element.focus();
			}
		} else {
			event.preventDefault();
			capitalize_alphabet(first_state_index, second_state_index, first_state_index_two, second_state_index_two);
			textarea_element.focus();
		}
	});

	document.addEventListener("keydown", function(event)  {
		if (event.defaultPrevented) {
			return; // Do nothing if event already handled
		}
		if (event.code == key_code && modifier_key_pressed == false) {
			toggle_button(event.target);
			key_button_array[30].classList.add("focus");
			key_button_array[40].classList.add("focus");
			setTimeout(function () {
				key_button_array[30].classList.remove("focus"); 
				key_button_array[40].classList.remove("focus");
			}, 250);
			capitalize_alphabet(first_state_index, second_state_index, first_state_index_two, second_state_index_two);
			event.preventDefault();
		}
	});
}

/*
input_whitespace_keys function adds the event listener to add character to textarea.
key_array_index parameter: given index for key_array as a number
event_type parameter: passed from input function
unicode parameter: unicode decimal code for character
key_code paramter: physical key code for physical keyboard use
Executes when called in the input function.
*/
function input_whitespace_keys(key_array_index, event_type, unicode, key_code) {
	key_array[key_array_index].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				add_character_move_cursor(String.fromCharCode(unicode));
			}
		} else {
			event.preventDefault();
			add_character_move_cursor(String.fromCharCode(unicode));
		}
	});

	document.addEventListener("keydown", function(event)  {
		if (event.defaultPrevented) {
			return; // Do nothing if event already handled
		}
		if (event.code == key_code && document.getElementById("mirrored_textarea") == document.activeElement && modifier_key_pressed == false && key_code != "Tab") {
			toggle_button(event.target);
			key_button_array[key_array_index].classList.add("focus");
			setTimeout(function () {key_button_array[key_array_index].classList.remove("focus");}, 250);
			add_character_move_cursor(String.fromCharCode(unicode));
			event.preventDefault();
		}
	});
}

/*
input_character_keys function adds the event listener to add character to textarea.
key_array_index parameter: given index for key_array as a number
event_type parameter: passed from input function
character_key_index parameter: index for character arrays that hold unicode decimal code for character
key_code paramter: physical key code for physical keyboard use
Executes when called in the input function.
*/
function input_character_keys(key_array_index, event_type, character_key_index, key_code) {
	key_array[key_array_index].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(character_key_index);
			}
		} else {
			event.preventDefault();
			edit_textarea(character_key_index);
		}
	});

	document.addEventListener("keydown", function(event)  {
		if (event.defaultPrevented) {
			return; // Do nothing if event already handled
		}
		if (event.code == key_code && modifier_key_pressed == false) {
			toggle_button(event.target);
			key_button_array[key_array_index].classList.add("focus");
			setTimeout(function () {key_button_array[key_array_index].classList.remove("focus");}, 250);
			edit_textarea(character_key_index);
			event.preventDefault();
		}
	});
}

/*
input_keyboard_options_with_two_states function adds the event listener to delete character(s).
key_array_index parameter: given index for key_array as a number
event_type parameter: passed from input function
edit_function parameter: function for the corresponding key
key_code paramter: physical key code for physical keyboard use
Executes when called in the input function.
*/
function input_editing_keys(key_array_index, event_type, edit_function, key_code) {
	key_array[key_array_index].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_function();
			}
		} else {
			event.preventDefault();
			edit_function();
		}
	});
	
	document.addEventListener("keydown", function(event)  {
		if (event.defaultPrevented) {
			return; // Do nothing if event already handled
		}
		if (event.code == key_code && modifier_key_pressed == false) {
			toggle_button(event.target);
			key_button_array[key_array_index].classList.add("focus");
			setTimeout(function () {key_button_array[key_array_index].classList.remove("focus");}, 250);
			edit_function();
			event.preventDefault();
		}
	});
}

/*
toggle_button function changes the aria-pressed attribute to true.
event_target parameter: takes event.target
Executes when specific physical keys are pressed down.
*/
function toggle_button(event_target) {
	var event_target_aria_pressed = event_target.getAttribute("aria-pressed");
	document.getElementById("introduction").innerHTML += "c " + event_target.getAttribute("aria-pressed");
	if (!event_target_aria_pressed) { //if false
		event_target_aria_pressed = true;
	} else {
		event_target_aria_pressed = false;
	}
	event_target.setAttribute("aria-pressed", event_target_aria_pressed);
	document.getElementById("introduction").innerHTML += " " + event_target.getAttribute("aria-pressed");
}

/*
edit_textarea function gets the element of a keyboard array that corresponds to the virtual_keyboard_option from the index parameter and decodes the element and passes returned output to add_character_move_cursor. It also resizes the textarea as needed.
index parameter: index of the keyboard arrays (arrays ending in utf_8_array); range: 0 - 27
Executes when character keys have been clicked on or pressed.
*/
function edit_textarea(index) {
	if (virtual_keyboard_option == "lowercase_alphabet") {
		add_character_move_cursor(String.fromCharCode(lowercase_letter_comma_period_utf_8_array[index]));
	} else if (virtual_keyboard_option == "uppercase_alphabet") {
		add_character_move_cursor(String.fromCharCode(uppercase_letter_comma_period_utf_8_array[index]));
	} else if (virtual_keyboard_option == "punctuation_numbers_one") {
		add_character_move_cursor(String.fromCharCode(punctuation_numbers_one_utf_8_array[index]));
	} else if (virtual_keyboard_option == "punctuation_numbers_two") {
		add_character_move_cursor(String.fromCharCode(punctuation_numbers_two_utf_8_array[index]));
	} else if (virtual_keyboard_option == "lowercase_accent_characters_one") {
		add_character_move_cursor(String.fromCharCode(lowercase_accent_characters_one_utf_8_array[index]));
	} else if (virtual_keyboard_option == "uppercase_accent_characters_one") {
		add_character_move_cursor(String.fromCharCode(uppercase_accent_characters_one_utf_8_array[index]));
	} else if (virtual_keyboard_option == "lowercase_accent_characters_two") {
		add_character_move_cursor(String.fromCharCode(lowercase_accent_characters_two_utf_8_array[index]));
	} else if (virtual_keyboard_option == "uppercase_accent_characters_two") {
		add_character_move_cursor(String.fromCharCode(uppercase_accent_characters_two_utf_8_array[index]));
	} else if (virtual_keyboard_option == "lowercase_accent_characters_three") {
		add_character_move_cursor(String.fromCharCode(lowercase_accent_characters_three_utf_8_array[index]));
	} else if (virtual_keyboard_option == "uppercase_accent_characters_three") {
		add_character_move_cursor(String.fromCharCode(uppercase_accent_characters_three_utf_8_array[index]));
	} else if (virtual_keyboard_option == "lowercase_accent_characters_four") {
		add_character_move_cursor(String.fromCharCode(lowercase_accent_characters_four_utf_8_array[index]));
	} else if (virtual_keyboard_option == "uppercase_accent_characters_four") {
		add_character_move_cursor(String.fromCharCode(uppercase_accent_characters_four_utf_8_array[index]));
	} 
	auto_resize();
	update_printable_table();
}

/*
capitalize_alphabet function selects the new keyboard option based on the virtual_keyboard_option to pass as an argument for virtual_keyboard_toggle.
first_state_index parameter: index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to initial state for the key
second_state_index parameter: index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to other state for the key
first_state_index_two parameter: second index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to initial state for the key because there are two keys that control capitalization
second_state_index_two parameter: second index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to other state for the key because there are two keys that control capitalization
Executes when one of the Caps Lock keys have been clicked on or pressed.
*/
function capitalize_alphabet(first_state_index, second_state_index, first_state_index_two, second_state_index_two) {
	if (virtual_keyboard_option == "lowercase_alphabet") {
		virtual_keyboard_toggle(first_state_index, second_state_index, "uppercase_alphabet", first_state_index_two, second_state_index_two);
	} else if (virtual_keyboard_option == "uppercase_alphabet") {
		virtual_keyboard_toggle(first_state_index, second_state_index, "lowercase_alphabet", first_state_index_two, second_state_index_two);
	} else if (virtual_keyboard_option == "lowercase_accent_characters_one") {
		virtual_keyboard_toggle(first_state_index, second_state_index, "uppercase_accent_characters_one", first_state_index_two, second_state_index_two);
	} else if (virtual_keyboard_option == "uppercase_accent_characters_one") {
		virtual_keyboard_toggle(first_state_index, second_state_index, "lowercase_accent_characters_one", first_state_index_two, second_state_index_two);
	} else if (virtual_keyboard_option == "lowercase_accent_characters_two") {
		virtual_keyboard_toggle(first_state_index, second_state_index, "uppercase_accent_characters_two", first_state_index_two, second_state_index_two);
	} else if (virtual_keyboard_option == "uppercase_accent_characters_two") {
		virtual_keyboard_toggle(first_state_index, second_state_index, "lowercase_accent_characters_two", first_state_index_two, second_state_index_two);
	} else if (virtual_keyboard_option == "lowercase_accent_characters_three") {
		virtual_keyboard_toggle(first_state_index, second_state_index, "uppercase_accent_characters_three", first_state_index_two, second_state_index_two);
	} else if (virtual_keyboard_option == "uppercase_accent_characters_three") {
		virtual_keyboard_toggle(first_state_index, second_state_index, "lowercase_accent_characters_three", first_state_index_two, second_state_index_two);
	} else if (virtual_keyboard_option == "lowercase_accent_characters_four") {
		virtual_keyboard_toggle(first_state_index, second_state_index, "uppercase_accent_characters_four", first_state_index_two, second_state_index_two);
	} else if (virtual_keyboard_option == "uppercase_accent_characters_four") {
		virtual_keyboard_toggle(first_state_index, second_state_index, "lowercase_accent_characters_four", first_state_index_two, second_state_index_two);
	} 
 }

 /*
virtual_keyboard_toggle switches the keyboard names for two state keys based on its states, then reassigns the virtual_keyboard_option to new_keyboard_option. Finally, it runs the given function.
first_state_index parameter: index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to initial state for the key
second_state_index parameter: index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to other state for the key
new_virtual_keyboard_option parameter: new virtual_keyboard_option; acceptable arguments in quotations: lowercase_alphabet, uppercase_alphabet, punctuation_numbers_one, punctuation_numbers_two, lowercase_accent_characters_one, uppercase_accent_characters_one, lowercase_accent_characters_two, uppercase_accent_characters_two,lowercase_accent_characters_three, uppercase_accent_characters_three,lowercase_accent_characters_four, uppercase_accent_characters_four
first_state_index_two parameter: second index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to initial state for the key because there are two keys that control capitalization
second_state_index_two parameter: second index for two state arrays (arrays ending in two_state_key_names_array) which corresponds to other state for the key because there are two keys that control capitalization
Executes when a two state key needs to be switched.
*/
function virtual_keyboard_toggle(first_state_index, second_state_index, new_virtual_keyboard_option, first_state_index_two, second_state_index_two) {
	var previous_key_state_second_state_index = mirrored_two_state_key_names_array[second_state_index].classList.contains("hide");
	virtual_keyboard_toggle_reset();
	if (mirror_text_type == "mirrored_font_text") {
		if (previous_key_state_second_state_index) { //second state contains class hide
			mirrored_font_two_state_key_names_array[first_state_index].classList.add("hide");
			mirrored_font_two_state_key_names_array[second_state_index].classList.remove("hide");
			if (first_state_index_two != null && second_state_index_two != null) {
				mirrored_font_two_state_key_names_array[first_state_index_two].classList.add("hide");
				mirrored_font_two_state_key_names_array[second_state_index_two].classList.remove("hide");
			}
		} else {
			mirrored_font_two_state_key_names_array[first_state_index].classList.remove("hide");
			mirrored_font_two_state_key_names_array[second_state_index].classList.add("hide");
			if (first_state_index_two != null && second_state_index_two != null) {
				mirrored_font_two_state_key_names_array[first_state_index_two].classList.remove("hide");
				mirrored_font_two_state_key_names_array[second_state_index_two].classList.add("hide");
			}
		}
	} else if (mirror_text_type == "mirrored_text") {
		if (previous_key_state_second_state_index) { //second state contains class hide
			mirrored_two_state_key_names_array[first_state_index].classList.add("hide");
			mirrored_two_state_key_names_array[second_state_index].classList.remove("hide");
			if (first_state_index_two != null && second_state_index_two != null) { 
				mirrored_two_state_key_names_array[first_state_index_two].classList.add("hide");
				mirrored_two_state_key_names_array[second_state_index_two].classList.remove("hide");
			}
		} else {
			mirrored_two_state_key_names_array[first_state_index].classList.remove("hide");
			mirrored_two_state_key_names_array[second_state_index].classList.add("hide");
			if (first_state_index_two != null && second_state_index_two != null) {
				mirrored_two_state_key_names_array[first_state_index_two].classList.remove("hide");
				mirrored_two_state_key_names_array[second_state_index_two].classList.add("hide");
			}
		}
	}
	if (virtual_keyboard_option != new_virtual_keyboard_option) {
		virtual_keyboard_option = new_virtual_keyboard_option;
	} else {
		virtual_keyboard_option = "lowercase_alphabet";
	}
	switch_virtual_keyboard();
}

/*
virtual_keyboard_toggle_reset function sets all two state key names back to their initial key name.
Executes in vitual_keyboard_toggle.
*/
function virtual_keyboard_toggle_reset() {
	//even indices are the first state, odd indices are the second state
	if (mirror_text_type == "mirrored_font_text") { 
		mirrored_font_two_state_key_names_array[0].classList.remove("hide");
		mirrored_font_two_state_key_names_array[1].classList.add("hide");
		mirrored_font_two_state_key_names_array[2].classList.remove("hide");
		mirrored_font_two_state_key_names_array[3].classList.add("hide");
		mirrored_font_two_state_key_names_array[4].classList.remove("hide");
		mirrored_font_two_state_key_names_array[5].classList.add("hide");
		mirrored_font_two_state_key_names_array[6].classList.remove("hide");
		mirrored_font_two_state_key_names_array[7].classList.add("hide");
		mirrored_font_two_state_key_names_array[8].classList.remove("hide");
		mirrored_font_two_state_key_names_array[9].classList.add("hide");
		mirrored_font_two_state_key_names_array[10].classList.remove("hide");
		mirrored_font_two_state_key_names_array[11].classList.add("hide");
	} else {
		mirrored_two_state_key_names_array[0].classList.remove("hide");
		mirrored_two_state_key_names_array[1].classList.add("hide");
		mirrored_two_state_key_names_array[2].classList.remove("hide");
		mirrored_two_state_key_names_array[3].classList.add("hide");
		mirrored_two_state_key_names_array[4].classList.remove("hide");
		mirrored_two_state_key_names_array[5].classList.add("hide");
		mirrored_two_state_key_names_array[6].classList.remove("hide");
		mirrored_two_state_key_names_array[7].classList.add("hide");
		mirrored_two_state_key_names_array[8].classList.remove("hide");
		mirrored_two_state_key_names_array[9].classList.add("hide");
		mirrored_two_state_key_names_array[10].classList.remove("hide");
		mirrored_two_state_key_names_array[11].classList.add("hide");
	}
}

/*
switch_virtual_keyboard function iterates through all character keys and changes the key names based on the virtual_keyboard_option. The key names come from the character keyboard arrays.
Executes when a new virtual_keyboard_option has been assigned.
*/
function switch_virtual_keyboard() {
	if (virtual_keyboard_option == "uppercase_alphabet") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_letter_comma_period_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_letter_comma_period_utf_8_array[i]); 
		}
	} else if (virtual_keyboard_option == "punctuation_numbers_one") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(punctuation_numbers_one_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(punctuation_numbers_one_utf_8_array[i]); 
		}
	} else if (virtual_keyboard_option == "punctuation_numbers_two") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(punctuation_numbers_two_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(punctuation_numbers_two_utf_8_array[i]); 
		}
	} else if (virtual_keyboard_option == "lowercase_accent_characters_one") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_one_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_one_utf_8_array[i]); 
		}
	} else if (virtual_keyboard_option == "uppercase_accent_characters_one") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_one_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_one_utf_8_array[i]); 
		}
	} else if (virtual_keyboard_option == "lowercase_accent_characters_two") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_two_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_two_utf_8_array[i]); 
		}
	} else if (virtual_keyboard_option == "uppercase_accent_characters_two") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_two_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_two_utf_8_array[i]); 
		}
	} else if (virtual_keyboard_option == "lowercase_accent_characters_three") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_three_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_three_utf_8_array[i]); 
		}
	} else if (virtual_keyboard_option == "uppercase_accent_characters_three") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_three_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_three_utf_8_array[i]); 
		}
	} else if (virtual_keyboard_option == "lowercase_accent_characters_four") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_four_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_four_utf_8_array[i]); 
		}
	} else if (virtual_keyboard_option == "uppercase_accent_characters_four") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_four_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_four_utf_8_array[i]); 
		}
	} else { //default: lowercase_alphabet
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_letter_comma_period_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_letter_comma_period_utf_8_array[i]); 
		}
	}
}

/*
add_character_move_cursor function inserts given string whereever the cursor is and moves the cursor after the inserted string. Then it focuses on the textarea to show where the cursor is and resizes the textarea as needed.
input_string parameter: a string that has been decoded from unicode
Executes in edit_textarea and when called for Tab, spacebar, and Enter.
*/
function add_character_move_cursor(input_string) {
	textarea_element.setRangeText(input_string, textarea_element.selectionStart, textarea_element.selectionEnd, "end");
	//textarea_element.focus();
	auto_resize();
	update_printable_table();
}

/*
backspace_function function replaces one character before the cursor or its selected string with an empty string. Then it focuses on the textarea to show where the cursor is and resizes the textarea as needed.
Executes when the Backspace key has been clicked on or pressed.
*/
function backspace_function() {
	var backspace_beginning_char = textarea_element.selectionStart;
	if (backspace_beginning_char > 0 && backspace_beginning_char == textarea_element.selectionEnd) {
		backspace_beginning_char--;
	}
	textarea_element.setRangeText("", backspace_beginning_char, textarea_element.selectionEnd, "end");
	textarea_element.focus();
	auto_resize();
	update_printable_table();
}

/*
delete_function function replaces one character after the cursor or its selected string with an empty string. Then it focuses on the textarea to show where the cursor is and resizes the textarea as needed.
Executes when the Delete key has been clicked on or pressed.
*/
function delete_function() {
	var delete_end_char = textarea_element.selectionEnd;
	if (delete_end_char < textarea_element.value.length && delete_end_char == textarea_element.selectionStart) {
		delete_end_char++;
	}
	textarea_element.setRangeText("", textarea_element.selectionStart, delete_end_char, "end");
	textarea_element.focus();
	auto_resize();
	update_printable_table(); 
}

/*
auto_resize function resizes the textarea height as needed.
Executes after the textarea has been edited.
*/
function auto_resize() {
    textarea_element.style.height = 'auto';
    textarea_element.style.height = textarea_element.scrollHeight + 'px';
}

/*
update_printable_table function updates the print_formating table when the textarea value has been changed.
Executes after the textarea has been edited.
*/
function update_printable_table() {
    document.getElementById("mirror_writing_printable_content").innerText = textarea_element.value;
}
