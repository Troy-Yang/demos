define(['jquery'], function ($) {
    $(function () {
        $("ul#header li.item").bind("click", function () {
            var commandText = $(this).attr('command');
            var pageUrl = "/pages/" + commandText + ".html";
            $("#content").load(pageUrl, function () {
            });
        })
    });
})