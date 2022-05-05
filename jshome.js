$(document).mousemove(function(){

    if($(".item1:hover").length == 1) {
        //$(".item1").css("background", "rgb(255, 253, 250)")
        $(".item1").css("width", "600px", "height", "100px")
        $("#goback").css("font-size", "30px")
        $("#goback").css("text-align", "centre")
        $("#goback").css("letter-spacing", "normal")
     }
     else {
        //$(".item1").css("background", "rgb(153, 169, 216)")
        $(".item1").css("width", "100px", "height", "300px")
        $("#goback").css("font-size", "15px")
        $("#goback").css("text-align", "centre")
        $("#goback").css("letter-spacing", "normal")
     }
})