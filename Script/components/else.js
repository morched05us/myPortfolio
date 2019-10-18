window.addEventListener('scroll', () => {
    if(pageYOffset === 0)
      document.getElementById('toTop').style.bottom = '-50px';
    else
      document.getElementById('toTop').style.bottom = '10px';
  });