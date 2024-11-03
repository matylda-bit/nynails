$(document).ready(function () {
    $("#txtPhone2").mask("999-999-9999");
    $("#txtPhone").mask("999-999-9999");
    $("#txtDate").mask("99/99/9999");

    $("#formnotifyok").click(function () {
        $("#formnotifycontent").html("");
        $("#formnotify").hide();
    });


    //Party Form
    $("#Btn_Party").click(function () {
        $("#Btn_Party").hide();
        $("#formwait").show();

        //Check form
        var sNotify = "";

        //Name
        if ($("#txtName").val() == "") {
            sNotify += "* Please input the Name<br/>";
        }

        //Email
        if ($("#txtEmail2").val() == "") {
            sNotify += "* Please input the Email<br/>";
        }
        else {
            if (!checkEmail($("#txtEmail2").val())) {
                sNotify += "*Invalid Email<br/>";
            }
        }

        //Phone
        if ($("#txtPhone2").val() == "") {
            sNotify += "* Please input your Phone Number<br/>";
        }
        else {
            if (!checkPhone($("#txtPhone2").val())) {
                sNotify += "*Invalid Phone Number<br/>";
            }
        }

        //Date
        if ($("#txtDate").val() == "") {
            sNotify += "* Please input the Party Date<br/>";
        }

        if ($("#txtTime").val() == "") {
            sNotify += "* Please input the Party Time<br/>";
        }

        //Size
        if ($("#txtSize").val() == "") {
            sNotify += "* Please input the Party Size<br/>";
        }

        //Content
        if ($("#txtContent").val() == "") {
            sNotify += "* Please input the Message<br/>";
        }

        if (sNotify != "") {
            $("#formnotifycontent").html(sNotify);
            $("#formnotify").show();
            $("#Btn_Party").show();
            $("#formwait").hide();
        }
        else {
            var sName = $("#txtName").val();
            var sEmail = $("#txtEmail2").val();
            var sPhone = $("#txtPhone2").val();
            var sContent = $("#txtContent").val();
            var sDate = $("#txtDate").val();
            var sSize = $("#txtSize").val();
            var sTime = $("#txtTime").val();

            $.ajax(
            {
                type: "POST",
                url: "party/party.aspx/sPartyBooking",
                data: "{'sName':'" + sName + "','sEmail':'" + sEmail + "','sPhone':'" + sPhone + "','sContent':'" + sContent + "','sDate':'" + sDate + "','sSize':'" + sSize + "','sTime':'" + sTime + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: "true",
                cache: "false",

                success: function (msg) {
                    fClear();
                    $("#formnotifycontent").html("We have received your request and will contact you for final confirmation. If you don't hear back from us, please give us a call.");
                    $("#formnotify").show();
                    $("#formwait").hide();
                    $("#formsubmit").show();
                    $("#Btn_Party").show();
                },

                Error: function (x, e) {
                    $("#formnotifycontent").html("Some Error! Please try again later");
                    $("#formnotify").show();
                }
            });
        }
    });
});

function fClear() {
    $("#txtName").val("");
    $("#txtEmail2").val("");
    $("#txtPhone2").val("");
    $("#txtContent").val("");
    $("#txtDate").val("");
    $("#txtSize").val("");
    $("#txtTime").val("");
}

function checkEmail(email) {
    var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        return false;
    }
    else {
        return true;
    }
}

function checkPhone(email) {
    var filter = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    if (!filter.test(email)) {
        return false;
    }
    else {
        return true;
    }
}
