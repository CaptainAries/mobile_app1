var da; // delta angle
var dx; // noise increment value

var still = false;
var inkblots = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    da = PI / 100
    dx = 0.05;
    initInkBlots();
}

function draw() {
    if (!still) {
        background(255);
        noStroke();
        for (i in inkblots){
          inkblots[i].drawInk();
        }
        fill(255);
        textFont("Arial");
        textAlign(CENTER);
        textStyle(BOLD);
        textSize(28);

        text("Rorschach's Test", windowWidth / 2, windowHeight / 2 - 30);
        textSize(18);
        text("What do you see?", windowWidth / 2, windowHeight / 2 + 40);
        textFont('Roboto', 400);
        textSize(14);
        fill(0);
        textStyle(NORMAL);
        text("Click / Touch", windowWidth / 2, windowHeight - 40);
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    initInkBlots();
    still = false;
}


function touchStarted() {
    still = !still;
    //console.log(still);
}

function initInkBlots(){
    inkblots[0] = new Inkblot(100, 450, -20, 20, 0);
    inkblots[1] = new Inkblot(-300, -50, 100, -100, 0);
    inkblots[2] = new Inkblot(50, 450, -200, 200, 255);
    inkblots[3] = new Inkblot(70, 240, 130, -130, 255);
    inkblots[4] = new Inkblot(-400, 0, 20, -20, 0);
    inkblots[5] = new Inkblot(50, 500, -10, 10, 255);
    inkblots[6] = new Inkblot(-400, -20, 100, -50, 0);
    inkblots[7] = new Inkblot(0, 200, 0, -100, 0);
}

function Inkblot(rMin, rMax, oscMin, oscMax, hue) {

    this.transX = width/2;
    this.transY = height/2;
    this.xoff = map(int(random(1, 5)), 1, 5, 1000, 5000);
    this.yoff = 0;
    this.rMin = rMin;
    this.rMax = rMax;
    this.oscMin = oscMin;
    this.oscMax = oscMax;
    this.hue = hue;

    this.drawInk = function() {
        push();
        fill(hue);
        //var osc1 = map(cos(this.yoff), -1, 1, this.oscMin, this.oscMax);
        var osc2 = map(sin(this.yoff), -1, 1, this.oscMin, this.oscMax);
        translate(this.transX, this.transY + osc2);
        beginShape();
        for (var a = -PI / 2; a <= (3 * PI) / 2; a += da) {
            var n = noise(this.xoff , this.yoff);
            var r = map(n, 0, 1, this.rMin, this.rMax + osc2);
            if (a <= PI / 2) {
                this.xoff += dx;
            } else {
                this.xoff -= dx; 
            }
            var x = r * cos(a);
            var y = r * sin(a);
            vertex(x, y);
        }
        endShape();
        pop();
        this.yoff += 0.03;
    }

}
