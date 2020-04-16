

let timesOfScrolling = 1;

function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms) { }
}

window.onscroll = function () {
    if (window.pageYOffset / timesOfScrolling >= window.innerHeight) {

        let loaderNodes = document.getElementsByClassName('loader');
        if (loaderNodes) {
            for (let i = 0; i < loaderNodes.length; i++) {
                loaderNodes[i].remove();
            }
        }
        sleep(2000);
        getPhotki(25);
        timesOfScrolling++;
    }



}
window.onload = function () {

    getPhotki(50);
}
function getPhotki(amount) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://randomuser.me/api/?results=" + amount);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            return Promise.resolve(buildTheList(data));
        }
        else return Promise.reject("You have a problem!");
    }
}

function buildTheList(data) {
    let blockOf25;
    let k = 0;
    for (let i = 0; i < data.results.length / 5; i++) {

        if ((k) % 25 === 0 || k === 0) {

            blockOf25 = document.createElement("div");
            blockOf25.className = "blockOf25"
            let body = document.getElementsByTagName('body')[0];
            body.appendChild(blockOf25);
        }
        let div = document.createElement('div')
        blockOf25.appendChild(div);
        for (let j = 0; j < 5; j++) {
            k++
            let img = document.createElement('img');
            img.setAttribute("src", data.results[i * 5 + j].picture.large);
            div.appendChild(img);
        }
    }
    let loader = document.createElement("div");
    document.body.appendChild(loader);
    loader.className = "loader";

}