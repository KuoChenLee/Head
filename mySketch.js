function setup() {
	createCanvas(windowWidth/6, windowHeight/3);
	background(100);
}

function draw() {
	translate(width/2,height/2);
	rectMode(CENTER);
	background("#eadde1")
	stroke(0)
	strokeWeight(5);
	fill("#e2fdff")
	rect(0,0,150,130,20)
	push()
	noStroke()
	fill(0)
	rect(0,-20,120,40,10)
	fill(255)
	if(frameCount%30==0){
		rect(-25,-20,20,10,5)
		rect(25,-20,20,10,5)
	}else{
		rect(-25,-20,20,20,5)
		rect(25,-20,20,20,5)
	}
	pop()
	fill("red")
	rect(0,35,50,20,0,0,10,10)
	fill("#ffb4a2")
	arc(0,42,30,20,PI,0,OPEN)
	fill("#81c3d7")
	rect(-80,0,15,40,5)
	rect(80,0,15,40,5)
}