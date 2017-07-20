
/**
* @overview With help of jquery we defined our DOM elements so they are it is easier to use them.
* They are defined at the beginning of the file as variables.
* The principal purpose of this file is to have the eventhandlers in a special space.
* Here is where they are defined and the statements and orders are given.
* Also is defined what happens when each button of the programm is clicked.
*/

/*
 * The selector refers to the DOM of the reset button. This selector will be stored in the variable
 * Example: The variable "$buttonReset" stores the selector "#buttonReset"
 * The next variables are declared in the same way
 */

var $buttonReset = $('#buttonReset');
var $buttonSave = $('#buttonSave');
var $buttonRestore = $('#buttonRestore');

//simplification of jquery selector
var $window = $(window);

var $buttonPencil = $('#buttonPencil');
var $buttonRectangle = $('#buttonRectangle');
var $buttonCircle = $('#buttonCircle');
var $buttonLine = $('#buttonLine');
var $buttonAvocado = $('#buttonAvocado');
var $buttonDownload = $('#buttonDownload');
var $fileUpload = $('#fileUpload');
var $canvas = $('#myCanvas');

// Here come the Event handlers

/**
  * Attaches a function to run when a mousedown event occurs (jquery function)
  * @function mousedown
  * @param {function} function Specifies the function to run when the mousedown event is triggered
  * @property window {object} This object represents the open window in the browser
  * @property mousedown {event} The event occurs when the left mouse button is pressed over the selected element
  */

// In this case it will be register that there was a click when a button element is pressed

$window.mousedown(function(){
  click = true;
});

/**
  * Attaches a function to run when a mouseup event occurs (jquery function)
  * @function mouseup
  * @param {function} function This is the attached function to the method mouseup
  * @property window {object} This object represents the open window in the browser
  * @property mouseup {event} The event occurs when the left mouse button is released over the selected element
  */

// When the botton is not pressed anymore, there will be register that there is not click anymore = false

$window.mouseup(function(){
  click = false;
});

/*
 * This mousedown attaches a function with an "e" paramater
 * The(e) parameter is for event. The "event" contains the event object
 */

$canvas.mousedown(function(e){

// The console prints "state is + the state the programm is actually on" in order to keep track if the function works or not
  console.log("state is " + state);

// If the state is "pencil" then it will be draw. The variable is define in the "objects.js" file
  if (state== "pencil"){

/**
  * Calls the funtions of the specific variable (defined on the "objects.js" file)
  * @function draw
  * @param {number} ePageX Returns the position of the mouse pointer, relative to the left edge of the document
  * @param {number} ePageY Returns the position of the mouse pointer, relative to the top edge of the document
  * @property event {event} The event parameter comes from the event binding function
  */
    pencil.draw(e.pageX, e.pageY);
  }
});

$canvas.mouseup(function(e){
  if (state== "pencil"){
    pencil.draw(e.pageX, e.pageY);
  }
});

/**
  * Attaches a function to run when a mousemove event occurs (jquery function) (The mousemove event occurs whenever the mouse pointer moves within the selected element)
  * @function mousemove
  * @param {function} function This is an attached function with an (e) parameter
  */

$canvas.mousemove(function(e){
  if(click === true){
    if (state== "pencil"){
      pencil.draw(e.pageX, e.pageY);
    }
  }
});

$canvas.mouseup(function(e) {
  if(click === true){
    if (state== "rectangle"){
      rectangle.draw(e.pageX, e.pageY);
    }
  }
});

$canvas.mouseup(function(e) {
  if(click === true){
    if (state== "circle"){
      circle.draw(e.pageX, e.pageY);
    }
  }
});

$canvas.mouseup(function(e) {
  if(click === true){
    if (state== "avocado"){
      avocado.draw(e.pageX, e.pageY);
    }
  }
});

/* This is the function that draws the line. (The start point)
 * The mouse will be pressed and it can be moved, when the mouse is realesed,
 * until this point (end point) the line will be draw.
 */

/**
  * It marks when a mouse button is pressed over an element (In this case the canvas)
  * @function onmousedown
  * @param {function} function The attached function goes trough the statements in the block and has the value of the event
  */

/* The attribute x1 (start of line on x-axis) of the variable line is the position of the mouse pointer, relative to the left edge of the document
 * minus the coordinates for the selected element (myCanvas) in the left position
 * The attribute y1 (start of line on y-axis) of the variable line is the position of the mouse pointer, relative to the top edge of the document
 * minus the coordinates for the selected element (myCanvas) in the top position
 */

myPaintArea.canvas.onmousedown = function (e) {
  if(state=="line") {
    line.x1 = e.pageX - $('#myCanvas').offset().left;
    line.y1 = e.pageY - $('#myCanvas').offset().top;
  }
};

/**
  * Marks when a user releases the mouse button over an element (in this case the canvas)
  * @function onmouseup
  * @param {function} function The attached function goes trough the statements in the block and has the value of the event
  */

/*
 * The x2 atributte (end of the line on the x-axis) of the variable line is the position of the mouse pointer (relative to the left edge)
 * minus the coordinates for the selected element (myCanvas) in the left position
 * The y2 atributte (end of the line on the y-axis) of the variable line is the position of the mouse pointer (relative to the top edge)
 * minus the coordinates for the selected element (myCanvas) in the top position
 */

myPaintArea.canvas.onmouseup = function (e) {
    if (state=="line") {
      line.x2 = e.pageX- $('#myCanvas').offset().left;
      line.y2 = e.pageY- $('#myCanvas').offset().top;
       line.draw();
    }
};

/*
 * The selector of the button references the button in the canvas. When the specific button is clicked
 * the attached function with the event parameter will run the statements in the block.
 * It will be recognized in which state the programm is. First is given the state and
 * then it goes trough the if-loops (up) where the actions for the statement will be executed
 */

$buttonPencil.click(function(e){
    state = "pencil";
});

$buttonRectangle.click(function(e){
    state = "rectangle";
});

$buttonCircle.click(function(e){
    state = "circle";
});

$buttonLine.click(function(e){
    state = "line";
});

$buttonAvocado.click(function(e){
    state = "avocado";
});

/*
 * Here is the same only that this buttons executed a direct action, an order. (Anweisung)
 * Example: the save function (method) is called and excuted. It is defined in the "paint.js" file
 */

$buttonSave.click(function(e){
  save();
});

$buttonRestore.click(function(e){
  restore();
});

$buttonReset.click(function(e){
  reset();
});

/*
 * When the button download is clicked it uses the attached function to create a hyperreference of the canvas.
 * This canvas will be return trough the toDataURL function
 * The data is a string that represents an encoded URL containing the grabbed graphical data
 * The the data will be store in the href
 * Then it will be download to the computer with the name 'Paintvocado' in a png format.
 */

$buttonDownload.click(function() {
  this.href = $('#myCanvas')[0].toDataURL();
  this.download = 'Paintvocado.png';
});

var imageLoader = document.getElementById('fileUpload');
    imageLoader.addEventListener('change', handleImage, false);

/**
  * This function uploads the an image from the computer to the canvas
  * @function handleImage
  * @param {event} e short var reference for an event object which will be passed to event handlers.
  */

function handleImage(e) {
  console.log("am hochladen!");
  var reader = new FileReader();
  reader.onload = function(event){
      var img = new Image();

/*
 * Here is said to the programm were is the img going to be uploaded.
 * The onload event occurs when an object has been loaded.
 * The image will be put on the canvas through the drawImage function (parameters img, x, y)
 */

      img.onload = function(){
          myPaintArea.canvas.width = img.width;
          myPaintArea.canvas.height = img.height;
          myPaintArea.context.drawImage(img,0,0);
      }
      img.src = event.target.result;
  }

  reader.readAsDataURL(e.target.files[0]);
}
