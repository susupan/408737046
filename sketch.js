let bg = ["#f4f3ee"];
var fruits = []
var fruit
class fruit_class{
  constructor(args){
    this.p = args.p || {x:width/2,y:height/2};
    this.w = args.w || random(40,60);
    this.h = args.h || random(40,60)
    this.d = args.d || random(40,60)
    this.ang = args.ang || random(-40,40)
  }
  draw(){
    push();
    translate(this.p.x + this.w / 2, this.p.y + this.h / 2);

    rotate(random(360));

    shearX(random(-20, 20));
    shearY(random(-20, 20));

    // トマト
    // 実
    noStroke();
    fill("#e63946");
    arc(0, 0, this.d * 1.2, this.d * 1.4, 0, 180, PIE);
    fill("#e76f51");
    arc(0, 0, this.d * 0.8, this.d, 0, 180, PIE);

    // 白い部分
    fill("#f1faee");
    arc(0, 0, this.d * 0.4, this.d * 0.3, 0, 180, PIE);

    // 種
    noFill();
    stroke("#e9c46a");
    strokeWeight(this.d / 16);

    drawingContext.setLineDash([1, 8]);
    arc(0, this.d / 20, this.d * 0.6, this.d * 0.6, 0, 180);

    pop();
  }
  update(){
    this.p.x = this.p.x + this.v.x  //x軸
    this.p.y = this.p.y + this.v.y  //y軸
    if(this.p.x<0){        //碰到視窗左邊
      this.v.x = -this.v.x
    }
    if(this.p.x>width){   //碰到視窗右邊
      this.v.x = -this.v.x
    }
    if(this.p.y<0){       //碰到視窗上邊
      this.v.y = -this.v.y
    }
    if(this.p.y>height){  //碰到視窗下邊
      this.v.y = -this.v.y
    }
  
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background(bg);
  for(i=0;i<50;i=i+1){
    fruit = new fruit_class({
      p:{x:random(0,width),y:random(0,height)}
    })
    fruits.push(fruit)
  }
  let cells = 5;
  let offset = width / 10;
  let margin = offset / 1.5;
  let w = (width - offset * 2 - margin * (cells - 1)) / cells;
  let h = (height - offset * 2 - margin * (cells - 1)) / cells;

  for (let j = 0; j < cells; j++) {
    for (let i = 0; i < cells; i++) {
      let x = offset + i * (w + margin);
      let y = offset + j * (h + margin);

      let d = w;

      
    }
  }
} 


function draw(){
  background(220);
  for(j=0;j<fruits.length;j=j+1){
    fruit = fruits[j]
    fruit.draw()
    fruit.update
  }
}