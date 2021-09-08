$(function() {
    $("#addMoreWork").click(function(e) {
        e.preventDefault();
        $("#workFormContent").first().clone().removeClass('#workFormContent').appendTo("#secondaryBoxes");

    });

    $("#finishApplicationBtn").click(function(e) {
        e.preventDefault();
        location.reload();

    });

    $("#saveApplicationBtn").click(function(e) {
        e.preventDefault();

        alert("Application has been saved! (not really though)")

    });


});