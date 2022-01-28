var mouse_event = "empty"
var last_position_of_x, last_position_of_y

canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
colour = "black";
width = 1;

canvas.addEventListener("mouse_down", mymouse_down)
function mymouse_down(e){
    colour = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouse_event = "mouse_down"

}

canvas.addEventListener("mouse_move", mymouse_move)

function mymouse_move(e){
    current_x = e.clientX-canvas.offsetLeft
    current_y = e.clientY-canvas.offsetTop
    if (mouse_event == "mouse_down"){
        ctx.beginPath()
        ctx.strokeStyle = colour;
        ctx.lineWidth  = width;
        console.log("last_position_of_x and y ="+last_position_of_x, last_position_of_y)
        ctx.moveTo(last_position_of_x, last_position_of_y)
        console.log("current position of x and y = "+current_x, current_y)
        ctx.lineTo(current_x, current_y)
        ctx.stroke()
    }

    last_position_of_x=current_x
    last_position_of_y=current_y
}

canvas.addEventListener("mouse_up", mymouse_up)

function mymouse_up(e){
    mouse_event = "mouse_up"
}

canvas.addEventListener("mouse_leave", mymouse_leave)

function mymouse_leave(e){
    mouse_event = "mouse_leave"
}

function clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}