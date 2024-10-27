$(function()
{
    $("#menu_1").hover(
        function()
        {
            $("#menu_2").css('opacity', '0.3');
            $("#menu_3").css('opacity', '0.3');
            $("#menu_4").css('opacity', '0.3');
            $("#menu_5").css('opacity', '0.3');
        },
        function()
        {
            $("#menu_2").css('opacity', '1');
            $("#menu_3").css('opacity', '1');
            $("#menu_4").css('opacity', '1');
            $("#menu_5").css('opacity', '1');
        }
    );
});

$(function()
{
    $("#menu_2").hover(
        function()
        {
            $("#menu_1").css('opacity', '0.3');
            $("#menu_3").css('opacity', '0.3');
            $("#menu_4").css('opacity', '0.3');
            $("#menu_5").css('opacity', '0.3');
        },
        function()
        {
            $("#menu_1").css('opacity', '1');
            $("#menu_3").css('opacity', '1');
            $("#menu_4").css('opacity', '1');
            $("#menu_5").css('opacity', '1');
        }
    );
});

$(function()
{
    $("#menu_3").hover(
        function()
        {
            $("#menu_1").css('opacity', '0.3');
            $("#menu_2").css('opacity', '0.3');
            $("#menu_4").css('opacity', '0.3');
            $("#menu_5").css('opacity', '0.3');
        },
        function()
        {
            $("#menu_1").css('opacity', '1');
            $("#menu_2").css('opacity', '1');
            $("#menu_4").css('opacity', '1');
            $("#menu_5").css('opacity', '1');
        }
    );
});

$(function()
{
    $("#menu_4").hover(
        function()
        {
            $("#menu_1").css('opacity', '0.3');
            $("#menu_2").css('opacity', '0.3');
            $("#menu_3").css('opacity', '0.3');
            $("#menu_5").css('opacity', '0.3');
        },
        function()
        {
            $("#menu_1").css('opacity', '1');
            $("#menu_2").css('opacity', '1');
            $("#menu_3").css('opacity', '1');
            $("#menu_5").css('opacity', '1');
        }
    );
});

$(function()
{
    $("#menu_5").hover(
        function()
        {
            $("#menu_1").css('opacity', '0.3');
            $("#menu_2").css('opacity', '0.3');
            $("#menu_4").css('opacity', '0.3');
            $("#menu_3").css('opacity', '0.3');
        },
        function()
        {
            $("#menu_1").css('opacity', '1');
            $("#menu_2").css('opacity', '1');
            $("#menu_4").css('opacity', '1');
            $("#menu_3").css('opacity', '1');
        }
    );
});