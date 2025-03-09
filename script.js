const dropDownButton = document.querySelector('.drop-btn');
const dropDownContent = document.querySelector('.dropdown-content');

dropDownButton.addEventListener('click', () => {
    const dropdownCheck = document.querySelector('.open')
    if (!dropdownCheck){
        dropDownContent.classList.add('open');
    } else {
        dropDownContent.classList.remove('open');
    }
})