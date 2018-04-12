/*eslint-env browser*/

//STEP 1
/*function letter(x) {
    "use strict";
    x = window.prompt("Type a word");
    return window.console.log(x.split("").sort().join(""));
}
letter();*/

//OR
/*function letter(x) {
    "use strict";
    return window.console.log(x.split("").sort().join(""));
}
letter("webmaster");*/


//STEP 2
/*function word(x) {
    "use strict";
    x = "the quick brown fox".split(" ");
    var i;
    for (i = 0; i < x.length; i += 1) {
        x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1);
    }
    return window.console.log(x.join(" "));
}
word();*/


//STEP 3
/*function string(x) {
    "use strict";
    x = "The quick brown fox";
    
    return window.console.log(x.match(/[aeiou]/g).length);
}
string();*/


//STEP 4
/*function randomChar(id) {
    "use strict";
    id = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var blank = "", i;
    
    for (i = 0; i < 8; i += 1) {
        blank += id.charAt(Math.floor(Math.random() * id.length));
    }
    return window.console.log(blank);
}
randomChar();*/


//STEP 5
/*function country(name) {
    "use strict";
    name = [];
    name[0] = "England";
    name[1] = "Spain";
    name[2] = "USA";
    name[3] = "Australia";
    
    var i, zero = 0, longestCountryName = "";
    for (i = 0; i < name.length; i += 1) {
        if (name[i].length > zero) {
            zero = name[i].length;
            longestCountryName = name[i];
        }
    }
    return window.console.log(longestCountryName);
}
country();*/