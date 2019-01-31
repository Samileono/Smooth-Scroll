var destination = null;
var speed = 10;
var scroll = null;
var marginY = 0;


function goTo(elem) {
    destination = document.getElementById(elem).offsetTop;
    marginY = marginY + speed;
    var scroller = setTimeout(function () {
        goTo(elem);
    }, 1);
    if (marginY >= destination)
        clearTimeout(scroller);

    window.scrollTo(0, marginY);
}

function goUp(elem) {
    destination = document.getElementById(elem).offsetTop;
    marginY = marginY - speed;
    var scroller = setTimeout(function () {
        goUp(elem);
    }, 1);
    if (marginY <= destination)
        clearTimeout(scroller);

    window.scrollTo(0, marginY);
}