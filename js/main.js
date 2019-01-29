let app = new PIXI.Application({width: 256, height: 256});

//Add the canvas that Pixi automatically created for you to the HTML document

var newStyle = document.createElement("style");
var style = "* {padding: 0; margin: 0}";
newStyle.appendChild(document.createTextNode(style));
document.head.appendChild(newStyle);

document.body.appendChild(app.view);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);


//load an image and run the `setup` function when it's done
PIXI.loader
  .add("images/cat.png")
  .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

  //Create the cat sprite
  let cat = new PIXI.Sprite(PIXI.loader.resources["images/cat.png"].texture);
  
  //Add the cat to the stage
  app.stage.addChild(cat);
  cat.visible = false;
  cat.position.set(100,100);
  cat.scale.set(0.5,0.5);
  cat.rotation = Math.PI/2;
  cat.anchor.set(0,0);
}



