// Your code here
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

$(document).ready(function() {

    let clockDisplay = $(`<span> ${hour}:${minutes}:${seconds} </span>` );
    // let clockDisplay = $(`<span> ${uts} </span>`)
    // let clockUts = $.now();
    // console.log(clockUts);
    $('#clock').html(clockDisplay);
    

    
});