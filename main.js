var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox")
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if (content == "take my selfie") {
        speak();
        console.log("Selfie check");
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSelfie();
        save()
    },5000)
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

function takeSelfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='MySELFIE' src='"+data_uri+"'>"
    })
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("MySELFIE").src;
    link.href = image;
    link.click();
}