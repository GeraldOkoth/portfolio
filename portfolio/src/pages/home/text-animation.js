export default function textAnimate() {
  const textArray = [
    "Frontend Developer",
    "Web Designer",
    "UI/UX Designer",
    "Musician",
    "Video Editor",
  ];
  const dynamicText = document.getElementById("dynamic-text");
  let textIndex = 0;

  function typeText(text, callback) {
    let i = 0;
    const typingInterval = setInterval(() => {
      dynamicText.textContent = text.slice(0, ++i);
      if (i === text.length) {
        clearInterval(typingInterval);
        setTimeout(callback, 1000); // Pause before deleting
      }
    }, 100);
  }

  function deleteText(callback) {
    const deleteInterval = setInterval(() => {
      dynamicText.textContent = dynamicText.textContent.slice(0, -1);
      if (dynamicText.textContent.length === 0) {
        clearInterval(deleteInterval);
        callback();
      }
    }, 50);
  }

  function loop() {
    typeText(textArray[textIndex], () => {
      deleteText(() => {
        textIndex = (textIndex + 1) % textArray.length;
        loop();
      });
    });
  }

  loop(); // Start the animation
}
