const form = document.querySelector(".ratingform");
const ratingState = document.querySelector(".ratingstate");
const resultPage = document.querySelector(".resultpage");
const submitBtn = document.querySelector(".submitbtn");
const resultSpan = document.querySelector(".ratingresult");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const selectedRating = form.querySelector('input[name="rating"]:checked')

    if(!selectedRating) {
        alert('Please rate lovely little Teemo.');
        return;
    }

    resultSpan.textContent = selectedRating.value;

    ratingState.style.display = 'none';
    resultPage.style.display ='block';
})
