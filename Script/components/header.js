var selected = document.getElementById('first');
function toggleListSelect(curr){
    selected.classList.remove('is-listSelected');
  curr.classList.add('is-listSelected');
  selected = curr;
}

document.addEventListener('click', function(event) {
  var isClickInside = document.getElementById('c-sideBar').contains(event.target);

  if (!isClickInside) {
      document.getElementById('navCheck').checked = false;
  }
});

window.addEventListener('resize', () => {
  document.getElementById('navCheck').checked = false;
});

window.addEventListener('scroll', () => {
  document.getElementById('navCheck').checked = false;
  
  if(pageYOffset === 0)
    document.getElementById('header').classList.remove('is-scroll');
  else
    document.getElementById('header').classList.add('is-scroll');
});