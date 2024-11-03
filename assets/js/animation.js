$(document).ready(function () {
    $("#txtPhone-contact").mask("999-999-9999");
    $("#txtPhone").mask("999-999-9999");
    $("#subbar").click(function () {
        $("#signup_box").css('display', 'block');
    });
    $("#subbar_m").click(function () {
        $(".bg-popup").css('display', 'block');
        $("#signup_box").css('display', 'block');
    });
    $("#close_signup").click(function () {
        $("#signup_box").css('display', 'none');
    });
    $("#subbar").click(function () {
        $(".bg-popup").css('display', 'block');
    });
    $("#close_signup").click(function () {
        $(".bg-popup").css('display', 'none');
    });

    //Contact Form
    $("#bSend").click(function () {
        $("#bSend").fadeOut(50);
        $("#formwait").fadeIn(20);

        //Check form
        var sNotify = "";

        //Name
        if ($("#txtName").val() == "") {
            sNotify += "* Please input the first name<br/>";
        }

        //Email
        if ($("#txtEmail-contact").val() == "") {
            sNotify += "* Please input the Email<br/>";
        }
        else {
            if (!checkEmail($("#txtEmail-contact").val())) {
                sNotify += "*Invalid Email<br/>";
            }
        }
        //Adress
        if ($("#txtAdress").val() == "") {
            sNotify += "* Please input the Address<br/>";
        }

        //Phone
        if ($("#txtPhone-contact").val() == "") {
            sNotify += "* Please input your phone number<br/>";
        }
        else {
            if (!checkPhone($("#txtPhone-contact").val())) {
                sNotify += "*Invalid Phone Number<br/>";
            }
        }
        

        //Content
        //Name
        if ($("#txtContent").val() == "") {
            sNotify += "* Please input the message<br/>";
        }

        if (sNotify != "") {
            $("#formnotifycontent").html(sNotify);
            $("#formnotify").fadeIn(50);
            $("#bSend").fadeIn(50);
            $("#formwait").fadeOut(20);
        }
        else {
            var sName = $("#txtName").val();
            var sEmail = $("#txtEmail-contact").val();
            var sAdress = $("#txtAdress").val();
            var sPhone = $("#txtPhone-contact").val();
            var sContent = $("#txtContent").val();

            $.ajax(
            {
                type: "POST",
                url: "process.aspx/contactus",
                data: "{'sName':'" + sName + "','sEmail':'" + sEmail + "','sPhone':'" + sPhone + "','sContent':'" + sContent + "','sAdress':'" + sAdress + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: "true",
                cache: "false",

                success: function (msg) {
                    if (msg.d == "0") {
                        $("#formnotifycontent").html("Your message has been sent. Thank you!");
                        $("#formnotify").fadeIn(50);
                        $("#txtName").val("");
                        $("#txtEmail-contact").val("");
                        $("#txtAdress").val("");
                        $("#txtPhone-contact").val("");
                        $("#txtContent").val("");
                    }
                    $("#formwait").fadeOut(20);
                    $("#formsubmit").fadeIn(50);
                },

                Error: function (x, e) {
                    $("#formnotifycontent").html("Some Error! Please try again later");
                    $("#formnotify").fadeIn(50);
                }
            });
        }
    });

    $("#formnotifyok").click(function () {
        $("#formnotifycontent").html("");
        $("#formnotify").fadeOut(50);
    });

    //Party Form
    $("#bPartySend").click(function () {
        $("#bPartySend").fadeOut(50);
        $("#formwait").fadeIn(20);

        //Check form
        var sNotify = "";

        //Name
        if ($("#txtName").val() == "") {
            sNotify += "* Please input the first name<br/>";
        }

        //Email
        if ($("#txtEmail-contact").val() == "") {
            sNotify += "* Please input the Email<br/>";
        }
        else {
            if (!checkEmail($("#txtEmail-contact").val())) {
                sNotify += "*Invalid Email<br/>";
            }
        }

        //Phone
        if ($("#txtPhone-contact").val() == "") {
            sNotify += "* Please input your phone number<br/>";
        }
        else {
            if (!checkPhone($("#txtPhone-contact").val())) {
                sNotify += "*Invalid Phone Number<br/>";
            }
        }

        //Content
        if ($("#txtContent").val() == "") {
            sNotify += "* Please input the message<br/>";
        }

        //Date
        if ($("#txtDate").val() == "") {
            sNotify += "* Please input the Party Date<br/>";
        }

        //Size
        if ($("#txtSize").val() == "") {
            sNotify += "* Please input the Party Size<br/>";
        }

        if (sNotify != "") {
            $("#formnotifycontent").html(sNotify);
            $("#formnotify").fadeIn(50);
            $("#bPartySend").fadeIn(50);
            $("#formwait").fadeOut(20);
        }
        else {
            var sName = $("#txtName").val();
            var sEmail = $("#txtEmail-contact").val();
            var sPhone = $("#txtPhone-contact").val();
            var sContent = $("#txtContent").val();
            var sDate = $("#txtDate").val();
            var sSize = $("#txtSize").val();

            $.ajax(
            {
                type: "POST",
                url: "process.aspx/party2",
                data: "{'sName':'" + sName + "','sEmail':'" + sEmail + "','sPhone':'" + sPhone + "','sContent':'" + sContent + "','sDate':'" + sDate + "','sSize':'" + sSize + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: "true",
                cache: "false",

                success: function (msg) {
                    if (msg.d == "0") {
                        //$("#formnotifycontent").html("Thank you for messaging us. We will contact you as soon as possible.");
                        $("#formnotifycontent").html("We have received your request and will contact you for final confirmation. If you don't hear back from us, please give us a call.");
                        $("#formnotify").fadeIn(50);
                        $("#txtName").val("");
                        $("#txtEmail-contact").val("");
                        $("#txtPhone-contact").val("");
                        $("#txtContent").val("");
                        $("#txtDate").val("");
                        $("#txtSize").val("");
                    }
                    $("#formwait").fadeOut(20);
                    $("#formsubmit").fadeIn(50);
                },

                Error: function (x, e) {
                    $("#formnotifycontent").html("Some Error! Please try again later");
                    $("#formnotify").fadeIn(50);
                }
            });
        }
    });

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
    //Contact Form
	
});




