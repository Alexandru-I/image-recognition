Webcam.set({
    width : 300,
    height : 350,
    image_format : 'png',
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function saveImage(){
    Webcam.snap(function(img){
  document.getElementById("result").innerHTML = '<img id = "snapshot" src = "' + img + '">';
    }
 )
}
//console.log(ml5.version);

 var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YcWbWMOVa/model.json',modelLoaded);
 function modelLoaded()
 {
 console.log("model loaded");
 }


 function SaveSnapshot()
 {
  classifier.classify(document.getElementById("snapshot"),gotResult);
 }

 function gotResult(error,results)
 {
   console.log(results);
  document.getElementById("resultObjectname").innerHTML= results[0].label;
  document.getElementById("resultAccuracy").innerHTML= results[0].confidence;
 }

//https://teachablemachine.withgoogle.com/models/BG-bq-MVU//

