/**
* @overview Here are the characteristics of the programm when you start it.
* The variable click has a false value until you press a button. That is where the
* magic begins.
*
* Also here is where the canvas (myPaintArea) is created and
* the functions save, restore and reset are defined
*/

/**
  * Stores what was drawn on the canvas as an image
  * @var drawingSurfaceImageData
  */

var drawingSurfaceImageData;

/**
  * In this variable will be stored the value of the button that was clicked
  * (which state is the programm curently on)
  * @var state
  */

var state;

/**
  * The initial value of "click"
  * @var click
  */
var click = false;

/**
  * Call to myPaintArea to create the canvas
  * @method create
  */

myPaintArea.create();

/**
  * Clears the object myPaintArea
  * @function reset
  */

function reset() {
  myPaintArea.clear();
}

/**
  * (Saves the whole surface of the canvas as an image)
  * Returns an ImageData object that copies the pixel data for the specified rectangle on a canvas
  * @var drawingSurfaceImageData
  * @function save
  * @method getImageData
  * @param {number} x The x position of the canvas element
  * @param {number} y The y position of the canvas element
  * @param {number} width The width of the canvas element
  * @param {number} height the height of the canvas element
  */

function save() {
  drawingSurfaceImageData = myPaintArea.context.getImageData(0, 0,
                              myPaintArea.canvas.width,
                              myPaintArea.canvas.height);

// When this function was executed, there will we shown "I am saving" in the console
  console.log("I am saving");
}

/**
  * (Restores the image that was last save on the canvas position x and y)
  * Puts the image data (from a specified ImageData object) back onto the canvas
  * @var drawingSurfaceImageData
  * @function restore
  * @method putImageData
  * @param {variable} drawingSurfaceImageData The variable that stores the drawing as an image
  * @param {number} x The x position of the canvas element
  * @param {number} y The y position of the canvas element
  */

function restore() {
  myPaintArea.context.putImageData(drawingSurfaceImageData, 0, 0);

// When this function was executed, there will we shown "I am restoring" in the console
  console.log("I am restoring");
}

  /*

  - function to print a rect filled with a color -

  function fillRect (startPosX,startPosY,endPosX,endPosY,color){
    myPaintArea.context.fillStyle = color;
    myPaintArea.context.fillRect(startPosX,startPosY,endPosX,endPosY);
    myPaintArea.context.rect(20, 20, 150, 100);
  }
  fillRect(200,0,150,200,"blue");

  - function to print a line -

  function line(startPosX,startPosY,endPosX,endPosY){
    myPaintArea.context.moveTo(startPosX,startPosY);
    myPaintArea.context.lineTo(endPosX,endPosY);
    myPaintArea.context.stroke();
  }

  line(0,0,400,600);

 - function  to print a circle -

  function circle(posX,posY){
    myPaintArea.context.beginPath();
    myPaintArea.context.arc(posX,posY,40,0,2*Math.PI);
    myPaintArea.context.stroke();
  }
  circle(100,500);


 - function to print a text -

  function text(text,posX, posY){
    myPaintArea.context.font = "30px Arial";
    myPaintArea.context.fillText(text,posX, posY);
  }
  text("Hola Mari :D",10,50);

  */
