const text = ["Developer", "Student", "UI Designer"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === text.length){
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if(letter.length === currentText.length){

    setTimeout(() => {

      index = 0;
      count++;

      type();

    }, 1500);

  }else{

    setTimeout(type, 120);

  }

})();
  
  // CONTACT FORM ANIMATION

const contactForm = document.getElementById("contactForm");
const contactInputs = document.querySelectorAll(
".contact-group input, .contact-group textarea"
);

// INPUT EFFECT
contactInputs.forEach(input => {

  input.addEventListener("focus", () => {
    input.style.transform = "scale(1.03)";
    input.style.boxShadow = "0 0 15px #ff9800";
    input.style.transition = "0.3s";
  });

  input.addEventListener("blur", () => {
    input.style.transform = "scale(1)";
    input.style.boxShadow = "none";
  });

});

// BUTTON SUBMIT EFFECT
contactForm.addEventListener("submit", function(e){

  e.preventDefault();

  const button = document.querySelector(".contact-button");

  button.innerHTML = "Sending...";
  button.style.background = "#22c55e";
  button.style.color = "#fff";

  setTimeout(() => {

    button.innerHTML = "Message Sent ✓";

  }, 1500);

  setTimeout(() => {

    button.innerHTML = "Send Message";
    button.style.background = "#ff9800";
    button.style.color = "#000";

    contactForm.reset();

  }, 3000);

});

// INITIAL STATE
contactSection.style.opacity = "0";
contactSection.style.transform = "translateY(100px)";