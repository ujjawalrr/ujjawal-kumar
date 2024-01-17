var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    950: {
      slidesPerView: 4,
    },
  },
});

let contactForm = document.getElementById('contactForm');
let contactBtn = document.getElementById('contactBtn');
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let message = document.getElementById('message').value;
var modal = document.getElementById("myModal");
let modalMsg = document.getElementById("modalMsg");
let closeBtn = document.getElementById('closeBtn');
var span = document.getElementsByClassName("close")[0];

async function handleFormSubmit(e) {
  e.preventDefault();
  contactBtn.innerHTML = "Sending";
  try {
    const res = await fetch('https://ujjawal-kumar.onrender.com/contact', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message }),
    })
    const data = await res.json();
    contactForm.reset();
    contactBtn.innerHTML = "Send";
    modalMsg.innerHTML = data;
    modal.style.display = "block";
  } catch (error) {
    contactBtn.innerHTML = "Send";
    modalMsg.innerHTML = "Can't send now! Please try again later!";
    modal.style.display = "block";
  }
}
contactBtn.addEventListener('click', handleFormSubmit);
closeBtn.onclick = function () {
  modal.style.display = "none";
}
span.onclick = function () {
  modal.style.display = "none";
}

let navMenu = document.getElementById('navMenu');
let ul = document.getElementsByTagName('ul')[0];
navMenu.onclick = function () {
  ul.classList.toggle('leftToggle');
  if (navMenu.innerHTML == "close") {
    navMenu.innerHTML = "menu";
  }
  else {
    navMenu.innerHTML = "close";
  }
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target != navMenu && ul.classList.contains('leftToggle')) {
    ul.classList.remove('leftToggle');
    if (navMenu.innerHTML == "close") {
      navMenu.innerHTML = "menu";
    }
    else {
      navMenu.innerHTML = "close";
    }
  }
}