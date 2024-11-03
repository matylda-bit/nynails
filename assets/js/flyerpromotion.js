$(document).ready(function () {
    fLoadFlyer();

    function fLoadFlyer() {
        fShow_img_loader();
        var sID = 0;

        $.ajax(
        {
            type: "POST",
            url: "dealprocess.aspx/sLoadFlyerPromotion",
            data: "{'sID':'" + sID + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: "true",
            cache: "false",
            success: function (msg) {
                $("#loadflyerpromotion").html(msg.d);
                fHide_img_loader();
            },
            Error: function (x, e) {
                alert("Some error occured! Please try again.");
            }
        });
    }

});

//Hàm loader img
function fShow_img_loader() {
    $(".se-pre-con").show();
}
function fHide_img_loader() {
    $(".se-pre-con").hide();
}
