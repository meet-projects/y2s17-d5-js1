$(document).ready(function() {

    $('#btn-one').click(function() {
        // This line pulls the data out of the text box and converts
        // it from a string to a number:
        var data = parseInt($('#input-one').val(), 10);
        // The variable data stores whatever is in the box!
        //-----------------------------
        // BEGINNING OF EXERCISE 1


        // END OF EXERCISE 1
        // ----------------------------
    });


    $('#btn-three').click(function() {
        // This line pulls the data out of the text box
        // and stores it as a string:
        var data = $('#input-three').val();
        // This line makes a popup window with the result:
        alert('Your function returned "' + myFunction(data) + '"');
    });

});


function myFunction(data) {
    //-----------------------------
    // BEGINNING OF EXERCISE 3


    // END OF EXERCISE 3
    // ----------------------------
}