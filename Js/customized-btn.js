// This code asks the webpage visitor to enter name upon clicking the Resume download button on the home page
const downloadCvBtn = document.getElementById("DownloadBtn");

function displayAlert() {
    const visitorName = prompt("Please enter your name on this prompt:");
    localStorage.setItem("name", visitorName);
    displayVisitorName = localStorage.getItem("name")
    if (!displayVisitorName)
        displayAlert();
    else
        alert("Sorry, " +visitorName + " Resume has not yet been uploaded, Please check again later.");
}

downloadCvBtn.addEventListener("click", displayAlert); 
