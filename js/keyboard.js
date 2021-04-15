//28 keys for alphabet, numbers, and punctuation keys
var key_name_array = []; //text for all keys; 
var key_button_array = []; //button for all keys; 46 buttons
var key_array = []; //all keys, both names and button; 46 keys
var keyboard_option = "lowercase_alphabet"; //lowercase_alphabet, uppercase_alphabet, punctuation_numbers_one, punctuation_numbers_two, lowercase_accent_characters_one, uppercase_accent_characters_one, lowercase_accent_characters_two, uppercase_accent_characters_two,lowercase_accent_characters_three, uppercase_accent_characters_three,lowercase_accent_characters_four, uppercase_accent_characters_four,
var previous_mirror_text_type = "mirrored_text"; //previous mirror_text_type 
var mirror_text_type = "mirrored_text"; //mirrored_text, mirrored_font_text

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

//Alphabet Keys
var mirrored_font_alphanumeric_punctuation_key_names_arrray = []; //group alphanumeric_punctuation key names; 28 keys
var mirrored_alphanumeric_punctuation_key_names_arrray = []; //group alphanumeric_punctuation key names; 28 keys

var lowercase_letter_comma_period_utf_8_array = [
	46, 44, 109, 110, 98, 118, 99, 120, 122,
	// . (46), , (44), m (109), n (110), b (98), v (118), c (99), x (120), z (122)
	108, 107, 106, 104, 103, 102, 100, 115, 97,
	// l (108),  k (107), j (106), h (104), g (103), f (102), d (100), s (115), a (97)
	112, 111, 105, 117, 121, 116, 114, 101, 119, 113
	// p (112), o (111), i (105), u (117), y (121), t (116), r (114), e (101), w (119), q (113)
];

var uppercase_letter_comma_period_utf_8_array = [ 
	63, 33, 77, 78, 66, 86, 67, 88, 90, 
	// ? (63), ! (33), M (77), N (78), B (66), V (86), C (67), X (88), Z (90)
	76, 75, 74, 72, 71, 70, 68, 83, 65,
	// L (76), K (75), J (74), H (72), G (71), F (70), D (68), S (83), A (65)
	80, 79, 73, 85, 89, 84, 82, 69, 87, 81
	// P (80), O (79), I (73), U (85), Y (89), T (84), R (82), E (69), W (87), Q (81)
];

var punctuation_numbers_one_utf_8_array = [ 
	63, 33, 58, 59, 47, 61, 43, 45, 37, 
	// ? (63), ! (33), : (58), ; (59), / (47), = (61), + (43), - (45), % (37)
	34, 39, 41, 40, 42, 38, 36, 35, 64, 
	// " (34), ' (39), ) (41),  ( (40), * (42), & (38), $ (36), # (35), @ (64)
	48, 57, 56, 55, 54, 53, 52, 51, 50, 49
	// 0 (48), 9 (57), 8 (56), 7 (55), 6 (54), 5 (53), 4 (52), 3 (51), 2 (50), 1 (49)
];

var punctuation_numbers_two_utf_8_array = [ ];

var lowercase_accent_characters_one_utf_8_array = [
	303, 105, 301, 299, 297, 239, 238, 236, 237,
	//į (302), i (105), ĭ (301), ī (299), ĩ (297), ï (239), î (238), ì (236), í (237)
	281, 279, 277, 283, 275, 235, 234, 232, 233, 
	//ę (281), ė (279), ĕ (277), ě (283), ē (275), ë (235), ê (234), è (232), é (233)
	230, 261, 259, 229, 257, 227, 228, 226, 224, 225
	//æ (230), ą (261), ă (259), å (229), ā (257), ã (227), ä (228), â (226), à (224), á (225)
];

var uppercase_accent_characters_one_utf_8_array = [
	302, 304, 300, 298, 296, 207, 206, 204, 205,
	//Į (303), İ (304), Ĭ (300), Ī (298), Ĩ (296), Ï (207), Î (206), Ì (204), Í (205)
	280, 278, 276, 282, 274, 203, 202, 200, 201,
	//Ę (280), Ė (278), Ĕ (276), Ě (282), Ē (274), Ë (203), Ê (202), È (200), É (201)
	198, 260, 258, 197, 256, 195, 196, 194, 192, 193
	//Æ (198), Ą (260), Ă (258), Å (197), Ā (256), Ã (195), Ä (196), Â (194), À (192), Á (193)
];

var lowercase_accent_characters_two_utf_8_array = [
	273, 7691, 271, 231, 267, 269, 265, 263, 339, 
	//đ (273), ḋ (7691), ď (271), ç (231), ċ (267), č (269), ĉ (265), ć (263), œ (339)
	248, 337, 335, 333, 245, 246, 244, 242, 243,
	//ø (248), ő (337), ŏ (335), ō (333), õ (245), ö (246), ô (244), ò (242), ó (243)
	369, 371, 365, 367, 363, 361, 252, 251, 249, 250
	//ű (369), ų (371), ŭ (365), ů (367), ū (363), ũ (361), ü (252), û (251), ù (249), ú (250)
];

var uppercase_accent_characters_two_utf_8_array = [
	272, 7690, 270, 199, 266, 268, 264, 262, 338,
	//Đ (272), Ḋ (7690), Ď (270), Ç (199), Ċ (266), Č (268), Ĉ (264), Ć (262), Œ (338)
	216, 336, 334, 332, 213, 214, 212, 210, 211,
	//Ø (216), Ő (336), Ŏ (334), Ō (332), Õ (213), Ö (214), Ô (212), Ò (210), Ó (211)
	368, 370, 364, 366, 362, 360, 220, 219, 217, 218
	//Ű (368), Ų (370), Ŭ (364), Ů (366), Ū (362), Ũ (360), Ü (220), Û (219), Ù (217), Ú (218)
];

var lowercase_accent_characters_three_utf_8_array = [
	223, 537, 351, 353, 349, 347, 343, 345, 341,
	//ß (223), ș (537), ş (351), š (353), ŝ (349), ś (347), ŗ (343), ř (345), ŕ (341)
	326, 328, 241, 324, 322, 316, 320, 318, 314,
	//ņ (326), ň (328), ñ (241), ń (324), ł (322), ļ (316), ŀ (320), ľ (318), ĺ (314)
	311, 7729, 309, 295, 293, 291, 289, 287, 285, 501
	//ķ (311), ḱ (7729), ĵ (309), ħ (295), ĥ (293), ģ (291), ġ (289), ğ (287), ĝ (285), ǵ (501)
];

var uppercase_accent_characters_three_utf_8_array = [ 
	7838, 536, 350, 352, 348, 346, 342, 344, 340,
	//ẞ (7838), Ș (536), Ş (350), Š (352), Ŝ (348), Ś (346), Ŗ (342), Ř (344), Ŕ (340)
	325, 327, 209, 323, 321, 315, 319, 315, 313,
	//Ņ (325), Ň (327), Ñ (209), Ń (323), Ł (321), Ļ (315), Ŀ (319), Ľ (317), Ĺ (313)
	310, 7728, 308, 294, 292, 290, 288, 286, 284, 500
	//Ķ (310), Ḱ (7728), Ĵ (308), Ħ (294), Ĥ (292), Ģ (290), Ġ (288), Ğ (286), Ĝ (284), Ǵ (500)
];

var lowercase_accent_characters_four_utf_8_array = [
	8288, 8288, 8288, 8288, 8288, 8288, 8288, 8288, 8288,  
	186, 170, 254, 240, 8288, 380, 382, 7825, 378, 
	// º (186), ª (170), þ (254), ð (240), no break 8288, ż (380), ž (382), ẑ (7825), ź (378)
	255, 375, 7923, 253, 7813, 373, 7811, 359, 355, 357
	//ÿ (255), ŷ (375), ỳ (7923), ý (253), ẅ (7813), ŵ (373), ẃ (7811), ŧ (359), ţ (355), ť (357)
];

var uppercase_accent_characters_four_utf_8_array = [
	8288, 8288, 8288, 8288, 8288, 8288, 8288, 8288, 8288,
	186, 170, 222, 208,  8288, 379, 381, 7824, 377,
	// º (186), ª (170), Þ (222), Ð (208), no break (8288), Ż (379), Ž (381), Ẑ (7824), Ź (377)
	376, 374, 7922, 221, 7812, 372, 7810, 358, 354, 356
	//Ÿ (376), Ŷ (374), Ỳ (7922), Ý (221), Ẅ (7812), Ŵ (372), Ẃ (7810), Ŧ (358), Ţ (354), Ť (356)
];

window.addEventListener("load", keyboard_set_up);

function keyboard_set_up() {
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

	mouse_click_input();

	 
	//Debug 
	document.getElementById("introduction").innerHTML = "\n";
	for (i = 0; i < 14; i++) {
		document.getElementById("introduction").innerHTML += i + ". " + mirrored_two_state_key_names_array[i].textContent + "	";
	}
	document.getElementById("introduction").innerHTML += "\n"; 
}

function mirror_text_type_selection() {
	if (previous_mirror_text_type != mirror_text_type) {
		//toggle visibility of alphabet key names
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].classList.toggle("hide");
			mirrored_alphanumeric_punctuation_key_names_arrray[i].classList.toggle("hide");
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
		keyboard_toggle(0, 1, switch_keyboard, "lowercase_accent_characters_two");
	}); //accent chars 2
	key_array[1].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		keyboard_toggle(2, 3, switch_keyboard, "lowercase_accent_characters_one");
	}); //accent chars
	key_array[2].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		document.getElementById("mirrored_textarea").value += String.fromCharCode(32);
	}); //space (32)
	key_array[3].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		keyboard_toggle(4, 5, switch_keyboard, "punctuation_numbers_two");
	}); //punctuation 2
	key_array[4].addEventListener(event_type, function(event)  {
		event.preventDefault();
		keyboard_toggle(6, 7, switch_keyboard, "punctuation_numbers_one");
	}); //.?123
	key_array[5].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		shift_function();
	}); //right shift

	key_array[6].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(0);
	}); //full stop (46), question mark (63)
	key_array[7].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(1);
	}); //comma (44), exclamtion mark (33)
	key_array[8].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(2);
	}); //m (109), M (77), colon (59)
	key_array[9].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(3);
	}); //n (110), N (78), semicolon (59)
	key_array[10].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(4);
	}); //b (98), B (66), / (47)
	key_array[11].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(5);
	}); //v (118), V (86), = (61)
	key_array[12].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(6);
	}); //c (99), C (67), + (43)
	key_array[13].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(7);
	}); //x (120), X (88), - (45)
	key_array[14].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(8);
	}); //z (122), Z (90), % (37)

	key_array[15].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		shift_function();
	}); //left shift
	key_array[16].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		document.getElementById("mirrored_textarea").value += String.fromCharCode(13);
	}); //enter (13)

	key_array[17].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(9);
	}); //l (108), L (76), " (34)
	key_array[18].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(10);
	}); //k (107), K (75),' (39)
	key_array[19].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(11);
	}); //j (106), J (74), ) (41)
	key_array[20].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(12);
	}); //h (104), H (72), ( (40)
	key_array[21].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(13);
	}); //g (103), G (71), * (42)
	key_array[22].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(14);
	}); //f (102), F (70), & (38)
	key_array[23].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(15);
	}); //d (100), D (68), $ (36)
	key_array[24].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(16);
	}); //s (115), S (83), # (35)
	key_array[25].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(17);
	}); //a (97), A (65), @ (64)

	key_array[26].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		capitalize_alphabet(12, 13);
	}); //caps lock
	key_array[27].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		
	}); //backspace

	key_array[28].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(18);
	}); //p (112), P (80), 0 (48)
	key_array[29].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(19);
	}); //o (111), O (79), 9 (57)
	key_array[30].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(20);
	}); //i (105), I (73), 8 (56)
	key_array[31].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(21);
	}); //u (117), U (85), 7 (55)
	key_array[32].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(22);
	}); //y (121), Y (89), 6 (54)
	key_array[33].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(23);
	}); //t (116), T (84), 5 (53)
	key_array[34].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(24);
	}); //r (114), R (82), 4 (52)
	key_array[35].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(25);
	}); //e (101), E (69), 3 (51)
	key_array[36].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(26);
	}); //w (119), W (87), 2 (50)
	key_array[37].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		edit_textarea(27);
	}); //q (113), Q (81), 1 (49)

	key_array[38].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		document.getElementById("mirrored_textarea").value += String.fromCharCode(9);
	}); //horizonal tab (9)
	key_array[39].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		keyboard_toggle(4, 5, switch_keyboard, "punctuation_numbers_two");
	}); //keyboard option 6; punctuation
	key_array[40].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		keyboard_toggle(6, 7, switch_keyboard, "punctuation_numbers_one");
	}); //keyboard option 5; punctuation and numbers
	key_array[41].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		keyboard_option = "lowercase_accent_characters_four";
		keyboard_toggle_reset();
		switch_keyboard();
	}); //keyboard option 4; accent characters four
	key_array[42].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		keyboard_option = "lowercase_accent_characters_three";
		keyboard_toggle_reset();
		switch_keyboard();
	}); //keyboard option 3; accent characters three
	key_array[43].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		keyboard_toggle(0, 1, switch_keyboard, "lowercase_accent_characters_two");
	}); //keyboard option 2; accent characters two
	key_array[44].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		keyboard_toggle(2, 3, switch_keyboard, "lowercase_accent_characters_one");
	}); //keyboard option 1; accent characters one
	key_array[45].addEventListener(event_type, function(event)  {
		event.preventDefault(); 
		keyboard_option = "lowercase_alphabet";
		keyboard_toggle_reset();
		switch_keyboard();
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

function edit_textarea(index) {
	if (keyboard_option == "lowercase_alphabet") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(lowercase_letter_comma_period_utf_8_array[index]);
	} else if (keyboard_option == "uppercase_alphabet") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(uppercase_letter_comma_period_utf_8_array[index]);
	} else if (keyboard_option == "punctuation_numbers_one") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(punctuation_numbers_one_utf_8_array[index]);
	} else if (keyboard_option == "punctuation_numbers_two") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(punctuation_numbers_two_utf_8_array[index]);
	} else if (keyboard_option == "lowercase_accent_characters_one") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(lowercase_accent_characters_one_utf_8_array[index]);
	} else if (keyboard_option == "uppercase_accent_characters_one") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(uppercase_accent_characters_one_utf_8_array[index]);
	} else if (keyboard_option == "lowercase_accent_characters_two") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(lowercase_accent_characters_two_utf_8_array[index]);
	} else if (keyboard_option == "uppercase_accent_characters_two") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(uppercase_accent_characters_two_utf_8_array[index]);
	} else if (keyboard_option == "lowercase_accent_characters_three") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(lowercase_accent_characters_three_utf_8_array[index]);
	} else if (keyboard_option == "uppercase_accent_characters_three") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(uppercase_accent_characters_three_utf_8_array[index]);
	} else if (keyboard_option == "lowercase_accent_characters_four") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(lowercase_accent_characters_four_utf_8_array[index]);
	} else if (keyboard_option == "uppercase_accent_characters_four") {
		document.getElementById("mirrored_textarea").value += String.fromCharCode(uppercase_accent_characters_four_utf_8_array[index]);
	} 
}

function capitalize_alphabet(first_state_index, second_state_index) {
	if (keyboard_option == "lowercase_alphabet") {
		keyboard_toggle(first_state_index, second_state_index, switch_keyboard, "uppercase_alphabet");
	} else if (keyboard_option == "uppercase_alphabet") {
		keyboard_toggle(first_state_index, second_state_index, switch_keyboard, "lowercase_alphabet");
	} else if (keyboard_option == "lowercase_accent_characters_one") {
		keyboard_toggle(first_state_index, second_state_index, switch_keyboard, "uppercase_accent_characters_one");
	} else if (keyboard_option == "uppercase_accent_characters_one") {
		keyboard_toggle(first_state_index, second_state_index, switch_keyboard, "lowercase_accent_characters_one");
	} else if (keyboard_option == "lowercase_accent_characters_two") {
		keyboard_toggle(first_state_index, second_state_index, switch_keyboard, "uppercase_accent_characters_two");
	} else if (keyboard_option == "uppercase_accent_characters_two") {
		keyboard_toggle(first_state_index, second_state_index, switch_keyboard, "lowercase_accent_characters_two");
	} else if (keyboard_option == "lowercase_accent_characters_three") {
		keyboard_option = "uppercase_accent_characters_three";
		switch_keyboard();
	} else if (keyboard_option == "uppercase_accent_characters_three") {
		keyboard_option = "lowercase_accent_characters_three";
		switch_keyboard();
	} else if (keyboard_option == "lowercase_accent_characters_four") {
		keyboard_option = "uppercase_accent_characters_four";
		switch_keyboard();
	} else if (keyboard_option == "uppercase_accent_characters_four") {
		keyboard_option = "lowercase_accent_characters_four";
		switch_keyboard();
	}
 }

// var shift_toggle = false;
// function shift_function() {
// 	if (shift_toggle == false) {
// 		shift_toggle = true;
// 	} else {
// 		shift_toggle = false;
// 	}
// 	if (mirror_text_type == "mirrored_font_text") {
// 		// mirrored_font_two_state_key_names_array[8].classList.toggle("hide");
// 		// mirrored_font_two_state_key_names_array[9].classList.toggle("hide");
// 		mirrored_font_two_state_key_names_array[10].classList.toggle("hide");
// 		mirrored_font_two_state_key_names_array[11].classList.toggle("hide");
// 	} else {
// 		// mirrored_two_state_key_names_array[8].classList.toggle("hide");
// 		// mirrored_two_state_key_names_array[9].classList.toggle("hide");
// 		mirrored_two_state_key_names_array[10].classList.toggle("hide");
// 		mirrored_two_state_key_names_array[11].classList.toggle("hide");
// 	}

// 	capitalize_alphabet(8, 9);

// 	if (mirrored_font_two_state_key_names_array[9].classList.contains("hide") == false || mirrored_two_state_key_names_array[9].classList.contains("hide") == false) {
// 		document.addEventListener("click", function shift_capitalize(event) {
// 			shift_toggle = false;
// 			document.removeEventListener("click", shift_capitalize, true);
// 		}, true);
// 	}

// 	if (shift_toggle == false) {
// 		if (mirror_text_type == "mirrored_font_text") {
// 			// mirrored_font_two_state_key_names_array[8].classList.toggle("hide");
// 			// mirrored_font_two_state_key_names_array[9].classList.toggle("hide");
// 			mirrored_font_two_state_key_names_array[10].classList.toggle("hide");
// 			mirrored_font_two_state_key_names_array[11].classList.toggle("hide");
// 		} else {
// 			// mirrored_two_state_key_names_array[8].classList.toggle("hide");
// 			// mirrored_two_state_key_names_array[9].classList.toggle("hide");
// 			mirrored_two_state_key_names_array[10].classList.toggle("hide");
// 			mirrored_two_state_key_names_array[11].classList.toggle("hide");
// 		} 

// 		capitalize_alphabet(8, 9);
// 	}

// }

function keyboard_toggle(first_state_index, second_state_index, function_name, new_keyboard_option) {
	var previous_key_state_second_state_index = mirrored_two_state_key_names_array[second_state_index].classList.contains("hide");
	keyboard_toggle_reset();
	if (mirror_text_type == "mirrored_font_text" && (new_keyboard_option == "punctuation_numbers_one" || new_keyboard_option == "punctuation_numbers_two" || new_keyboard_option == "lowercase_accent_characters_one" || new_keyboard_option == "lowercase_accent_characters_two")) {
		if (previous_key_state_second_state_index) {
			mirrored_font_two_state_key_names_array[first_state_index].classList.add("hide");
			mirrored_font_two_state_key_names_array[second_state_index].classList.remove("hide");
		} else {
			mirrored_font_two_state_key_names_array[first_state_index].classList.remove("hide");
			mirrored_font_two_state_key_names_array[second_state_index].classList.add("hide");
		}
	} else if (mirror_text_type == "mirrored_text") {
		if (previous_key_state_second_state_index) {
			mirrored_two_state_key_names_array[first_state_index].classList.add("hide");
			mirrored_two_state_key_names_array[second_state_index].classList.remove("hide");
		} else {
			mirrored_two_state_key_names_array[first_state_index].classList.remove("hide");
			mirrored_two_state_key_names_array[second_state_index].classList.add("hide");
		}
	}
	if (keyboard_option != new_keyboard_option) {
		keyboard_option = new_keyboard_option;
	} else {
		keyboard_option = "lowercase_alphabet";
	}
	function_name();

}

function keyboard_toggle_reset() {
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
			mirrored_font_two_state_key_names_array[12].classList.remove("hide");
			mirrored_font_two_state_key_names_array[13].classList.add("hide");
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
			mirrored_two_state_key_names_array[12].classList.remove("hide");
			mirrored_two_state_key_names_array[13].classList.add("hide");
		}
}

function switch_keyboard() {
	if (keyboard_option == "uppercase_alphabet") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_letter_comma_period_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_letter_comma_period_utf_8_array[i]); 
		}
	} else if (keyboard_option == "punctuation_numbers_one") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(punctuation_numbers_one_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(punctuation_numbers_one_utf_8_array[i]); 
		}
	} else if (keyboard_option == "punctuation_numbers_two") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(punctuation_numbers_two_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(punctuation_numbers_two_utf_8_array[i]); 
		}
	} else if (keyboard_option == "lowercase_accent_characters_one") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_one_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_one_utf_8_array[i]); 
		}
	} else if (keyboard_option == "uppercase_accent_characters_one") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_one_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_one_utf_8_array[i]); 
		}
	} else if (keyboard_option == "lowercase_accent_characters_two") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_two_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_two_utf_8_array[i]); 
		}
	} else if (keyboard_option == "uppercase_accent_characters_two") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_two_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_two_utf_8_array[i]); 
		}
	} else if (keyboard_option == "lowercase_accent_characters_three") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_three_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_three_utf_8_array[i]); 
		}
	} else if (keyboard_option == "uppercase_accent_characters_three") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_three_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(uppercase_accent_characters_three_utf_8_array[i]); 
		}
	} else if (keyboard_option == "lowercase_accent_characters_four") {
		for (i = 0; i < 28; i++) {
			mirrored_font_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_four_utf_8_array[i]); 
			mirrored_alphanumeric_punctuation_key_names_arrray[i].textContent = String.fromCharCode(lowercase_accent_characters_four_utf_8_array[i]); 
		}
	} else if (keyboard_option == "uppercase_accent_characters_four") {
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

