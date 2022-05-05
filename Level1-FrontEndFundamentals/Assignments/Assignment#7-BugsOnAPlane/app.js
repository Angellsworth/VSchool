const form = document.getElementById("airline-form");
const submit = document.getElementById("submit");
// const query = document.querySelector;
const windowMessageButton = document.querySelector("#window-message");

function formAlert() {
  const firstName = form.elements["first-name"].value;
  const lastName = form.elements["last-name"].value;
  const age = form.elements["age"].value;
  const gender = form.elements["gender"].value;
  const location = form.elements["travel-location"].value;
  const diet = [];
  if (form.elements["vegan"].checked) {
    diet.push(document.getElementById("vegan").value);
  }
  if (form.elements["gluten"].checked) {
    diet.push(document.getElementById("gluten").value);
  }
  if (form.elements["paleo"].checked) {
    diet.push(document.getElementById("paleo").value);
  }
  alert(
    "First Name: " +
      firstName +
      ", Last Name: " +
      lastName +
      ", Age: " +
      age +
      ", Gender: " +
      gender +
      ", Travel Location: " +
      location +
      ", Diet: " +
      diet +
      " Awesome, now if you die, it won't be an accident.."
  );
}

submit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("form submitted");
  formAlert();
});

// windowMessageButton.addEventListener("submit", () => {
//   targetFrame.postMessage("hello there", targetOrigin);
// });
