$(document).ready(function () {
    const clockRefreshId = window.setInterval (function() {
    let uts = new Date(Date.now());
    let timeStr = uts.toLocaleTimeString();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    let dateStr = uts.toLocaleDateString('en-US', options);

    let currentTime = $(`<span> ${dateStr} <br> ${timeStr}</span>`);
    // let clockUts = $.now();
    $('#clock').html(currentTime);
}, 1000);
});


// $(document).ready(function () {
//     const clockRefreshId = window.setInterval (function() {
//     let uts = new Date(Date.now());
//     let hour = uts.getHours();
//     let minutes = uts.getMinutes();
//     let seconds = uts.getSeconds();
//     hour = hour > 9 ? hour : '0' + hour;
//     minutes = minutes > 9 ? minutes : '0' + minutes
//     seconds = seconds > 9 ? seconds : '0' + seconds;

//     let day = uts.getUTCDay();
//     let month = uts.getMonth();
//     let date = uts.getDate();
//     let year = uts.getFullYear();
    
//     let testing = uts.toDateString();
//     let timeExperiment = $(`<p>${testing} </p>`);
//     let currentTime = $(`<span> ${hour}:${minutes}:${seconds} </span> `);
//     // let clockUts = $.now();
//     $('#clock').html(currentTime);
//     console.log(testing);
//     // let currentDate = $(<p>  </p>)
//     $('#clock').append(timeExperiment);
// }, 1000);
// });

// alternatively, add a 0 and then return the last two digits:
// let hours = ('0'+ uts.getHours()).slice(-2);
// let minutes = ('0'+ uts.getMinutes()).slice(-2);
// let seconds = ('0'+ uts.getSeconds()).slice(-2);