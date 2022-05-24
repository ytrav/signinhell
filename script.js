// Date thing

var today = new Date();
var dd = String(today.getDate() - 1).padStart(2, '0');
console.log(dd);
switch (dd) {
    case 01:
        dd = "1st";
        break;
    case 02:
        dd = "2nd";
        break;
    case 03:
        dd = "3rd";
        break;
    case 21:
        dd = "21st";
        break;
    case 22:
        dd = "22nd";
        break;
    case 23:
        dd = "23rd";
        break;
    case 31:
        dd = "31st";
        break;
    default:
        dd = dd + "th";
        break;
}

var mm = String(today.getMonth()).padStart(2, '0');
console.log(mm);
switch (mm) {
    case '00':
        mm = "January";
        break;
    case '01':
        mm = "February";
        break;
    case '02':
        mm = "March";
        break;
    case '03':
        mm = "April";
        break;
    case '04':
        mm = "May";
        break;
    case '05':
        mm = "June";
        break;
    case '06':
        mm = "July";
        break;
    case '07':
        mm = "August";
        break;
    case '08':
        mm = "September";
        break;
    case '09':
        mm = "October";
        break;
    case '10':
        mm = "November";
        break;
    case '11':
        mm = "December";
        break;
    default:
        mm = "January";
        break;
}

var yyyy = today.getFullYear(),
    yyyy2 = today.getFullYear() + 2;

today = mm + ' ' + dd + ' ' + yyyy;

document.getElementById("date").innerHTML = today;
document.getElementById("year").innerHTML = yyyy2;

var hasStarted = false;

var q = "q",
    a = "a",
    z = "z",
    r = "r",
    f = "f",
    v = "v",
    b = "b",
    y = "y",
    h = "h",
    n = "n",
    u = "u",
    j = "j",
    m = "m",
    i = "i",
    k = "k",
    o = "o",
    l = "l",
    p = "p",
    w = "w",
    s = "s",
    x = "x",
    e = "e",
    d = "d",
    t = "t",
    seven = "7",
    four = "4",
    one = "1",
    two = "2",
    eight = "8",
    five = "5",
    nine = "9",
    six = "6",
    three = "3",
    asterisk = "*",
    zero = "0";
var hash = "#";
 


// the torture begins

function start() {
    document.getElementById("field").style.display = "block";
    document.getElementById("butt").style.display = "none";
    // document.getElementById("kb").classList.add("torture");
    // document.getElementById("nb").classList.add("torture");
    hasStarted = true;

};


var capText = '';

function press(key) {
    if (hasStarted == true) {
        capText += key;
        if (capText.length > 12) {
            wrong();
            return;
        } else {
            document.getElementById("field").innerHTML = capText;
            if (capText == "2uff3rm0rt4l") {
                localStorage.setItem("success", "true");
                window.open("verified.html","_self");
            } else {
                return;
            }
        }
        
    } else {
        return;
    }
};

function wrong() {
    document.getElementById("field").style.display = "none";
    document.getElementById("butt").style.display = "none";
    document.getElementById("warning").style.display = "none";
    document.getElementById("wrong").style.display = "block";
    localStorage.setItem("success", "false");
};


// no cheating

function check() {
    if (localStorage.getItem("success") == "false") {
        wrong();
        return;
    } else {
        if (localStorage.getItem("success") == "true") {
            window.open("verified.html","_self");
            return;
        } else {
            return;
        }
    }
}

check();