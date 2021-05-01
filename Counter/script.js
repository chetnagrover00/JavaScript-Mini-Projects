var counter = document.querySelector("#counter");
var followers = document.querySelector("#followers");

let count = 1;
setInterval(() => {
    if (count < 500) {
        count++;
        counter.innerText = count + " +";
    }
}, 10)

setTimeout(() => {
    followers.innerText = "Connections on LinkedIn!";
}, 5500)
