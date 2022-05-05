const form = document.myForm;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log(form.gender.value);
  // console.log(form.entertainment)

  //   const checkedInputs = [];

  //   for (let i = 0; i < form.entertainment.length; i++) {
  //     console.log(form.entertainment[i].checked) in form.entertainment[i].checked;
  //     checkedInputs.push(form.entertainment[i].value);
  //   }
  //   console.log(checkedInputs);

  console.log(form.city.value);
});
