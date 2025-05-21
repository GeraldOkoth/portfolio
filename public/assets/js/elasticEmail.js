/*Script to send emai
Fom Elasticemail.com/SMTPJS.com
This code is not working*/

function sendMail(){
    Email.send({
        SecureToken: "23a0e1b7-6dd7-4f96-8bc3-3819c13aeb02",
        To : 'okothgerald449@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("mesgSubject").value,
        Body : "First Name: " + document.getElementById("firstname").value +
                " <br> Last Name: " + document.getElementById("lastname").value +
                " <br> Email: " + document.getElementById("email").value +
                " <br> Number: " + document.getElementById("phoneNumber").value +
                " <br> Subject: " + document.getElementById("mesgSubject").value +
                " <br> Message: " + document.getElementById("message").value
    }).then(
    message => alert("message sent successfully!")
    );
    document.getElementById("mesg").innerHTML="message has been sent. We will respond to you shortly.";
    document.getElementById("mesg").style.display="block";
}