
let Application = PIXI.Application,
loader = PIXI.loader,
resources = PIXI.loader.resources,
Sprite = PIXI.Sprite;
TextureCache = PIXI.utils.TextureCache;
Rectangle = PIXI.Rectangle;

let app = new Application({width: 256, height: 256});

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
loader
  .add("images/tileset.png")
  .load(setup);

  function setup() {

    //Create the `tileset` sprite from the texture
    let texture = TextureCache["images/tileset.png"];
  
    //Create a rectangle object that defines the position and
    //size of the sub-image you want to extract from the texture
    //(`Rectangle` is an alias for `PIXI.Rectangle`)
    let rectangle = new Rectangle(0, 0, 64, 64);
  
    //Tell the texture to use that rectangular section
    texture.frame = rectangle;
  
    //Create the sprite from the texture
    let rocket = new Sprite(texture);
  
    //Position the rocket sprite on the canvas
    rocket.x = 32;
    rocket.y = 32;
  
    //Add the rocket to the stage
    app.stage.addChild(rocket);
    
    //Render the stage   
    app.renderer.render(app.stage);
  }
  

