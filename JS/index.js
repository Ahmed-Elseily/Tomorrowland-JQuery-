let daysCount = document.querySelector("#daysCount")
let hoursCount = document.querySelector("#hoursCount")
let minsCount = document.querySelector("#minsCount")
let secCount = document.querySelector("#secCount")
let textArea = document.querySelector("textarea")
let charLimit = document.querySelector("#charLimit")
/* {{{{{{{{{{{{{{{{{{{{{{{sidebar-sction}}}}}}}}}}}}}}}}}}}}}}} */

let sidebarWidth = $(".side-bar").innerWidth();
console.log(sidebarWidth);

$(".sidebar-btn").click(function () {
    $(".side-bar").animate({ left: 0 }, 500)
    $(".close-btn").click(function () {
        $(".side-bar").animate({ left: -sidebarWidth }, 500)

    })
})
/* {{{{{{{{{{{{{{{{{{{{{{{counter-sction}}}}}}}}}}}}}}}}}}}}}}} */
var countDownDate = new Date("Oct 15, 2024 15:37:25").getTime();
var x = setInterval(function() {

    var now = new Date().getTime();
  
    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    daysCount.innerHTML = days + " D"
    hoursCount.innerHTML = hours + " H"
    minsCount.innerHTML = minutes + " M"
    secCount.innerHTML = seconds + " S"
})

// let homeOffset = $("#home").offset().top;
// let durationOffset = $("#duration").offset().top;
// let detailsOffset = $("#details").offset().top;
// let contactOffset = $("#contact").offset().top;
// console.log(detailsOffset);

$("a").click(function(eventInfo){
    let aHref = eventInfo.target.getAttribute("href");
    console.log(aHref);
    let sectionOffset = $(aHref).offset().top;
    console.log(sectionOffset);
    $(" html ,body").animate({scrollTop: sectionOffset} , 1000);
    console.log("hello");
})
/* {{{{{{{{{{{{{{{{{{{{{{{textarea counter collapse-sction}}}}}}}}}}}}}}}}}}}}}}} */

// let numbChar = textArea.value
// console.log(textArea);

$('textarea').keyup(function(){

    if(this.value.length == 100){
        $("#charLimit").removeClass("d-none")
    }
    else if(this.value.length < 100){
        $("#charLimit").addClass("d-none")

    }
    
    

    $("#remainingC").html((100-this.value.length));
})
// $('textarea').keyup(function(){

//     let x = $(this).val().length
//     console.log(x);
// })









/* {{{{{{{{{{{{{{{{{{{{{{{div collapse-sction}}}}}}}}}}}}}}}}}}}}}}} */


$(".DJs h3").click(function () {

    $(this).next().slideToggle(500)
    // $(".DJs h3").not($(this).next()).slideUp(500)
    $(this).next().siblings(".slider").slideUp(500)

})


// document.querySelectorAll(".DJs h3").forEach(function (dj) {
//     dj.addEventListener("click", function () {
//         document.querySelector(".djs-inner .active").classList.remove("active")
//         document.querySelector
//     })
// })


// function sayHello() {
//     console.log("hello");
// }

