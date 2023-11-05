$(document).ready(function () {
    $("#box1").click(function(){
        $(this).fadeOut("slow");
    });
    $("#box2").click(function(){
        $(this).fadeOut("fast");
    });
    $("#box3").click(function(){
        $(this).toggle(3000);
    });
    $("#box4").click(function(){
        $(this).toggle(1000,function (){
            alert()
        });
    });
    $("#box5").click(function() {
        $(".s").fadeToggle(1000)
    });
    let OP=1
    $("#yellow").click(function() {
        OP-=0.2
        $(this).fadeTo(1,OP)
    })
});