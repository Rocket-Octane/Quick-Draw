quick_draw_data_set = [];
function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}
function clearCanvas(){
    background("white");
    document.getElementById("label").innerHTML = "Label: ";
    document.getElementById("confidence").innerHTML = "Confidence: ";
}
function draw(){
    strokeWeight(8);
    stroke(0);
    if (mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function updateCanvas(){
    background("white");
    r_num = Math.floor(quick_draw_data_set);
}
function check_draw(){

}
function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }
    console.log(results);
    document.getElementById("label").innerHTML = "Label: " + results[0].label;
    document.getElementById("confidence").innerHTML = "Confidence: " + Math.round(results[0].confidence * 100) + "%";
    
    utterthis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterthis);
}