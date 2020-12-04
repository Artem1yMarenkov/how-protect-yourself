const progress = document.querySelector('.progress');
const upButton = document.querySelector('.upButton')
window.addEventListener('scroll', progressBar);
window.addEventListener('scroll', showUpButton);

function progressBar(e){
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let per = windowScroll / windowHeight * 100;

    progress.style.width = per +'%';
}

function showUpButton(e){
    let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if(windowScroll >= 400){
        upButton.style.visibility = 'visible';
    }else if(windowScroll <= 500){
        upButton.style.visibility = 'hidden';
    }
}
function onclickUp(){
    window.scrollTo(0,0);
}