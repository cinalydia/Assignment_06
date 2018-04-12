/*eslint-env browser*/

//STEP 1 ????
/*function today() {
    "use strict";
    var month = d.getMonth();
    var day = d.getDay();
    var date = d.getDate();
    var year = d.getFullYear();
    
    window.console.log("Today is " + day + " " + month + " " + date + " " + year);
    
    window.console.log(date - date + 1);
    
    var first = date - date + 1;
    var todayDate = first + date - 1;
    //How to count the difference b/w the two?
    var difference = todayDate - first;
}
today();*/


//STEP 2 ???
/*function monthName() {
    "use strict";
    var enterDate = window.prompt("Enter a date: xx/xx/xxxx");
    var monthPart = enterDate.split("/")[0];
    
    function monthDate() {
        var month;
        switch (d.getDay()) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
        }
        window.console.log("It is " + month);
    }
    monthDate();
    
    if (monthDate) {
        
    }
    //window.console.log(monthPart);
    
   //window.console.log(enterDate.split("/")[0]);
}
monthName();*/


//STEP 3
/*function weekend() {
    "use strict";
    var day = d.getDay();
    if (day === 6 || 0) {
        window.console.log("It's the weekend!");
    } else {
        window.console.log("It's not yet the weekend...");
    }
}
weekend();*/


//STEP 4
/*function yesterday() {
    "use strict";
    var newDate = new Date("4/12/18");
    var monthDate = newDate.getDate();
    newDate.setDate(monthDate - 1);
    window.console.log(newDate);
}
yesterday();*/


//STEP 5
/*function dayOfWk() {
    "use strict";
    var days;
    switch (d.getDay()) {
    case 0:
        days = "Sunday";
        break;
    case 1:
        days = "Monday";
        break;
    case 2:
        days = "Tuesday";
        break;
    case 3:
        days = "Wednesday";
        break;
    case 4:
        days = "Thursday";
        break;
    case 5:
        days = "Friday";
        break;
    case 6:
        days = "Saturday";
        break;
    }
    
    window.console.log("Today is " + days.charAt(0));
}
dayOfWk();*/