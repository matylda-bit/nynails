$(document).ready(function () {
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    var sID = getUrlParameter('id');
    if (sID != "") {
        if (sID != "1") {
            $("#menuclick" + sID).click();
            $('html,body').animate({
                scrollTop: $("#menuclick" + sID).offset().top
            }, 10);
        }
    }


});




