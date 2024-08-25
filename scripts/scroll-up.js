document.addEventListener("DOMContentLoaded", function() {
    // observer object to govern fade in
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('creep-up');
            } else {
                entry.target.classList.remove('creep-up');
            }

        });
    });


    // control events showing
    const hiddenElements = document.querySelectorAll('.card-back');
    console.log(hiddenElements);
    hiddenElements.forEach((e1) => observer.observe(e1));

})