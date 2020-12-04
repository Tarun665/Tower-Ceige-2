const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const mousey = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

let polygon;
let ground;
let ground2;
let ground3;
let rope;
let boxes = [];
let lin;
let m = 0;
let l = 0;

function preload()
{
	
}

function setup() {
	let canvas = createCanvas(1518, 700);
	engine = Engine.create();
	world = engine.world;

	polygon = new Polygon(200,height/3,50);
	ground = new Ground(width/2,height-15,width,35);
	ground2 = new Ground(650,350,350,15);
	ground3 = new Ground(1250,450,250,15);
	var canvasM = Mouse.create(canvas.elt);
	canvasM.pixelRatio = pixelDensity();
	let options = {
		//body:polygon.body,
		mouse: canvasM
	
	}
	// polygon.mouseOver(remove1);
	mousec = mousey.create(engine, options);
	World.add(world,mousec);
	rope = new SlingShot(polygon.body,{x:200,y:height/3});
	
	for(let i=500;i < 850;i = i+50){
		boxes.push(new Box(i,300,50,80,"lightBlue"));
	   
	}
	for(let i=550;i < 800;i = i+50){
		boxes.push(new Box(i,230,50,80,"pink"));
	   
	}
	for(let i=600;i < 750;i = i+50){
		boxes.push(new Box(i,160,50,80,"lightsalmon"));
	   
	} 
	boxes.push(new Box(650,80,50,80,"gray"));

	for(let i=1150;i < 1400;i = i+50){
		boxes.push(new Box(i,400,50,80,"lightBlue"));
	   
	}
	for(let i=1200;i < 1350;i = i+50){
		boxes.push(new Box(i,320,50,80,"pink"));
	   
	}
	// for(let i=600;i < 750;i = i+50){
	 	boxes.push(new Box(1250,240,50,80,"lightsalmon"));
	   
	// }
	console.log(polygon.body);

	Engine.run(engine);
	

}


function draw() {
  	rectMode(CENTER);
  	background(57, 44, 44);
  	ground.show();
  	ground2.show();
 	ground3.show();
	polygon.show();
	rope.display();
	drawSprites();
	rope.update();

	//mousey.body(polygon.body);
	for(let box of boxes){
		box.show();
	}
	if(m === 0){
		stroke(0);
		strokeWeight(5);
		fill(255);
		textSize(25);
		text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",width/4,50);
	}

	console.log(mouseX,mouseY);
	if(keyWentDown("space")){
		Matter.Body.setPosition(polygon.body,{x:200,y:height/3});
		if(l === 0){
			l = l+1;
		}
	}
	if(mouseWentDown(LEFT)){
		l = l+1
	}
	if(mouseWentUp(LEFT)){
		m = m+1;
		rope.fly();
		if(l === 1){
			l = l-1;
		}
	}
	if(mouseUp(LEFT)){
	
		
		if(l === 0){
			stroke(0);
			strokeWeight(5);
			fill(255);
			textSize(25);
			text("Press Space to retry",width/2.2,650);
			
		}
	}
	// if(mouseWentUp(LEFT)){
	// 	rope.fly();
	// }
	stroke(0);
	strokeWeight(3);
	fill("lightsalmon");
	ellipse(mouseX,mouseY,15);
}





