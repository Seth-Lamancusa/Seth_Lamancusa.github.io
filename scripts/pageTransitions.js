const pages = document.querySelectorAll(".page");
const buttons = document.querySelectorAll("#top_nav a.tab");
let t = 0;

buttons[0].style.background = "linear-gradient(#f8f9fa, white)";
buttons[0].style.height = "41px";

slide = (page) => {
    switch (page) {
        case 'article':
            t = 0;
            break;
        case 'gallery':
            t = 1;
            break;
        case 'library':
            t = 2;
            break;
    }
    pages.forEach(
        page => (page.style.transform = `translateX(${-t * 100}%)`)
    );
    buttons.forEach(
        function (b) {
            b.style.background = "linear-gradient(#f8f9fa, #ebf0ff)";
            b.style.height = "40px";
        }
    );
    buttons[t].style.background = "linear-gradient(#f8f9fa, white)";
    buttons[t].style.height = "41px";
};