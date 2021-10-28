/** @type {HTMLCanvasElement} */
const FPS = 30; //Frames per second
const SHIP_SIZE = 30  //Ancho de la nave en pixeles
var canvas = document.getElementById("gameCanvas")
var context = canvas.getContext("2d")

var ship = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  r: SHIP_SIZE / 2,
  a: 90 / 180 * Math.PI  //Convertir a radianes
}
//Configuracion del loop para el juego
setInterval(update, 1000 / FPS)

function update() {
  
  //Dibujar el espacio
  context.fillStyle='black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  

  //Dibujar la nave
  context.strokeStyle='white';
  context.lineWidth= SHIP_SIZE / 20;
  context.beginPath();
  context.moveTo( //Punta de la nave
    ship.x + ship.r * Math.cos(ship.a),
    ship.y - ship.r * Math.sin(ship.a)
  )
  context.lineTo( //Izquierda real
    ship.x - ship.r * (Math.cos(ship.a) + Math.sin(ship.a)),
    ship.y + ship.r * (Math.sin(ship.a) - Math.cos(ship.a))
  )
  context.lineTo( //Derecha real
    ship.x - ship.r * (Math.cos(ship.a) - Math.sin(ship.a)),
    ship.y + ship.r * (Math.sin(ship.a) + Math.cos(ship.a))
  )
  context.closePath(); 
  context.stroke();
  
  

  //Rotar la nave


  //Mover la nave



}