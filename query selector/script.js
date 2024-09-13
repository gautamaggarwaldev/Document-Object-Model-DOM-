document.addEventListener("DOMContentLoaded", () => {

    function random(number) {
        return Math.floor(Math.random() * number);
    }

    function randomColor() {
        return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    }

    function changeColor() {
        const color = randomColor();
        document.querySelector("#d1").style.backgroundColor = color;
    }

    document.querySelector("#btn").addEventListener("click", (event) => {
        changeColor();
    });


    const list = document.querySelectorAll(".item");

    console.log(list);

    for(let i=0; i<list.length; i++) {
        console.log(list[i].textContent);
    }

    document.querySelectorAll(".item").forEach((list) => {

        console.log(list.textContent);
      
    });
})
