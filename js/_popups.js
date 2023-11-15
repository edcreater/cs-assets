$(document).ready(function () {
    $('#popup-form input[type=submit]').attr('disabled', 'disabled');
    $('#popup-form-calc input[type=submit]').attr('disabled', 'disabled');

    /*
    $('.popup-form input[type=text]').on('keyup', function () {
        let empty = false;

        $('.popup-form input[type=text]').each(function () {
            empty = $(this).val().length == 0;
        });

        if (empty)
            $('.popup-form input[type=submit]').attr('disabled', 'disabled');
        else
            $('.popup-form input[type=submit]').attr('disabled', false);
    });
    */

    $('#popup-form input[type=text], #popup-form input[type=tel]').keyup(function () {

        var empty = false;
        $('#popup-form input[type=text], #popup-form input[type=tel]').each(function () {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });

        if (empty) {
            $('#popup-form[type="submit"]').attr('disabled', 'disabled');
        } else {
            $('#popup-form[type="submit"]').removeAttr('disabled');
        }
    });

    $('#popup-form-calc input[type=text], #popup-form-calc input[type=tel]').keyup(function () {

        var empty = false;
        $('#popup-form-calc input[type=text], #popup-form-calc input[type=tel]').each(function () {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });

        if (empty) {
            $('#popup-form-calc[type="submit"]').attr('disabled', 'disabled');
        } else {
            $('#popup-form-calc[type="submit"]').removeAttr('disabled');
        }
    });

});