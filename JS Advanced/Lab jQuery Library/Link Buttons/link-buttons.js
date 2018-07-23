function attachEvents() {
    $('a').click(clicked);

    function clicked() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}