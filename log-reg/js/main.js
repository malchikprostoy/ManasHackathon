$(document).ready(function() {
    $('#register-form').submit(function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the form data
        var formData = {
            name: $('#name').val(),
            gmail: $('#email').val(),
            password: $('#pass').val()
        };
        console.log(formData);

        // Send the form data to the backend
        $.ajax({
            type: 'POST',
            url: 'http://192.168.95.79:8080/api/data12', // Replace with your backend endpoint
            data: JSON.stringify(formData),
            contentType: 'application/json',
            success: function(response) {
                console.log('Registration successful:', response);
                window.location.href = 'C:/Users/HP/Desktop/Manas/forma/index.html'
                // Optionally, redirect the user to another page
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
                // Handle errors
            }
        });
    });
});