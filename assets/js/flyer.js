$(document).ready(function () {
    fLoadFlyer();

    function fLoadFlyer() {
        var sID = 0;
        $.ajax(
        {
            type: "POST",
            url: "dealprocess.aspx/sLoadFlyer",
            data: "{'sID':'" + sID + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: "true",
            cache: "false",
            success: function (msg) {
                $("#loadflyer").html(msg.d);
                if($("#loadflyer").html()=="")
                {
                    $("#groupnoti").hide();
                }
                $("#closenoti").click(function(){
                    $("#groupnoti").hide();
                });
            },
            Error: function (x, e) {
                alert("Some error occured! Please try again.");
            }
        });
    }

});
