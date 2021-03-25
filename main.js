"use strict";

setInterval("getTime()", 1)
    //字节跳动（ 0.2 .0） setInterval("jumpTime(getTime())", 1)

var cli = document.getElementById("cli");
var clo = document.getElementById("clo");

//现在时间
function getTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
    return sec;
}

//Jump！
function cliJump() {
    cli.style.fontWeight = 900;
    clo.style.fontWeight = 300;
}

function cloJump() {
    cli.style.fontWeight = 300;
    clo.style.fontWeight = 900;
}

function stopJump() {
    cli.style.fontWeight = 300;
    clo.style.fontWeight = 300;
}

//Jump rule
function jumpTime(second) {
    if (second % 2 == 0) {
        cliJump()
    } else {
        cloJump()
    }
}