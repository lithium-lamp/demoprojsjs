

function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}

function dropHandler(ev) {
    ev.preventDefault();

    const data = ev.dataTransfer.getData("application/my-app");
    ev.target.appendChild(document.getElementById(data));

    alert(ev.offsetX + " " + ev.offsetY);
}

function dragstartHandler(ev) {
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";

    /*
    ev.dataTransfer.setData("text/plain", ev.target.innerText);
    ev.dataTransfer.setData("text/html", ev.target.outerHTML);
    ev.dataTransfer.setData(
        "text/uri-list",
        ev.target.ownerDocument.location.href,
    );
    ev.dataTransfer.dropEffect = "copy";
    */
}

window.addEventListener("DOMContentLoaded", () => {
    let demo1 = document.getElementById("demo1");

    const buoyElement = document.createElement("div");
    buoyElement.id = "buoy";
    buoyElement.draggable = "true";
    buoyElement.ondrop = "dropHandler(event)";
    buoyElement.ondragover = "dragoverHandler(event)";

    buoyElement.style.left = 150 - 15+'px';
    buoyElement.style.top = 150 - 15+'px';

    demo1.appendChild(buoyElement);

    buoyElement.addEventListener("dragstart", dragstartHandler);
});


