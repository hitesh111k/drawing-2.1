x = 0;
y = 0;
Circle = "";
Rect = "";

function setup(){
    canvas = createCanvas(900,600)
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();

}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The Speech has been recognized as:" + content;
    if(content == "circle"|| content == "Circle")
    {
        x = math.floor(Math.random()*900);
        y = math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        Circle = "set";
    }if(content == "rectangle")
    {
        x = math.floor(Math.random()*900);
        y = math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "Started drawing Rectangle";
        Rect = "set";
    }
}


 function draw()
 {
    if(Circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        Circle = "";
    }
    if(Rect == "set")
    {
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        Rect = "";
    }
 }