const textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
  const keyPressed = event.key.toLowerCase();
  
  if (keyPressed.match(/[a-z]/)) {
    if (document.activeElement === textarea) {
      textarea.value += keyPressed.repeat(1);
    } else {
      textarea.value += keyPressed;
    }
  }
});
