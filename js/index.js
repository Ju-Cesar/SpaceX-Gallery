let hamMenu = document.querySelector('.ham-menu');
let navigation = document.querySelector('.side-menu');
console.log(navigation)
let overLay = document.getElementById('overlay');
hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle('is-active');
    navigation.classList.toggle('opened');
    overLay.classList.toggle('show-overlay');
    document.body.addEventListener('click', e => {
        if (e.target !== navigation && navigation.classList.contains('opened')) {
            navigation.classList.remove('opened');
            overLay.classList.toggle('show-overlay');
            console.log('hello')
        }
    });
})


