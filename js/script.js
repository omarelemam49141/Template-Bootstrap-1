/* start get started */
let getStartedBtn = document.querySelector('.get-started'),
    landing = document.querySelector('.landing');

getStartedBtn.onclick = () => {
    let height = landing.clientHeight;
    window.scrollTo({
        top: height,
        behavior: 'smooth'
    });
}
/* end get started */

/* Start projects */
let btns = document.querySelectorAll('.cat-btns li'),
    imgs = document.querySelectorAll('.cat');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        /* Start toggling the active class */
        //Remove active class rom all the buttins
        btns.forEach((elem) => {
            elem.classList.remove('active', 'rounded-pill');
        });

        //Add the active class to the clicked button
        btn.classList.add('active', 'rounded-pill');
        /* Start toggling the active class */

        /* start viewing the selected images */
        imgs.forEach((img) => {
            //hide all the images
            img.style.opacity = 0.1;
        })
        //show the chosen category
        let selectedCat = document.querySelectorAll(btn.dataset.cat);
        console.log(selectedCat);
        selectedCat.forEach((cat) => {
            cat.style.opacity = 1;
        })
        /* end viewing the selected images */
    })
})
/* End projects */