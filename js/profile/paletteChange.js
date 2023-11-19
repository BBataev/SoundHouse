(() => {

    var colorChoicerAccent = document.querySelector(".main-colorPicker2-separation-form-colorChoicer-accent__input");
    var colorChoicerProfile = document.querySelector(".main-colorPicker2-separation-form-colorChoicer-profile__input");
    var colorChoicerMain = document.querySelector(".main-colorPicker2-separation-form-colorChoicer-main__input");
    var colorChoicerText = document.querySelector(".main-colorPicker2-separation-form-colorChoicer-text__input");

    var coloredProfile = document.querySelector(".main-colorPicker-separation-mini-main-profile");
    var coloredMain = document.querySelector(".main-colorPicker-separation-mini ");
    var coloredBtn = document.querySelector(".main-colorPicker-separation-mini-main-btn__btn");
    var coloredName = document.querySelector(".main-colorPicker-separation-mini-main-profile__name");

    colorChoicerAccent.addEventListener("input", function () {
        var selectedColor = colorChoicerAccent.value;
        coloredBtn.style.backgroundColor = selectedColor;
        coloredProfile.style.border = "1px solid " + selectedColor;
    });

    colorChoicerProfile.addEventListener("input", function () {
        var selectedColor = colorChoicerProfile.value;
        coloredProfile.style.backgroundColor = selectedColor;
    });

    colorChoicerMain.addEventListener("input", function () {
        var selectedColor = colorChoicerMain.value;
        coloredMain.style.backgroundColor = selectedColor;
    });

    colorChoicerText.addEventListener("input", function () {
        var selectedColor = colorChoicerText.value;
        coloredName.style.color = selectedColor;
    });

})();
