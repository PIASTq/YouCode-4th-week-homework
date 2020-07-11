
let changeColorButtton = document.querySelector(".change-color");
let container = document.querySelector(".container");
let webHeader__header = document.querySelector(".webHeader__header");
let header = document.querySelector(".header");
let header2 = document.querySelector(".header2");
let table_caption = document.querySelector(".main__table-caption");
let image_border = document.querySelector(".gallery__image");

changeColorButtton.addEventListener("click", () => {
    container.classList.toggle("container-dark_mode");
    webHeader__header.classList.toggle("webHeader__header-dark_mode");
    header.classList.toggle("header-dark_mode");
    header2.classList.toggle("header2-dark_mode");
    table_caption.classList.toggle("table_caption-dark_mode");

    if (changeColorButtton.innerText === "Włącz tryb ciemny") {
        changeColorButtton.innerText = "Włącz tryb jasny";
    }
    else {
        changeColorButtton.innerText = "Włącz tryb ciemny";
    }
})