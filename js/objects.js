
/**
* @overview Here is where the objects for each tool are defined.
* The variables that are declared here, store the values that will be used
* by the eventhandlers when a button in the programm is clicked. These variables
* are used to know which action is clicked, the state.
*/

/**
  * Stores the values of the draw function and is define as an object tool.
  * This value will be used when the variable pencil is called.
  * The variable will be use when the button is click, that is defined
  * with an evenhandler function in the "evenHandlers.js" file
  * @var pencil
  */

var pencil = {

/**
  * This Method ---> draw: is declared as an atributte. It uses the following function to draw on the canvas (The whole canvas, x and y positions)
  * It will be use as a function --->. (draw();) in the "evenHandlers.js" file. To use the specific functions it will be use attached to a specific variable (in this case pencil)
  * @function function
  * @param {number} x The x position
  * @param {number} y The y positon
  */

  draw : function(xPos, yPos) {

/**
  * Permited to start the drawing
  * @function beginPath
  */

   myPaintArea.context.beginPath();

/**
  * Here will be stored the value (the color) that was set to fill the drawing.
  * @property fillStyle {value} input[color] given by the user
  */

   myPaintArea.context.fillStyle = $('input[type=color]').val();

/**
  * Sets the color to fill the drawing.
  * @function arc
  * @param {number} x The difference between the x position and offset position left (in the pixels)
  * @property offset {number} The offset method returns coordinates for a selected element (myCanvas) It returns an object with 2 properties; the top and left positions in pixels.
  * @param {number} y The difference between the y position and offset position top
  * @param {value} range The thickness that the user selects. This input is defined in the index (html file)
  * @param {number} sAngle	The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
  * @param {number} eAngle	The ending angle, in radians
  */

   myPaintArea.context.arc(xPos - $('#myCanvas').offset().left, yPos - $('#myCanvas').offset().top, $('input[type=range]').val(), 0, 2 * Math.PI);

/**
  * Fills the drawing (path) with the default color
  * @function fill
  */

   myPaintArea.context.fill();

/**
  * Ends the drawing (the path, closes the action)
  * @function closePath
  */

   myPaintArea.context.closePath();

   console.log(" Bin am malen!!! ");
 }
}

/** Here is where the rectangle object is defined
  * @var rectangle - Stores the values of the draw function.
  */

var rectangle = {
  draw : function(xPos, yPos) {
    myPaintArea.context.beginPath();
    myPaintArea.context.fillStyle = $('input[id=fuelfarbe]').val();

/** This creates the rectangle
  * @function fillRect
  * @param {number} x The difference between the x position and offset posintion left (in the pixels)
  * @param {number} y The difference between the y position and offset posintion top
  * @param {value} width The value (number) of the width that the user enters in the programm
  * @param {value} height The value (number) of the height that the user enters in the programm
  */

    myPaintArea.context.fillRect(xPos- $('#myCanvas').offset().left,yPos- $('#myCanvas').offset().top,$('input[id=width]').val(), $('input[id=height]').val());

/**
  * The tickness of the line given by the user will be stored in the variable
  * @property lineWidth {value} input[range] given by the user
  */

    myPaintArea.context.lineWidth=$('input[type=range]').val();
   console.log($('input[type=range]').val());

/**
  * The color of the margin of the figur that was given by the user will be stored in the variable
  * @property strokeStyle {value} input[strichfarbe] given by the user
  */

    myPaintArea.context.strokeStyle=$('input[id=strichfarbe]').val();

/**
  * Creates the rectangle
  * @param {number} x The difference between the x position and offset posintion left (in the pixels)
  * @param {number} y The difference between the y position and offset posintion top
  * @param {number} width The width that is given by the user in the input
  * @param {number} height The height that is given by the user in the input
  */

    myPaintArea.context.rect(xPos- $('#myCanvas').offset().left,yPos- $('#myCanvas').offset().top,$('input[id=width]').val(), $('input[id=height]').val());

/**
  * (Actually) draws the path that was defined
  * @function stroke
  */

    myPaintArea.context.stroke();

    myPaintArea.context.closePath();
   console.log(" Bin am rectangles malen!!! ");
 }
}

/** Here is where the circle object is defined
  * @var circle - Stores the values of the draw function.
  */

var circle = {
  draw : function(xPos, yPos) {
    myPaintArea.context.beginPath();
    myPaintArea.context.arc(xPos- $('#myCanvas').offset().left, yPos- $('#myCanvas').offset().top, $('input[id=width]').val(), 50, 0, 2 * Math.PI, false);
    myPaintArea.context.fillStyle = $('input[id=fuelfarbe]').val();
    myPaintArea.context.fill();
    myPaintArea.context.lineWidth=$('input[type=range]').val();
    myPaintArea.context.strokeStyle = $('input[id=strichfarbe]').val();
    myPaintArea.context.stroke();
   console.log(" Bin am circles malen!!! ");
 }
}

/** Here is where the avocado object is defined
  * @var avocado - Stores the values of the draw function.
  */

var avocado = {
  draw : function(xPos, yPos) {

 /*
  * drawing stores the Image object that is created
  */

    drawing = new Image();

// The drawing variable has this source (the image is save here)

    drawing.src = "img/avocado.png";

/**
  * Draws the image on the canvas
  * @function drawImage
  * @param {Image} drawing Specifies the Image element to use that is stored in the variable
  * @param {number} x The difference between the x position and offset posintion left that defines where to place the image on the canvas
  * @param {number} y The difference between the y position and offset posintion left that defines where to place the image on the canvas
  * @param {value} width The width of the image to use that is given by the user
  * @param {value} height The height of the image to use that is given by the user
  */
    myPaintArea.context.drawImage(drawing,xPos- $('#myCanvas').offset().left, yPos- $('#myCanvas').offset().top, $('input[id=width]').val(), $('input[id=height]').val() );

    console.log(" Bin am Avocados malen!!! ");
  }
}

/** Here is where the line object is defined
  * @var line - Stores the values of the draw function.
  */

var line = {

/**
  * This are the attributes that will be use to vrate the line
  * @property x1 {number} the start of the line on the x-axis
  * @property y1 {number} the start of the line on the y-axis
  * @property x2 {number} the end of the line on the x-axis
  * @property y2 {number} the end of the line on the y-axis
  */

  x1: "",
  y1: "",
  x2: "",
  y2: "",

  draw : function() {
    myPaintArea.context.beginPath();

/**
  * Moves a window's left and top edge to the specified coordinates
  * @function moveTo
  * @param {number} x horizontal coordinate to be moved to
  * @param {number} y vertical coordinate to be moved to
  */

    myPaintArea.context.moveTo(this.x1, this.y1);

/**
  * Adds a new point and creates a line to the point from the last specified point in the canvas
  * @function lineTo
  * @param {number} x The x-coordinate of where to create the line to (this for the specific action)
  * @param {number} y The y-coordinate of where to create the line to (this for the specific action)
  */

    myPaintArea.context.lineTo(this.x2, this.y2);

    myPaintArea.context.strokeStyle = $('input[id=strichfarbe]').val();
    myPaintArea.context.lineWidth=$('input[type=range]').val();
    myPaintArea.context.stroke();
  console.log(" Bin am lines malen!!! ");
  }
}
