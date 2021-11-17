
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btns){
    btns.addEventListener("click", function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
})