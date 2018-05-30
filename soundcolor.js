var x = 0;
var y = 0;
var r = 10
while( y < 1000){
    makeCircles();
}
function makeCircles(){
    for (var i =0; i < 10;i++){
        var myCircle = new Path.Circle(new Point(x, y), r);
        x+=100;
        r+=0.
        1;
        myCircle.fillColor = 'rgb(255, 0, 0)';
    }
    y+=100;
    x=0;
}