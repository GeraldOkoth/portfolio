document.addEventListener('DOMContentLoaded', function() {
    let custom_button = document.querySelector(".custom-button");

    if (custom_button) {
        custom_button.addEventListener('click', function () {
            let inputs = document.querySelectorAll('input');
            let inputNotEmpty = false;

            inputs.forEach(function(input) {
                if (input.value.trim() !== '') {
                    inputNotEmpty = true;
                }
            });

            if (inputNotEmpty) {
                Swal.fire({
                    title: 'Success',
                    text: 'Your message has been successfully recieved, we will get to you shortly.',
                    icon: 'info',
                    confirmButtonText: 'OK'
                });
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Please fill in the input field',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        });
    }
});
