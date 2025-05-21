const myProfile = document.getElementById("hero-image");

myProfile.onclick = () => {
    const myAttribute = myProfile?.getAttribute("src");
    if (myAttribute === "../Images/DSC_0002.JPG")
        myProfile?.setAttribute("src", "../Images/DSC_0002.JPG");
    else
        myProfile?.setAttribute("src", "../Images/IMG_1481_transcpr.jpg");
}