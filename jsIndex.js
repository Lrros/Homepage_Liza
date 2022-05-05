$(document).click(function(){
    $(".container").css("grid-template-columns", "repeat(4, 1fr)")
})
$(document).mousemove(function(){

    if($(".item1:hover").length == 1) {
        $(".item1").css("background", "rgb(255, 253, 250)")
        $("#a1").css("font-size", "40px")
        $("#a1").css("letter-spacing", "normal")
     }
     else {
        $(".item1").css("background", "rgb(153, 169, 216)")
        $("#a1").css("font-size", "20px")
        $("#a1").css("letter-spacing", "normal")
     }


     if($(".item2:hover").length == 1) {
        $(".item2").css("background", "rgb(255, 253, 250)")
        $("#a2").css("font-size", "40px")
     }
     else {
        $(".item2").css("background", "rgb(153, 226, 255)")
        $("#a2").css("font-size", "20px")
     }

     if($(".item3:hover").length == 1) {
        $(".item3").css("background", "rgb(255, 253, 250)")
        $("#a3").css("font-size", "30px")
     }
     else {
        $(".item3").css("background", "rgb(161, 161, 161)")
        $("#a3").css("font-size", "20px")
     }


     if($(".item4:hover").length == 1) {
        $(".item4").css("background", "rgb(255, 253, 250)")
        $("#a4").css("font-size", "30px")
     }
     else {
        $(".item4").css("background", "rgb(255, 214, 138)")
        $("#a4").css("font-size", "20px")
     }

    })