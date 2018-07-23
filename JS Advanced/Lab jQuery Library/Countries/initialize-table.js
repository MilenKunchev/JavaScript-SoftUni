function initializeTable() {
    // Attach event listener to Create
    $('#createLink').click(addCountry);

    // Add default entries -> call create table row & sppend to table
    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');
    fixLinks();

    // Adjust links
    function fixLinks() {
        $('tr a').show();
        $('tr:last-child a:contains(Down)').hide();
        $('tr:eq(2) a:contains(Up)').hide();
    }

    // Read input and call create row
    function addCountry() {
        let name = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        $('#newCountryText').val('');
        $('#newCapitalText').val('');

        createCountry(name, capital);
        fixLinks();
    }

    //Create table row
    function createCountry(name, capital) {
        let row = $('<tr>')
            .append($(`<td>${name}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($(`<td>`)
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append(' ')
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append(' ')
                .append($('<a href="#">[Delete]</a>').click(deleteRow)));
        row.css('display', 'none');
        row.appendTo($('#countriesTable'));
        row.fadeIn(1500);
    }

    // Move row up
    function moveUp() {
        let currentRow = $(this).parent().parent();
        currentRow.insertBefore(currentRow.prev());
        fixLinks();
    }

    // Move row down
    function moveDown() {
        let currentRow = $(this).parent().parent();
        currentRow.insertAfter(currentRow.next());
        fixLinks();
    }

    // Delete row
    function deleteRow() {
        $(this).parent().parent().remove();
        fixLinks();
    }
}