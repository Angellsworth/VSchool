const form = document["my-form"];

//submit event

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = form.firstName.value;
  form.firstName.value = "";
  const middleName = form.middleName.value;
  form.middleName.value = "";
  const lastName = form.lastName.value;
  form.lastName.value = "";
  const date = form.date.value;
  form.date.value = "";

  //1. <h1></h1> *create an element
  const h1 = document.createElement("h1");
  //2. <h1>content</h1> *edit content
  h1.textContent = firstName + " " + middleName + " " + lastName + " " + date;
  //3. Append to dom
  document.getElementsByTagName("body")[0].append(h1);
});
