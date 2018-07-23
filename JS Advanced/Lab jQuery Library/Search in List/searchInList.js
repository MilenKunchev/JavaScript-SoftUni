function search() {
    let searchText = $('#searchText').val();
    let counter = 0;

    $('#towns li').each((index, element)=> {
        if(element.textContent.includes(searchText)){

            $(element).css('font-weight', 'bold');
            counter++;
        }
        $("#result").text(counter + " maches found");
    } )
}