    // alert("Naisr")
$(document).ready(function () {
    $("#an").on("click", function (e) {
        e.preventDefault();
        var hash = this.hash;
        $("html,body").animate({
            scrollTop: $(hash).offset().top
        }, 800)
    })


    // for E
     $("#e").on("click", function (e) {
        e.preventDefault();
        var hash = this.hash;
        $("html,body").animate({
            scrollTop: $(hash).offset().top
        }, 800)
    })

    // for p
     $("#p").on("click", function (e) {
        e.preventDefault();
        var hash = this.hash;
        $("html,body").animate({
            scrollTop: $(hash).offset().top
        }, 800)
    })


})
