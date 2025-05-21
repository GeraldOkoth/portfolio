// This code asks the webpage visitor to enter name upon clicking the Resume download button on the home page
const downloadCvBtn = document.getElementById("DownloadBtn");
const myHref = downloadCvBtn.getAttribute("href");

function displayAlert() {
    const visitorName = prompt("Please enter your name on this prompt:");
    localStorage.setItem("name", visitorName);
    const displayVisitorName = localStorage.getItem("name")
    if (!displayVisitorName)
        displayAlert();
    else {
        if (myHref === `../Assets/gerald_okoth_myjobmag_curriculum_vitae.pdf`) {
            alert(`Thank you ${visitorName} for your download, Resume will be ready in ashort while.`);
        }
        else {
            alert(`Sorry, ${visitorName} Resume has not yet been uploaded, Please check again later.`);
        }

    }
}

downloadCvBtn.addEventListener("click", displayAlert); 

