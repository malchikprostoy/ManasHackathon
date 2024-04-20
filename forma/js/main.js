$(document).ready(function(){
    // Initialize form validation
    $("#form-register").validate({
        rules: {
            password : {
                required : true,
            },
            confirm_password: {
                equalTo: "#password"
            }
        },
        messages: {
            username: {
                required: "Please provide an username"
            },
            email: {
                required: "Please provide an email"
            },
            password: {
                required: "Please provide a password"
            },
            confirm_password: {
                required: "Please provide a password",
                equalTo: "Please enter the same password"
            }
        }
    });

    // Initialize form steps
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Back',
            next : '<i class="zmdi zmdi-arrow-right"></i>',
            finish : '<i class="zmdi zmdi-arrow-right"></i>',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            // Update values in the confirmation step
            var name = $('#name').val();
            var surname = $('#surname').val();
            var mname = $('#mname').val();
            var gmail = $('#email').val();
            var date = $('#date').val();
            var gender = $('#gender').val();
            var address = $('#address').val();
            var pcode = $('#pcode').val();
            var diploma = $('#diploma').val();
            var transcript = $('#transcript').val();
            var passport = $('#passport').val();
            var mticket = $('#mticket').val();
            var adoc = $('#adoc').val();

            $('#name-val').text(name);
            $('#surname-val').text(surname);
            $('#mname-val').text(mname);
            $('#email-val').text(email);
            $('#date-val').text(date);
            $('#gender-val').text(gender);
            $('#address-val').text(address);
            $('#pcode-val').text(pcode);
            $('#diploma-val').text(diploma);
            $('#transcript-val').text(transcript);
            $('#passport-val').text(passport);
            $('#mticket-val').text(mticket);
            $('#adoc-val').text(adoc);

            // Enable validation for hidden and disabled fields
            $("#form-register").validate().settings.ignore = ":disabled,:hidden";
            return $("#form-register").valid();
        }
    });

    // Handle form submission
    $('#form-register').submit(function(event){
        event.preventDefault();

        // Get form data
        let formData = {
            name: $('#name').val(),
            surname: $('#surname').val(),
            email: $('#email').val(),
            date: $('#date').val(),
            gender: $('#gender').val(),
            address: $('#address').val(),
            country: 'USA', // Example data
            region: 'California', // Example data
            Street: 'Main Street', // Example data
            postalCode: $('#pcode').val(),
            diplom: 'Bachelor\'s degree', // Example data
            transcription: 'ABCD123', // Example data
            militaryID: 'M123456', // Example data
            otherDocument: 'Passport' // Example data
        };

        // Send data to the server
        $.ajax({
            type: 'POST',
            url: 'http://192.168.95.79:8080/api/data13', // Replace with your backend endpoint
            data: JSON.stringify(formData),
            success: function(response){
                // Handle successful response
                console.log('Data successfully sent to the server');
                console.log(response);
                console.log(formData)
            },
            error: function(xhr, status, error){
                // Handle errors
                console.error('Error sending data to the server:', error);
            }
        });
    });
});
