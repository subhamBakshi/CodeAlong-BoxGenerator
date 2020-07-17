let button = document.getElementById("theBoxes");
button.addEventListener('click', myFunction);

var oldValue = 0;
var i = 1;

function myFunction() {
    let n = document.getElementById("num").value;
    let boxColor = document.getElementById("color").value;
    n = parseInt(oldValue) + parseInt(n);
    for (; i <= n; i++) {
        var box = document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById("box").appendChild(box);

        box.innerHTML = i; //write the nos. inside the box
        box.style.backgroundColor = boxColor
        oldValue = document.getElementById("box").lastElementChild.innerHTML;
    }
}