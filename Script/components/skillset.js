document.getElementById('frontendFlip').addEventListener('click', function(){
    document.getElementById('c-skillset__frontend').style = "transform: rotateY(180deg)";
    document.getElementById('c-skillset__backend').style = "transform: rotateY(0deg)";
    document.getElementById('c-skillset__skills').style = "transform: rotateY(0deg)";
});

document.getElementById('backendFlip').addEventListener('click', function(){
    document.getElementById('c-skillset__backend').style = "transform: rotateY(180deg)";
    document.getElementById('c-skillset__frontend').style = "transform: rotateY(0deg)";
    document.getElementById('c-skillset__skills').style = "transform: rotateY(0deg)";
});

document.getElementById('skillsFlip').addEventListener('click', function(){
    document.getElementById('c-skillset__backend').style = "transform: rotateY(0deg)";
    document.getElementById('c-skillset__frontend').style = "transform: rotateY(0deg)";
    document.getElementById('c-skillset__skills').style = "transform: rotateY(180deg)";
});

document.addEventListener('click', function(event) {
    var isClickInside = document.getElementById('c-skillset').contains(event.target);
  
    if (!isClickInside) {
        document.getElementById('c-skillset__frontend').style = "transform: rotateY(0deg)";
        document.getElementById('c-skillset__backend').style = "transform: rotateY(0deg)";
        document.getElementById('c-skillset__skills').style = "transform: rotateY(0deg)";
    }
  });
  