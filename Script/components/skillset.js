var front = true;
var back = true;
var skills = true;


document.getElementById('c-skillset__frontend').addEventListener('click', function () {
    if (front) {
        document.getElementById('c-skillset__frontend').style = "transform: rotateY(180deg)";
        document.getElementById('c-skillset__backend').style = "transform: rotateY(0deg)";
        document.getElementById('c-skillset__skills').style = "transform: rotateY(0deg)";
        setTimeout(() => {
            front = false;
            back = true;
            skills = true;
        }, 10);
    };
});

document.getElementById('c-skillset__frontend__back').addEventListener('click', function () {
    document.getElementById('c-skillset__frontend').style = "transform: rotateY(0deg)";
    setTimeout(() => {
        skills = true;
        front = true;
        back = true;
    }, 10);
});

document.getElementById('c-skillset__backend').addEventListener('click', function () {
    if (back) {
        document.getElementById('c-skillset__backend').style = "transform: rotateY(180deg)";
        document.getElementById('c-skillset__frontend').style = "transform: rotateY(0deg)";
        document.getElementById('c-skillset__skills').style = "transform: rotateY(0deg)";
        setTimeout(() => {
            back = false;
            front = true;
            skills = true;
        }, 10);
    }
});

document.getElementById('c-skillset__backend__back').addEventListener('click', function () {
    document.getElementById('c-skillset__backend').style = "transform: rotateY(0deg)";
    setTimeout(() => {
        skills = true;
        front = true;
        back = true;
    }, 10);
});

document.getElementById('c-skillset__skills').addEventListener('click', function () {
    if (skills) {
        document.getElementById('c-skillset__backend').style = "transform: rotateY(0deg)";
        document.getElementById('c-skillset__frontend').style = "transform: rotateY(0deg)";
        document.getElementById('c-skillset__skills').style = "transform: rotateY(180deg)";
        setTimeout(() => {
            skills = false;
            front = true;
            back = true;
        }, 10);
    }
});

document.getElementById('c-skillset__skills__back').addEventListener('click', function () {
    document.getElementById('c-skillset__skills').style = "transform: rotateY(0deg)";
    setTimeout(() => {
        skills = true;
        front = true;
        back = true;
    }, 10);
});


document.addEventListener('click', function (event) {
    var isClickInside = document.getElementById('c-skillset').contains(event.target);

    if (!isClickInside) {
        document.getElementById('c-skillset__frontend').style = "transform: rotateY(0deg)";
        document.getElementById('c-skillset__backend').style = "transform: rotateY(0deg)";
        document.getElementById('c-skillset__skills').style = "transform: rotateY(0deg)";
    }
});


window.addEventListener('scroll', () => {
    document.getElementById('c-skillset__frontend').style = "transform: rotateY(0deg)";
    document.getElementById('c-skillset__backend').style = "transform: rotateY(0deg)";
    document.getElementById('c-skillset__skills').style = "transform: rotateY(0deg)";
    setTimeout(() => {
        skills = true;
        front = true;
        back = true;
    }, 10);
  });