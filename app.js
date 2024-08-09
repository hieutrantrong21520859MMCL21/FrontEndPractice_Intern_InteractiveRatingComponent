const rating_box = document.querySelector(".rating-box");
const pop_up = document.querySelector(".pop-up");
const submit_btn = document.getElementById("submit");
const rating_buttons = document.querySelectorAll(
  ".rating-box form input[name='interactive-rating']"
);
const result = document.getElementById("result");
const form = document.querySelector("form");

// Get number from the clicked button
let num_star;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const rating = formData.get("interactive-rating");

  if (rating) {
    pop_up.classList.remove("hidden");
    rating_box.classList.add("hidden");

    result.innerHTML = rating;
  }
});

// Click on pop - up to close it
pop_up.addEventListener("click", function () {
  if (!pop_up.classList.contains("hidden")) {
    pop_up.classList.add("hidden");
    rating_box.classList.remove("hidden");

    result.innerHTML = '';
    
    // Uncheck buttons
    rating_buttons.forEach((btn) => (btn.checked = false));
  }
});
