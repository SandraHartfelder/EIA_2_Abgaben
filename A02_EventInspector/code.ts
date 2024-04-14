window.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", setInfoBox);
    document.body.addEventListener("click", logInfo);

    let button = document.getElementById("customButton");
    button.addEventListener("click", customEvent);
});

function setInfoBox(event) {
    let x = event.pageX;
    let y = event.pageY;

    let tracker = document.getElementById("tracker");
    tracker.style.left = x + "px";
    tracker.style.top = y + "px";

    tracker.innerHTML = `Mouse position: (${x}, ${y})<br>Target: ${event.target.tagName}`;
}

function logInfo(event) {
    console.log(event.type);
    console.log(event.target);
}

function customEvent() {
    let customEvent = new CustomEvent("hello, how are you?", { bubbles: true }); 
    let button = document.getElementById("customButton");
    button.dispatchEvent(customEvent);
}

document.addEventListener("hello, how are you?", (event) => {
    console.log("Custom event: hello, how are you?");
});
