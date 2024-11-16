const canvas = document.getElementById("whiteboard");
const ctx = canvas.getContext("2d");

// set canvas to full window size
canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.7;

// brush settings
let painting = false;
let brushColor = document.getElementById("colorPicker").value;
let brushSize = document.getElementById("sizePicker").value;

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Event listeners for drawing
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

// Update brush color and size
document.getElementById("colorPicker").addEventListener("change", (e) => {
    brushColor = e.target.value;
});

document.getElementById("sizePicker").addEventListener("input", (e) => {
    brushSize = e.target.value;
});

// Clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
