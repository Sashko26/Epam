
let isTimer = false;
let seconds = 0;
let minutes = 0;
let maxSeconds = 59;
let maxMinutes = 99;
let switcher = false;

let timer;
let timeScreen = $("#timeScreen");


function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms) { }
}

$('#reset').click(
    function () {
        if (isTimer == true) {
            isTimer = false;
            clearInterval(timer);
            seconds = 0;
            minutes = 0;
            let resStr = '0' + 0 + ':' + '0' + 0;
            timeScreen.text(`${resStr}`);
        }


    }
)

$("#switch").click(

    function () {

        console.log("mutel");
        if (isTimer == true) {
            isTimer = false;
            clearInterval(timer);
            console.log(switcher);
        }
        else {
            isTimer = true;
            console.log(switcher);
        }


        if (isTimer == true) {
            timer = setInterval(goTime, 1000)
        }


    }
)
function goTime() {



    if (minutes == 99 && seconds == 59) {
        minutes == 0;
        seconds == 0;
    }
    if (seconds < maxSeconds)
        seconds++;
    else if (seconds >= 59) {
        seconds = 0;
        minutes++;
    }

    let strSec = seconds;
    let strMin = minutes;
    if (strSec <= 9) {
        strSec = "0" + strSec;
    }
    if (strMin <= 9) {
        strMin = "0" + strMin;
    }
    let resStr = strMin + ':' + strSec;
    timeScreen.text(`${resStr}`);
}



let emailPattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
let regWords = /^[a-zA-Z\s]+$/;
let regName = /^[a-zA-Z]+$/;

window.onload = function () {



    let submit = $('#submit');
    let email = $('#email');
    let name = $("#name");
    let message = $("#message");
    let form = $("#form");
    let button = $("#getWorkers");
    console.log(name);


    // '${jsonData}' 

    $('#getWorkers').click(function () {


        console.log(moment());
        console.log(moment().isoWeeksInYear());
        console.log(moment().get('year'))


        let time = 9;
        let conc = "0" + time;
        console.log(conc);






        $.get("http://dummy.restapiexample.com/api/v1/employees", function (data) {
            let array = data.data;
            let jsonData = JSON.stringify(data.data, null, 4);
            $("ol").remove();
            let ol = $(`<ol></ol>`);
            ol.appendTo("body");
            for (let i = 0; i < array.length; i++) {
                let li = $(`<li>Name: ${array[i].employee_name}; Salary:${array[i].employee_salary}; Age:${array[i].employee_age}.  </li>`);
                li.appendTo("ol");
            }


            var now = moment();
            moment.lang('ru');
            console.log(now.format('dddd, MMMM DD YYYY'));



        })
    })

    form.submit(function () {
        message.val(message.val().trim());
    })


    email.bind('input', function () {
        console.log(email.val());
        if (email.val().search(emailPattern) == -1) {

            submit.attr("disabled", "disabled");
            email.attr("class", "error-style");
        }
        else {
            email.removeAttr("class");
            if (email.val().search(emailPattern) != -1 && name.val().search(regName) != -1 && message.val().search(regWords) != -1) {
                submit.removeAttr("disabled");
            }
        }

    })

    name.bind("input", function () {
        if (name.val().search(regName) == -1) {
            submit.attr("disabled", "disabled");
            name.attr("class", "error-style");
        }
        else {
            name.removeAttr("class");
            if (email.val().search(emailPattern) != -1 && name.val().search(regName) != -1 && message.val().search(regWords) != -1) {
                submit.removeAttr("disabled");
            }

        }

    })

    message.bind("input", function () {
        if (message.val().search(regWords) == -1 || !(message.val().trim())) {
            submit.attr("disabled", "disabled");
            message.attr("class", "error-style");
        }
        else {

            console.log(message.val().trim());
            message.removeAttr("class");
            if (email.val().search(emailPattern) != -1 && name.val().search(regName) != -1 && message.val().search(regWords) != -1) {
                submit.removeAttr("disabled");

            }
        }

    })



}