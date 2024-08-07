const rating_box = document.querySelector('.rating-box');
const pop_up = document.querySelector('.pop-up');
const submit_btn = document.getElementById("submit");
const rating_buttons = document.querySelectorAll('.rating-box ._button button');
const result = document.getElementById('result');

// Get number from the clicked button
let num_star;

rating_buttons.forEach(btn => {
    
    btn.addEventListener('click', function() {

        result.innerHTML = btn.innerHTML;
        num_star = btn.innerHTML;
    })
})

// Click on button 'Submit'
submit_btn.addEventListener('click', function() {

    console.log(num_star);

    if (isFinite(num_star))
    {
        pop_up.classList.remove('hidden');
        rating_box.classList.add('hidden');
    }
    else
    {
        alert('Please rate for us! Thank you!');
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
    } 
});