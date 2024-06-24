// Declaración de variables
let rectX; // Posición X del rectángulo
let rectY; // Posición Y del rectángulo
let ellX = 10; // Posición inicial X del círculo
let ellY = 10; // Posición inicial Y del círculo
let nz = 5; // Velocidad en dirección X del círculo
let xz = 5; // Velocidad en dirección Y del círculo
let colran = 0; // Variable para componente R del color del círculo
let colran2 = 0; // Variable para componente G del color del círculo
let bolTam = 40; // Tamaño inicial del círculo
let flag = 1; // Bandera para activar/desactivar la interacción con el mouse

// Función de configuración inicial
function setup() {
  createCanvas(700, 600);  // Crea un lienzo de 700x600 píxeles
}

// Función principal de dibujo que se ejecuta repetidamente
function draw() {
  background(200, 200, 200);  // Fondo gris claro
  
  // Dibuja el círculo con el color determinado por colran2, colran y 255 (azul)
  fill(colran2, colran, 255);
  ellipse(ellX, ellY, bolTam, bolTam);
  
  // Dibuja el rectángulo verde en la posición (rectX, rectY)
  fill(0, 255, 0);
  rect(rectX, rectY, 60, 60);
  
  // Lógica para hacer rebotar el círculo dentro del lienzo
  if (ellX < 0 || ellX > 700) {
    nz = nz * (-1);  // Invierte la dirección X del círculo al llegar a los bordes
    colorrandom();   // Cambia el color del círculo aleatoriamente
  }
  
  if (ellY < 0 || ellY > 600) {
    xz = xz * (-1);  // Invierte la dirección Y del círculo al llegar a los bordes
    colorrandom();   // Cambia el color del círculo aleatoriamente
  }
  
  if (ellY < 0) {
    bolTam -= 4;     // Reduce el tamaño del círculo si rebota en la parte superior
  }
  
  // Actualiza las posiciones del círculo según las velocidades nz y xz
  ellX = ellX + nz;
  ellY = ellY + xz;
  
  // Dibuja textos en la pantalla mostrando las posiciones del círculo y del rectángulo
  fill(0);
  text(ellY, 450, 200);
  text(ellX, 250, 200);
  text(rectX, 450, 400);
  text(rectY, 250, 400);
}

// Función para verificar y manejar la colisión entre el círculo y el rectángulo
function bouncing() {
  if (ellX > rectX && ellX < rectX + 60) {
    if (ellY > rectY && ellY < rectY + 60) {
      xz = xz * (-1);  // Invierte la dirección Y del círculo al colisionar
      nz = nz * (-1);  // Invierte la dirección X del círculo al colisionar
      bolTam += 4;     // Aumenta el tamaño del círculo al colisionar
    }
  }
}

// Función para cambiar aleatoriamente los componentes R y G del color del círculo
function colorrandom() {
  colran = int(random(0, 255));
  colran2 = int(random(0, 255));
}

// Función que se activa cuando se mueve el mouse
function mouseMoved() {
  if (flag === 1) {
    bouncing();     // Verifica la colisión entre el círculo y el rectángulo
  }
  rectX = mouseX - 30;  // Actualiza la posición X del rectángulo según la posición del mouse
  rectY = mouseY - 30;  // Actualiza la posición Y del rectángulo según la posición del mouse
}

// Función que se activa al presionar el botón del mouse
function mousePressed() {
  flag = 0;  // Desactiva la interacción del círculo con el rectángulo al presionar el mouse
}

// Función que se activa al soltar el botón del mouse
function mouseReleased() {
  flag = 1;  // Reactiva la interacción del círculo con el rectángulo al soltar el mouse
}
