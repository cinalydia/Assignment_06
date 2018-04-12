/*eslint-env browser*/

//STEP 1
/*var name = window.prompt("What is your name?");
window.alert(name.length);*/

//STEP 2
/*var name = window.prompt("What is your name?");
var num = window.prompt("Pick a number to get a letter...");
window.alert(name.charAt(num));*/

//STEP 3
/*var firstName = window.prompt("What is your first name?");
var lastName = window.prompt("What is your last name?");
window.alert("Your name is " + firstName + " ".concat(lastName));*/

//STEP 4
/*var text = "The quick brown fox jumps over the lazy dog";
window.alert(text.indexOf("fox"));*/

//STEP 5
/*var text = "The quick brown fox jumps over the lazy fox";
window.alert(text.lastIndexOf("fox"));*/

//STEP 6
/*var text = "The quick brown fox jumps over the lazy dog";
var fullName = window.prompt("What is your full name?");
window.alert(text.replace("the lazy dog", fullName));*/

//STEP 7
/*var text = "The quick brown fox jumps over the lazy dog";
var word = window.prompt("Type a word");
window.alert(text.search(word));*/

//STEP 8
/*var old_string = "The quick brown fox jumps over the lazy dog";
var new_string = old_string.slice(30, 43);
window.alert(new_string.toLowerCase());*/

//STEP 9
/*var text = "         THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG         ";
window.alert(text.trim().toLowerCase());*/

//STEP 10
/*var text = "the quick brown fox jumps over the lazy fox";

if (text.slice(0, 1) !== text.toUpperCase()) {
    window.alert(text.replace(text.slice(0, 1).toLowerCase(), text.slice(0, 1).toUpperCase()));
}*/