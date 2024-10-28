document.getElementById("h1").textContent = `Look up images`;

document.getElementById("txt-predict").addEventListener("keyup", search);

function search() {
    var img = document.getElementById("img-predict");
    const text = document.getElementById("txt-predict");
    switch(text.value) {
        case "bat":
            img.src = "images/bat.jpg";
            break;
        case "bird":
            img.src = "images/bird.jpg";
            break;
        case "cat":
            img.src = "images/cat.jpg";
            break;
        case "dog":
            img.src = "images/dog.jpg";
            break;
        case "mouse":
            img.src = "images/mouse.jpg";
            break;
        case "turtle":
            img.src = "images/turtle.jpg";
            break;
        default:
            img.src = "images/error.png";
            break;
    }
    
    var src = document.getElementById("img-predict");
    src.appendChild(img);
}