const chat = {};

chat.enableSend = function () {
  const popup = document.getElementById("popup");
  const audio = document.querySelector("audio");
  const textarea = document.querySelector("textarea");
  textarea.oninput = handleInput;

  function handleInput(e) {
    if (e.target.value !== "") {
      button.setAttribute("style", "color: black; cursor: pointer");
    } else {
      button.setAttribute("style", "color: #b5bfdb; cursor: not-allowed");
      button.addEventListener("click", function (e) {
        e.preventDefault();
      });
    }
  }

  const button = document.querySelector("button");
  button.addEventListener(
    "click",
    function () {
      audio.play();
      chat.pickAText();
      popup.setAttribute("style", "visibility: visible");
    },
    false
  );

  document.addEventListener("keydown", function (e) {
    if (e.code === "Escape") {
      popup.setAttribute("style", "visibility: hidden");
    }
  });

  textarea.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      e.preventDefault();
      button.click();
    }
  });
};

chat.pickAText = function () {
  anxietyText = [
    "Damn, you sure you want to send that?",
    "Literally, what are you even trying to say here?",
    "You're really bad at this",
    "Can you please go outside and smell some fresh air?",
    "You need some grammar lessons",
    "For the love of god, enjoy your youth and get off the internet",
    "That's a risky text...",
    "I'm not letting you send that.",
    "Whatever happened to going outside and having a life?",
    "You need to stop romantacizing your life, your life is just not that interesting",
    "No... that's not good dude",
  ];

  const meanMessages = document.getElementById("meanMessages");
  function append() {
    randomText = anxietyText[Math.floor(Math.random() * anxietyText.length)];
    meanMessages.innerHTML = randomText;
  }

  return append();
};

chat.init = function () {
  chat.enableSend();
  chat.pickAText();
};

document.addEventListener("DOMContentLoaded", function () {
  chat.init();
});
