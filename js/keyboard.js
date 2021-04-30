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

	document.getElementById("introduction").innerHTML = " ";
	for (i = 0; i < 12; i++) {
		document.getElementById("introduction").innerHTML += i + ". " + mirrored_font_two_state_key_names_array[i].textContent + " ";
	}
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
	key_array[0].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				virtual_keyboard_option = "lowercase_alphabet";
				virtual_keyboard_toggle_reset();
				switch_virtual_keyboard();
			}
		} else {
			event.preventDefault();
			virtual_keyboard_option = "lowercase_alphabet";
			virtual_keyboard_toggle_reset();
			switch_virtual_keyboard();
		}
	}); //virtual_keyboard option 0; alphabet
	key_array[1].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				virtual_keyboard_toggle(8, 9, "lowercase_accent_characters_one");
			}
		} else {
			event.preventDefault();
			virtual_keyboard_toggle(8, 9, "lowercase_accent_characters_one");
		}
	}); //virtual_keyboard option 1; accent characters one
	key_array[2].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				virtual_keyboard_toggle(10, 11, "lowercase_accent_characters_two");
			}
		} else {
			event.preventDefault();
			virtual_keyboard_toggle(10, 11, "lowercase_accent_characters_two");
		}
	}); //virtual_keyboard option 2; accent characters two
	key_array[3].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				virtual_keyboard_option = "lowercase_accent_characters_three";
				virtual_keyboard_toggle_reset();
				switch_virtual_keyboard();
			}
		} else {
			event.preventDefault();
			virtual_keyboard_option = "lowercase_accent_characters_three";
			virtual_keyboard_toggle_reset();
			switch_virtual_keyboard();
		}
	}); //virtual_keyboard option 3; accent characters three
	key_array[4].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				virtual_keyboard_option = "lowercase_accent_characters_four";
				virtual_keyboard_toggle_reset();
				switch_virtual_keyboard();
			}
		} else {
			event.preventDefault();
			virtual_keyboard_option = "lowercase_accent_characters_four";
			virtual_keyboard_toggle_reset();
			switch_virtual_keyboard();
		}
	}); //virtual_keyboard option 4; accent characters four
	key_array[5].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				virtual_keyboard_toggle(4, 5, "punctuation_numbers_one");
			}
		} else {
			event.preventDefault();
			virtual_keyboard_toggle(4, 5, "punctuation_numbers_one");
		}
	}); //virtual_keyboard option 5; punctuation and numbers
	key_array[6].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				virtual_keyboard_toggle(6, 7, "punctuation_numbers_two");
			}
		} else {
			event.preventDefault();
			virtual_keyboard_toggle(6, 7, "punctuation_numbers_two");
		}
	}); //virtual_keyboard option 6; punctuation
	key_array[7].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				delete_function();
			}
		} else {
			event.preventDefault();
			delete_function();
		}
	}); //delete 
	
	key_array[8].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(0);
			}
		} else {
			event.preventDefault();
			edit_textarea(0);
		}
	}); //q (113), Q (81), 1 (49)
	key_array[9].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(1);
			}
		} else {
			event.preventDefault();
			edit_textarea(1);
		}
	}); //w (119), W (87), 2 (50)
	key_array[10].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(2);
			}
		} else {
			event.preventDefault();
			edit_textarea(2);
		}
	}); //e (101), E (69), 3 (51)
	key_array[11].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(3);
			}
		} else {
			event.preventDefault();
			edit_textarea(3);
		}
	}); //r (114), R (82), 4 (52)
	key_array[12].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(4);
			}
		} else {
			event.preventDefault();
			edit_textarea(4);
		}
	}); //t (116), T (84), 5 (53)
	key_array[13].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(5);
			}
		} else {
			event.preventDefault();
			edit_textarea(5);
		}
	}); //y (121), Y (89), 6 (54)
	key_array[14].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(6);
			}
		} else {
			event.preventDefault();
			edit_textarea(6);
		}
	}); //u (117), U (85), 7 (55)
	key_array[15].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(7);	
			}
		} else {
			event.preventDefault();
			edit_textarea(7);
		}
	}); //i (105), I (73), 8 (56)
	key_array[16].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(8);
			}
		} else {
			event.preventDefault();
			edit_textarea(8);
		}
	}); //o (111), O (79), 9 (57)
	key_array[17].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(9);
			}
		} else {
			event.preventDefault();
			edit_textarea(9);
		}
	}); //p (112), P (80), 0 (48)
	
	key_array[18].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				backspace_function();
			}
		} else {
			event.preventDefault();
			backspace_function();
		}
	}); //backspace
	key_array[19].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				add_character_move_cursor(String.fromCharCode(9));
			}
		} else {
			event.preventDefault();
			add_character_move_cursor(String.fromCharCode(9));
		}
	}); //horizonal tab (9)
	
	key_array[20].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(10);
			}
		} else {
			event.preventDefault();
			edit_textarea(10);
		}
	}); //a (97), A (65), @ (64)
	key_array[21].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(11);
			}
		} else {
			event.preventDefault();
			edit_textarea(11);
		}
	}); //s (115), S (83), # (35)
	key_array[22].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(12);
			}
		} else {
			event.preventDefault();
			edit_textarea(12);
		}
	}); //d (100), D (68), $ (36)
	key_array[23].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(13);
			}
		} else {
			event.preventDefault();
			edit_textarea(13);
		}
	}); //f (102), F (70), & (38)
	key_array[24].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(14);	
			}
		} else {
			event.preventDefault();
			edit_textarea(14);
		}
	}); //g (103), G (71), * (42)
	key_array[25].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(15);
			}
		} else {
			event.preventDefault();
			edit_textarea(15);
		}
	}); //h (104), H (72), ( (40)
	key_array[26].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(16);
			}
		} else {
			event.preventDefault();
			edit_textarea(16);
		}
	}); //j (106), J (74), ) (41)
	key_array[27].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(17);
			}
		} else {
			event.preventDefault();
			edit_textarea(17);
		}
	}); //k (107), K (75),' (39)
	key_array[28].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(18);
			}
		} else {
			event.preventDefault();
			edit_textarea(18);
		}
	}); //l (108), L (76), " (34)
	
	key_array[29].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				add_character_move_cursor(String.fromCharCode(13));
			}
		} else {
			event.preventDefault();
			add_character_move_cursor(String.fromCharCode(13));
		}
	}); //enter (13)
	key_array[30].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				capitalize_alphabet(0, 1, 2, 3);
			}
		} else {
			event.preventDefault();
			capitalize_alphabet(0, 1, 2, 3);
		}
	}); //left caps lock
	
	key_array[31].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(19);
			}
		} else {
			event.preventDefault();
			edit_textarea(19);
		}
	}); //z (122), Z (90), % (37)
	key_array[32].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(20);
			}
		} else {
			event.preventDefault();
			edit_textarea(20);
		}
	}); //x (120), X (88), - (45)
	key_array[33].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(21);
			}
		} else {
			event.preventDefault();
			edit_textarea(21);
		}
	}); //c (99), C (67), + (43)
	key_array[34].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(22);
			}
		} else {
			event.preventDefault();
			edit_textarea(22);
		}
	}); //v (118), V (86), = (61)
	key_array[35].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(23);
			}
		} else {
			event.preventDefault();
			edit_textarea(23);
		}
	}); //b (98), B (66), / (47)
	key_array[36].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(24);
			}
		} else {
			event.preventDefault();
			edit_textarea(24);
		}
	}); //n (110), N (78), semicolon (59)
	key_array[37].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(26);
			}
		} else {
			event.preventDefault();
			edit_textarea(26);
		}
	}); //m (109), M (77), colon (59)
	key_array[38].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(27);
			}
		} else {
			event.preventDefault();
			edit_textarea(27);
		}
	}); //comma (44), exclamtion mark (33)
	key_array[39].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				edit_textarea(0);
			}
		} else {
			event.preventDefault();
			edit_textarea(0);
		}
	}); //full stop (46), question mark (63)
	
	key_array[40].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				capitalize_alphabet(8, 9, 10, 11);
			}
		} else {
			event.preventDefault();
			capitalize_alphabet(8, 9, 10, 11);
		}
	}); //right caps lock
	key_array[41].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				virtual_keyboard_toggle(6, 7, "punctuation_numbers_one");
			}
		} else {
			event.preventDefault();
			virtual_keyboard_toggle(6, 7, "punctuation_numbers_one");
		}
	}); //.?123
	key_array[42].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				virtual_keyboard_toggle(4, 5, "punctuation_numbers_two");
			}
		} else {
			event.preventDefault();
			virtual_keyboard_toggle(4, 5, "punctuation_numbers_two");
		}
	}); //punctuation 2
	key_array[43].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				add_character_move_cursor(String.fromCharCode(32));
			}
		} else {
			event.preventDefault();
			add_character_move_cursor(String.fromCharCode(32));
		}
	}); //space (32)
	key_array[44].addEventListener(event_type, function(event)  {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				virtual_keyboard_toggle(2, 3, "lowercase_accent_characters_one");
			}
		} else {
			event.preventDefault();
			virtual_keyboard_toggle(2, 3, "lowercase_accent_characters_one");
		}
	}); //accent chars
	key_array[45].addEventListener(event_type, function(event) {
		if (event_type == "keydown" && document.getElementById("mirrored_textarea") != document.activeElement) {
			if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") {
				toggle_button(event.target);
				event.preventDefault();
				virtual_keyboard_toggle(0, 1, "lowercase_accent_characters_two");
			}
		} else {
			event.preventDefault();//takes care of multiple event listener inputs
			virtual_keyboard_toggle(0, 1, "lowercase_accent_characters_two");
		}
	}); //accent chars 2	
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
	textarea_element.focus();
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
