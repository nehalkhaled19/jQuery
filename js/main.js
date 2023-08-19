// let width = $(".nav").outerWidth()
// $(".nav-section").animate({ left: `-${width}px` }, )


$(".open").click(function () {
    $(".open").css("opacity", "0")
    let left = $(".nav-section").css("left")
    $(".nav").animate({ display: `block` }, 1000)
    if (left != "0px") {
        $(".nav-section").animate({ left: `0px` }, 1000)
    }
})
$(".close").click(function () {
    $(".open").css("opacity", "1")
    let width = $(".nav").outerWidth()
    let left = $(".nav-section").css("left")
    if (left == "0px") {
        $(".nav-section").animate({ left: `-${width}px` }, 1000)
    }
})
$("li a").click(function () {
    let href = $(this).attr("href")
    let sectionTop = $(href).offset().top
    $("html,body").animate({ scrollTop: sectionTop }, { duration: 1000, queue: false })
})
$(".singer-name").click(function () {
    let x = $(this).parent().find("div")
    $(x).slideToggle(500)
    $(".singer").not(x).slideUp(500)
})


/*counter*/


window.onload = function() {
   
    countDownToTime("10 october 2021 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }





// textarea
$("#text").keyup(function () {
    let x = $(this).val()
    let availableChar = 100 - x.length
    if (0 < availableChar < 100) {
        $("#chars").text(availableChar)
    }
    if (availableChar < 0) {
        $("#chars").text("your available character finished")
    }
})