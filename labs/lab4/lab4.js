window.onload = function () {


    var sendButton = document.getElementById("send");
    sendButton.setAttribute("disabled", "disabled");
    var width = document.search.width.value;
    var height = document.search.height.value;

    var color = document.search.color.value;
    var thickness = document.search.thickness.value;
    var addition = document.search.addition.value;
    let regWords = /^[a-zA-Z\s]+$/;


    let numHeight = Number(height);
    let numThickness = Number(thickness);
    let numWidth = Number(width);
    if (!(Number.isInteger(numThickness) == false || isEmpty(thickness)) && !(Number.isInteger(numHeight) == false || isEmpty(height)) && !(addition.search(regWords) == -1 || isEmpty(addition)) && !(Number.isInteger(numWidth) == false || isEmpty(width)) && !(color.search(regWords) == -1 || isEmpty(color))) {
        sendButton.removeAttribute("disabled");
    }



    function isEmpty(str) {
        if (typeof str === "undefined") {
            return true;
        }
        else if (str === null) {
            return true;
        }
        else if (str === "") {
            return true;
        }
        else if (str === NaN) {
            return true;
        }
        return false;
    }






    document.search.width.oninput = function () {
        width = document.search.width.value;
        let numWidth = Number(width);
        if (Number.isInteger(numWidth) == false || isEmpty(width)) {
            width = document.search.width.value;
            sendButton.setAttribute("disabled", "disabled");
            document.search.width.classList.add("error-style");
        }
        else {
            width = document.search.width.value;
            document.search.width.classList.remove("error-style");
            let numHeight = Number(height);
            let numThickness = Number(thickness);
            let numWidth = Number(width);
            if (!(Number.isInteger(numThickness) == false || isEmpty(thickness)) && !(Number.isInteger(numHeight) == false || isEmpty(height)) && !(addition.search(regWords) == -1 || isEmpty(addition)) && !(Number.isInteger(numWidth) == false || isEmpty(width)) && !(color.search(regWords) == -1 || isEmpty(color))) {
                sendButton.removeAttribute("disabled");
            }
        }
    }

    document.search.color.oninput = function () {
        color = document.search.color.value;

        if (color.search(regWords) == -1 || isEmpty(color)) {
            color = document.search.color.value;
            sendButton.setAttribute("disabled", "disabled");
            document.search.color.classList.add("error-style");
        }
        else {


            color = document.search.color.value;
            document.search.color.classList.remove("error-style");


            let numHeight = Number(height);
            let numThickness = Number(thickness);
            let numWidth = Number(width);
            if (!(Number.isInteger(numThickness) == false || isEmpty(thickness)) && !(Number.isInteger(numHeight) == false || isEmpty(height)) && !(addition.search(regWords) == -1 || isEmpty(addition)) && !(Number.isInteger(numWidth) == false || isEmpty(width)) && !(color.search(regWords) == -1 || isEmpty(color))) {
                sendButton.removeAttribute("disabled");
            }

        }
    }


    document.search.height.oninput = function () {
        height = document.search.height.value;
        let numHeight = Number(height);
        if (Number.isInteger(numHeight) == false || isEmpty(height)) {
            height = document.search.height.value;

            sendButton.setAttribute("disabled", "disabled");
            document.search.height.classList.add("error-style");
        }
        else {

            height = document.search.height.value;
            document.search.height.classList.remove("error-style");


            let numHeight = Number(height);
            let numThickness = Number(thickness);
            let numWidth = Number(width);
            if (!(Number.isInteger(numThickness) == false || isEmpty(thickness)) && !(Number.isInteger(numHeight) == false || isEmpty(height)) && !(addition.search(regWords) == -1 || isEmpty(addition)) && !(Number.isInteger(numWidth) == false || isEmpty(width)) && !(color.search(regWords) == -1 || isEmpty(color))) {
                sendButton.removeAttribute("disabled");
            }

        }
    }

    document.search.thickness.oninput = function () {
        thickness = document.search.thickness.value;
        let numThickness = Number(thickness);
        if (Number.isInteger(numThickness) == false || isEmpty(thickness)) {
            thickness = document.search.thickness.value;
            sendButton.setAttribute("disabled", "disabled");
            document.search.thickness.classList.add("error-style");
        }
        else {
            thickness = document.search.thickness.value;
            document.search.thickness.classList.remove("error-style");
            let numHeight = Number(height);
            let numThickness = Number(thickness);
            let numWidth = Number(width);
            if (!(Number.isInteger(numThickness) == false || isEmpty(thickness)) && !(Number.isInteger(numHeight) == false || isEmpty(height)) && !(addition.search(regWords) == -1 || isEmpty(addition)) && !(Number.isInteger(numWidth) == false || isEmpty(width)) && !(color.search(regWords) == -1 || isEmpty(color))) {
                sendButton.removeAttribute("disabled");
            }

        }
    }


    document.search.addition.oninput = function () {
        addition = document.search.addition.value;

        if (addition.search(regWords) == -1 || isEmpty(addition)) {
            addition = document.search.addition.value;

            document.search.addition.classList.add("error-style");
            sendButton.setAttribute("disabled", "disabled");
        }
        else {
            addition = document.search.addition.value;
            document.search.addition.classList.remove("error-style");
            let numHeight = Number(height);
            let numThickness = Number(thickness);
            let numWidth = Number(width);
            if (!(Number.isInteger(numThickness) == false || isEmpty(thickness)) && !(Number.isInteger(numHeight) == false || isEmpty(height)) && !(addition.search(regWords) == -1 || isEmpty(addition)) && !(Number.isInteger(numWidth) == false || isEmpty(width)) && !(color.search(regWords) == -1 || isEmpty(color))) {
                sendButton.removeAttribute("disabled");
            }
        }
    }







    sendButton.addEventListener("click", sendForm);
    function sendForm(e) {
        e.preventDefault();
        var homer = document.getElementById("homer"); {
            var newHeight = "height: " + height + "px;";
            var newWidth = "width: " + width + "px;";

            homer.setAttribute("style", newWidth + ";" + newHeight + ";border: " + thickness + "px solid " + color + ";");
            sendButton.setAttribute("disabled", "disabled");

        }
    }


}
