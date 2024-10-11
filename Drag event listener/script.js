document.addEventListener('DOMContentLoaded', function () {

    const image = document.querySelector('.img-box');
    const boxes = document.getElementsByClassName('whitebox');



    image.addEventListener('dragstart', (e) => {
        console.log("DragStart has been trigerred");
        e.target.className += ' hold';
        setTimeout(()=> {
            e.target.className = 'hide';
        }, 0);

    });

    image.addEventListener('dragend', (e) => {
        console.log("DragEnd has been trigerred");
        e.target.className = 'img-box';
    });

    Array.from(boxes).forEach(box => {

        box.addEventListener('dragenter', (e)=> {
            console.log("DragEnter has been trigerred");
            e.target.className += ' dashed';
        });

        box.addEventListener('dragleave', (e)=> {
            console.log("DragLeave has been trigerred");
            e.target.className = 'whitebox';
        });

        box.addEventListener('dragover', (e)=> {
            console.log("DragOver has been trigerred");
            e.preventDefault();
        });

        box.addEventListener('drop', (e)=> {
            console.log("Drop has been trigerred");
            e.target.append(image);
        });

    });

});