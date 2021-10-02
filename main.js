function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QQDD21Hz2/model.json",modalReady);
}
function modalReady(){
    classifier.classify(gotResults);
}