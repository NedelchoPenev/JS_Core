function validate() {
    let isCompany = false;
    setEventHandlers();

    function setEventHandlers() {
        $('#company').on('change', function () {
            let companyFieldSet = $('#companyInfo');
            if ($(this).is(':checked')){
                companyFieldSet.slideDown();
                isCompany = true;
            } else {
                companyFieldSet.slideUp();
                isCompany = false;
            }
        })
        
        $('#submit').click(function (event) {
            event.preventDefault();
            validateForm();
        })

    }

    function validateForm() {
        let isValid = true;

        let username = $('#username');
        if (!username.val().match(/^[A-Za-z0-9]{3,20}$/)){
            username.css('border-color', 'red');
            isValid = false;
        } else {
            username.css('border', 'none');
        }

        let email = $('#email');
        if (!email.val().match(/^.*@.*?\..*?$/)){
            email.css('border-color', 'red');
            isValid = false;
        } else {
            email.css('border', 'none');
        }

        let password = $('#password');
        let confirmPass = $('#confirm-password');
        if (!password.val().match(/^[\w]{5,15}$/)){
            password.css('border-color', 'red');
            confirmPass.css('border-color', 'red');
            isValid = false;
        } else {
            if (!confirmPass.val().match(/^[\w]{5,15}$/)){
                password.css('border-color', 'red');
                confirmPass.css('border-color', 'red');
                isValid = false;
            } else {
                if (password.val() != confirmPass.val()){
                    password.css('border-color', 'red');
                    confirmPass.css('border-color', 'red');
                    isValid = false;
                } else {
                    password.css('border', 'none');
                    confirmPass.css('border', 'none');
                }
            }
        }

        if (isCompany){
            let companyNumber = $('#companyNumber')
            if (!companyNumber.val().match(/^[1-9]\d{3}$/)) {
                companyNumber.css('border-color', 'red');
                isValid = false;
            } else {
                companyNumber.css('border', 'none');
            }
        }

        if (isValid){
            $('#valid').show()
        }
    }
}
