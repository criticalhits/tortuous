import 'p5';
import 'p5/lib/addons/p5.dom'; //This is where the p5.dom library is located in node_modules. 
console.log("Hi! I'm called from index.js");

var sample1; //Globally scoped SampleClass  with 'var'
var samples_arr = [];
class SampleClass {
  constructor(p5api,name="Default SampleClass name", x=20, y=40, w=500, h=250) { //Function parameters can be given default values
    this.p = p5api
    this.name = name
    greeting()
  }

  greeting() { 
    console.log("Hello, I'm " + this.name + "."); 
  }
  
  draw() {
    this.p.fill(255,0,0);
    this.p.rect(this.x, this.y, this.w, this.h); 
  }  
}

//P5 Sketch. you can name this anything you want, e.g. var foo = function ( p ) { ... }
var sketch = function ( p ) {
  let sample2; //Locally scoped SampleClass with 'let' - 'let' allow for block scoped variables

  p.setup = function() {
    p.createCanvas(800,600)
    sample1 = new SampleClass(p) 
    sample2 = new SampleClass(p, "Bob", 80, 60, 400, 100) 
  }

  p.draw = function() {
    p.background(0)// 
    sample1.draw()
    sample2.draw()
  }
}

new p5(sketch);