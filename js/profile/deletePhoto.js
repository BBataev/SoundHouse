(() => {

    const deleteBtn = document.querySelector('.main-menu__delete');

    deleteBtn.addEventListener('click', () => {
        window.location.href = "../../php/deletePhoto.php";
    })

})();