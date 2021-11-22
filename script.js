var canva = document.getElementById("draw_area");
var area = canva.getContext("2d");
var isPressed = false;
var x;
var y;
var thick = 3;
var color = "red";


canva.addEventListener("mousedown", mouseDown);
canva.addEventListener("mouseup", mouseUp);
canva.addEventListener("mousemove", mouseMove);
//document.addEventListener("mousemove", mouseDraw);

//Draw edges
draw("black", 0, 0, 0, 300, area);
draw("black", 0, 300, 300, 300, area);
draw("black", 300, 300, 300, 0, area);
draw("black", 300, 0, 0, 0, area);

function draw(color, xi, yi, xf, yf, c){
    c.beginPath(); 
    c.strokeStyle = color;
    c.lineWidth = thick; 
    c.moveTo(xi, yi); 
    c.lineTo(xf, yf); 
    c.stroke(); 
    c.closePath(); 
}

/*
function mouseDraw(event) {
    if (event.buttons == 1) {
        draw(color, x, y, event.layerX, event.layerY, area);
    }
    x = event.layerX;
    y = event.layerY;
} */


function mouseDown(event){
    isPressed = true;
    //console.log("x: "+ event.layerX);
    //console.log("y: "+ event.layerY);
    x = event.layerX;
    y = event.layerY;
}

function mouseMove(event){
    //console.log("move");
    if (isPressed) {
        draw(color, x, y, event.layerX, event.layerY, area);
        x = event.layerX;
        y = event.layerY;
    }else{
        x = event.layerX;
        y = event.layerY;
    }
}

function mouseUp(event){
    //console.log("up");
    isPressed = false;
}

