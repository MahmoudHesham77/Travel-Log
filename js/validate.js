$(function () {
    var formFirstName = true,
        formSecondName = true,
        formEmail = true,
        formMessage = true;

    // firstName validation
    $('.first-name').blur(function () {
        if ($(this).val().length < 4) {
            $(this).css('border', '1px solid #f00');
            $(this).parent().find('.error-first').fadeIn(200);
            formFirstName = true;
        } else {
            $(this).css('border', '1px solid green');
            $(this).parent().find('.error-first').fadeOut(200);
            formFirstName = false;
        }
    });
    // secondName validation
    $('.second-name').blur(function () {
        if ($(this).val().length < 4) {
            $(this).css('border', '1px solid #f00');
            $(this).parent().find('.error-second').fadeIn(200);
            formSecondName = true;
        } else {
            $(this).css('border', '1px solid green');
            $(this).parent().find('.error-second').fadeOut(200);
            formSecondName = false;
        }
    });
    // Email validation
    $('.email').blur(function () {
        if ($(this).val() === '') {
            $(this).css('border', '1px solid #f00');
            $(this).parent().find('.error-email').fadeIn(200);
            formEmail = true;
        } else {
            $(this).css('border', '1px solid green');
            $(this).parent().find('.error-email').fadeOut(200);
            formEmail = false;
        }
    });
    // message validation
    $('.message').blur(function () {
        if ($(this).val().length < 10) {
            $(this).css('border', '1px solid #f00');
            $(this).parent().find('.error-message').fadeIn(200);
            formMessage = true;
        } else {
            $(this).css('border', '1px solid green');
            $(this).parent().find('.error-message').fadeOut(200);
            formMessage = false;
        }
    });
    //submit validation
    $('.sec7-form').submit(function (e) {
        if (formFirstName === true || formSecondName === true || formEmail === true || formMessage === true) {
            e.preventDefault();
            $('.first-name, .second-name, .email, .message').blur();
        }
    });
});