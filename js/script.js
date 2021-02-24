const navbar = document.querySelector('.navbar');

window.onscroll = function() {
  
  if(this.scrollY > 50)
    navbar.classList.add('bg-light')
    else {
      navbar.classList.remove('bg-light')
    }
 
}