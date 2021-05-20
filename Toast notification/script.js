  
const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = "Hi, I am a Notification :)";

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 2000);
}