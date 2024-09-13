
// function changecolor(newColor) {
//     var element = document.getElementById("first-heading");
//     element.style.color = newColor;
// }


// const fs = document.getElementsByClassName("fruit");

// for(let i=0; i<fs.length; i++) {
//     console.log(fs[i]);
// }


function getAllParaElems() {
    const allParas = document.getElementsByTagName("p");
    const num = allParas.length;
    alert(`There are ${num} paragraph in this document`);
}

function div1ParaElems() {
    const div1 = document.getElementById("div1");
    const div1Paras = div1.getElementsByTagName("p");
    const num = div1Paras.length;
    alert(`There are ${num} paragraph in #div1`);
}

function div2ParaElems() {
    const div2 = document.getElementById("div2");
    const div2Paras = div2.getElementsByTagName("p");
    const num = div2Paras.length;
    alert(`There are ${num} paragraph in #div2`);
}