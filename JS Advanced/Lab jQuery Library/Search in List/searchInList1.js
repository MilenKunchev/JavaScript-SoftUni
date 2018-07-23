function search() {
    let searchedText = $('#searchText').val();

    let matchedElements = $(`#towns li:contains('${searchedText}')`);
    $('#towns li').css('font-weight', '');
    matchedElements.css('font-weight', 'bold');
    $("#result").text(matchedElements.length
        + ' maches found.');
}