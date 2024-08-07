const rating_box = document.querySelector('.rating-box');
const pop_up = document.querySelector('.pop-up');
const submit_btn = document.getElementById("submit");
const rating_buttons = document.querySelectorAll(".rating-box form input[name='interactive-rating']");
const result = document.getElementById('result');

// Get number from the clicked button
let num_star;

rating_buttons.forEach(btn => {
    
    btn.addEventListener('click', function() {

        if (btn.checked)
        {
            result.innerHTML = btn.value;
            num_star = btn.value;
        }
    })
})

// Click on button 'Submit'
submit_btn.addEventListener('click', function() {

    if (isFinite(num_star))
    {
        pop_up.classList.remove('hidden');
        rating_box.classList.add('hidden');
    }
});

// Click on pop - up to close it
pop_up.addEventListener('click', function() {

    if (!pop_up.classList.contains('hidden'))
    {
        pop_up.classList.add('hidden');
        rating_box.classList.remove('hidden');

        // Reset the rating
        result.innerHTML = "";
        num_star = undefined;

        // Uncheck buttons
        rating_buttons.forEach(btn => btn.checked = false);
    } 
});