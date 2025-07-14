document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("reveal-btn");
  let message = document.getElementById("surprise-text");

  button.addEventListener("click", function () {
    message.classList.toggle("hidden");

    if (!message.classList.contains("hidden")) {
      button.innerText = "Hide Message";
    } else {
      button.innerText = "Click Me";
    }
  });
});
