function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = "";

    let i = 0;
    const timer = setInterval(function () {
        if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        } else {
        clearInterval(timer);
        element.removeChild(cursorElement);
        }
    }, speed);
};

const professionElement = document.querySelector(".about__profession");

  typeEffect(professionElement, 200); // Cкорость печати (в миллисекундах)
