$( document ).ready(function() {
    //initializing
    // setting the height
    var height = $(window).height() - $(".navbar").outerHeight()
    $(".container-main").css("height", height);

    //checking the mobile
    var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
    if(mobile){
        $(".container-main").on( "swiperight", function(){
            $( this).hide();
        });
        console.log("Mobile");
    }else
        console.log("No");


    //resizing
    $(window).resize(function(){
        height = $(window).height() - $(".navbar").outerHeight()
        $(".container-main").css("height", height);
    });
});
