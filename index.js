
$(document).ready(function () {
    const clockRefreshId = window.setInterval (function() {
    let uts = new Date(Date.now());
    let hour = uts.getHours();
    let minutes = uts.getMinutes();
    let seconds = uts.getSeconds();
    hour = hour > 9 ? hour : '0' + hour;
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds;
    // alternatively, add a 0 and then return the last two digits:
    // let hours = ('0'+ uts.getHours()).slice(-2);
    // let minutes = ('0'+ uts.getMinutes()).slice(-2);
    // let seconds = ('0'+ uts.getSeconds()).slice(-2);
    let currentTime = $(`<span> ${hour}:${minutes}:${seconds} </span>` );
    // let clockUts = $.now();
    $('#clock').html(currentTime);
    // $('#clock').prepend(`current time`);
    }, 1000);
});