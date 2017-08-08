var shopping = document.getElementsByClassName('Shopping')[0];
var line = shopping.getElementsByClassName('line')[0];
var work = document.getElementsByClassName('work')[0];
var line1 = work.getElementsByClassName('line1')[0];
var work2 = document.getElementsByClassName('work2')[0];
var line3 = work2.getElementsByClassName('line3')[0];
var work1 = document.getElementsByClassName('work1')[0];
var line2 = work1.getElementsByClassName('line2')[0];
var play = document.getElementsByClassName('play')[0];
var on = document.getElementsByClassName('on')[0];
var audio = document.getElementsByClassName('audio')[0];


play.onclick = function () {

    audio.play();
    this.style.display = 'none';
    on.style.display = 'block';
}

on.onclick = function () {

    audio.pause();
    this.style.display = 'none';
    play.style.display = 'block';
}

function event(ele, ele2) {
    ele.onmouseover = function () {
        this.style.boxShadow = '0 5px 10px #666';
        ele2.style.transform = ' scaleX(6)';
    }

    ele.onmouseout = function () {
        this.style.boxShadow = '';
        ele2.style.transform = ' scaleX(1)';
    }
}

event(shopping, line);
event(work, line1);
event(work1, line2);
event(work2, line3);





