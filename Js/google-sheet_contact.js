const scriptURL = 'https://script.google.com/macros/s/AKfycbw7mGRMOeIqxtCdYK4RQJ6dJjPfi1N9JCpjuZA5StjLA5aJSMeIOgHPNkeV7jUQYT7p/exec'
const form = document.forms['submit-to-google-sheet']
const mesg = document.getElementById("mesg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        mesg.innerHTML = "Message has been successfully sent!"
        setTimeout(function(){
            mesg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})