let section = document.getElementById("home-clients");
let ul = document.getElementById("list");
let listItems = [...document.getElementsByClassName("home-clients__item")];



let currentAngle = 0; 
let currentIndex = 0; 

window.addEventListener("wheel", function (e) {
  e.preventDefault(); 

  let delta = e.deltaY; 
  let angleChange = delta > 0 ? 18 : -18; 
  currentAngle += angleChange; 


  list.style.transition = 'transform 0.5s ease'; 
  list.style.transform = `translate3d(0px, 0px, 0px) rotateX(${currentAngle}deg)`;


  if (delta > 0) {
    currentIndex = (currentIndex + 1) % listItems.length; 
  } else {
    currentIndex = (currentIndex - 1 + listItems.length) % listItems.length; 
  }


  listItems.forEach((li, index) => {
    li.classList.remove('active'); 
    if (index === currentIndex) {
      li.classList.add('active'); 
    }
  });
});

