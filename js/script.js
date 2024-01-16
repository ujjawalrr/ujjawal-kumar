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

let contactBtn = document.getElementById('contactBtn');
async function handleFormSubmit(e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  try {
    const res = await fetch('https://ujjawal-kumar.onrender.com', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message }),
    })
    const data = await res.json();
    alert(data);
  } catch (error) {
    alert(error);
  }
}
contactBtn.addEventListener('click', handleFormSubmit);