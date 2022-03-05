const color_change_button = document.querySelector('.color-change-cont')
const color_icon = document.querySelector('.color-icon')

function changeToLight(){

    const body_2 = document.querySelector('body')
    body_2.classList.add('change-body-light')
    document.querySelector('#about').classList.add('change-body-light')
    document.querySelector('.home-section-1').classList.add('change-body-light')
    document.querySelector('.home-section-2').classList.add('change-body-light')
    document.querySelector('#skills').classList.add('change-body-light')
    document.querySelector('.timeline ul').classList.add('change-body-light')
    document.querySelector('#experience').classList.add('change-body-light')
    document.querySelector('#education').classList.add('change-body-light')
    document.querySelector('.achieve-container').classList.add('change-body-light')
    document.querySelector('.volunteering-container ').classList.add('change-body-light')
    document.querySelector('.home-sect-1-heading').classList.add('change-body-dark')
    document.querySelector('.home-sect-1-inner-cont p').classList.add('change-body-dark')
    document.querySelector('.text-animation').classList.add('change-body-dark')
    document.querySelector('.about-para').classList.add('change-body-dark')
    document.querySelectorAll('.timeline ul li').forEach(each => each.classList.add('change-view-black'))
    document.querySelectorAll('.volunteer-card-content-cont').forEach(each => each.classList.add('change-body-dark'))
    const sub_headings = document.querySelectorAll('.sub-headings')
    sub_headings.forEach(each => each.classList.add('change-body-dark'))
    document.querySelectorAll('.about-page-box').forEach(box => box.src = './images/light_box.png')
}
changeToLight();
//change to dark 
function changeToDark(){

    const body_2 = document.querySelector('body')
    body_2.classList.remove('change-body-light')
    document.querySelectorAll('.timeline ul li').forEach(each => each.classList.remove('change-view-black'))
    document.querySelector('#about').classList.remove('change-body-light')
    document.querySelector('.home-section-1').classList.remove('change-body-light')
    document.querySelector('.home-section-2').classList.remove('change-body-light')
    document.querySelector('#skills').classList.remove('change-body-light')
    document.querySelector('.timeline ul').classList.remove('change-body-light')
    document.querySelector('#experience').classList.remove('change-body-light')
    document.querySelector('#education').classList.remove('change-body-light')
    document.querySelector('.achieve-container').classList.remove('change-body-light')
    document.querySelector('.volunteering-container ').classList.remove('change-body-light')
    document.querySelector('.home-sect-1-heading').classList.remove('change-body-dark')
    document.querySelector('.home-sect-1-inner-cont p').classList.remove('change-body-dark')
    document.querySelector('.text-animation').classList.remove('change-body-dark')
    document.querySelector('.about-para').classList.remove('change-body-dark')
    document.querySelectorAll('.volunteer-card-content-cont').forEach(each => each.classList.remove('change-body-dark'))
    const sub_headings = document.querySelectorAll('.sub-headings')
    sub_headings.forEach(each => each.classList.remove('change-body-dark'))
    document.querySelectorAll('.about-page-box').forEach(box => box.src = './images/about-box.png')

}




let i = false;

color_change_button.addEventListener('click', () => {
    if(i){
        color_icon.src = './images/dark.png'
        i = false;
        changeToLight();
        color_change_button.style.backgroundColor = '#071E3D'


    } else {
        color_icon.src = './images/light.png'
        i = true;
        color_change_button.style.backgroundColor = '#fff'
        changeToDark();

    }
    
})